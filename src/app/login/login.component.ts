import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { NgForm } from '@angular/forms';
import { ListPicker } from "ui/list-picker";
import { action } from "ui/dialogs";
//LOADING
import {LoadingIndicator} from "nativescript-loading-indicator";
// modelo
import { Usuario } from '~/app/shared/usuario/usuario.model';
//servicio
import { UsuarioService } from '../shared/usuario/usuario.service';

@Component({
	moduleId: module.id,
	selector: 'login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
	//VARIABLES GLOBALES
	public usuario: Usuario;
	public loader = new LoadingIndicator();

	constructor(
		private router: Router,
		private routerExtensions: RouterExtensions,
		public 	usuarioS: UsuarioService,
	) { 
		
	}

	ngOnInit() {
	}

	login(form: NgForm){
		console.log("ingreso", form.value);

		this.loader.show();

		let user = {
			matricula: form.value.matricula,
			contrasena: form.value.contrasena
		}

		this.usuarioS.login(user).subscribe( datos=>{
			
			this.loader.hide();

			if(datos.error){
				let options = {
					title: "Alerta",
					message: datos.mensaje,
					okButtonText: "OK"
				};
				
				alert(options);

			}else{
				this.usuario = datos.usuario;
				console.log("login function", this.usuario);
			}

		});

	}
   

	irAtras(){
		this.routerExtensions.navigate(["/home"], {
			transition: {
				name: "fade"
			}
		});
	}
}