import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import * as app from "application";
import { RouterExtensions } from "nativescript-angular/router";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
// modelo
import { Usuario } from '~/app/shared/usuario/usuario.model';
//servicio
import { UsuarioService } from '../shared/usuario/usuario.service';

@Component({
	moduleId: module.id,
	selector: 'profesor',
	templateUrl: './profesor.component.html',
	styleUrls: ['./profesor.component.css']
})

export class ProfesorComponent implements OnInit {
	//VARIABLES GLOBALES
	constructor(
		private router: Router,
		private routerExtensions: RouterExtensions,
		public 	usuarioS: UsuarioService,
	) { 		
	}

	ngOnInit() {
	}

    abrirMenu() {
        //CONSTANTE DE NAVEGACION
        const navCtrl = <RadSideDrawer>app.getRootView();
        navCtrl.showDrawer();
    }
   
}