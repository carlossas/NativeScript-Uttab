import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router, ChildrenOutletContexts } from '@angular/router';
import * as app from 'application';
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
//LOCALSTORAGE
import * as localStorage from 'nativescript-localstorage';
//SERVICIO
import { authService } from "./shared/auth";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    styleUrls: ["app.component.css"],
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    private firsPage: string; 

    constructor(
        private router: Router, 
        private routerExtensions: RouterExtensions,
        public authS: authService
        ) {
            
        let parseUser:any = localStorage.getItem('usuario');
        this.authS.usuarioAuth = JSON.parse(parseUser);
        //UNA VEZ QUE SE OBTIENE EL USUARIO DE LOCAL STORAGE, VERIFICA QUE ESTE AUTENTICADO
        if(this.authS.usuarioAuth != undefined){
            if (this.authS.usuarioAuth.tipo === "0"){
                this.firsPage = "usuario"
            }
            if (this.authS.usuarioAuth.tipo === "1"){
                this.firsPage = "profesor"
            }
            
            this.routerExtensions.navigate(["/"+this.firsPage], {
                clearHistory: true,
                transition: {
                    name: "fade"
                }
            });     
        }
         
    }

    cerrarSesion(){
        localStorage.removeItem('usuario');
        
        setTimeout(() => {
            this.authS.usuarioAuth = null;
            this.routerExtensions.navigate(["/home"], {
                clearHistory: true,
                transition: {
                    name: "fade"
                }
            });
        }, 500);
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    ngOnInit(): void {
        this._sideDrawerTransition = new SlideInOnTopTransition();

        this.router.events
        .pipe(filter((event: any) => event instanceof NavigationEnd))
        .subscribe((event: NavigationEnd) => this._activatedUrl = event.urlAfterRedirects);
    }

    get sideDrawerTransition(): DrawerTransitionBase {
        return this._sideDrawerTransition;
    }

    isComponentSelected(url: string): boolean {
        return this._activatedUrl === url;
    }

    navegar(ruta: string){
        this.routerExtensions.navigate([ruta], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });

        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.closeDrawer();
    }
}
