import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";

import { NgForm } from '@angular/forms';
import { action } from "ui/dialogs";
// modelo
import { Usuario } from '~/app/shared/usuario/usuario.model';
//servicio
import { UsuarioService } from '../shared/usuario/usuario.service';

@Component({
	moduleId: module.id,
	selector: 'usuario',
	templateUrl: './usuario.component.html',
	styleUrls: ['./usuario.component.css']
})

export class UsuarioComponent implements OnInit {
	//VARIABLES GLOBALES
	public isLoading: boolean = false;
	public usuario: Usuario;
	constructor(
		private router: Router,
		private routerExtensions: RouterExtensions,
		public 	usuarioS: UsuarioService,
	) { 
	}

	ngOnInit() {
	}

	navegar(ruta: string){
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