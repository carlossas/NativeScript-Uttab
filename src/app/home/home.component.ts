import { Component, OnInit } from "@angular/core";
import * as app from "application";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationEnd, Router } from "@angular/router";

@Component({
    selector: "Home",
    moduleId: module.id,
    styleUrls: ["./home.component.css"],
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    public auth: boolean = false;

    constructor(private router: Router, private routerExtensions: RouterExtensions) {
    }

    ngOnInit() {
    }

    login(){
        
    }

    registro(ruta: string){
        this.routerExtensions.navigate([ruta], {
            transition: {
                name: "fade"
            }
        });
    }

    abrirMenu() {
        //CONSTANTE DE NAVEGACION
        const navCtrl = <RadSideDrawer>app.getRootView();
        navCtrl.showDrawer();
    }
}
