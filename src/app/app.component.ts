import { Component, OnInit, ViewChild } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { DrawerTransitionBase, RadSideDrawer, SlideInOnTopTransition } from "nativescript-ui-sidedrawer";
import { filter } from "rxjs/operators";
//LOCALSTORAGE
import * as localStorage from 'nativescript-localstorage';
import { Usuario } from "~/app/shared/usuario/usuario.model";

@Component({
    moduleId: module.id,
    selector: "ns-app",
    styleUrls: ["app.component.css"],
    templateUrl: "app.component.html"
})
export class AppComponent implements OnInit {
    private _activatedUrl: string;
    private _sideDrawerTransition: DrawerTransitionBase;
    public usuario: Usuario;
    public ejemplo: string = "ejemplo1"

    constructor(
        private router: Router, 
        private routerExtensions: RouterExtensions,
        ) {
        // Use the component constructor to inject services.
        let parseUser:any = localStorage.getItem('usuario');
        this.usuario = JSON.parse(parseUser);        

        //UNA VEZ QUE SE OBTIENE EL USUARIO DE LOCAL STORAGE, VERIFICA QUE ESTE AUTENTICADO
        if(this.usuario != undefined){
            this.routerExtensions.navigate(["/usuario"], {
                clearHistory: true,
                transition: {
                    name: "fade"
                }
            });
        }
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
