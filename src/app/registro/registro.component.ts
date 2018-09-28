import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { NgForm } from '@angular/forms';
import { ListPicker } from "ui/list-picker";
import { action } from "ui/dialogs";

// modelo
import { Usuario } from '~/app/shared/usuario/usuario.model';
//servicio
import { UsuarioService } from '../shared/usuario/usuario.service';
import { CarrerasService } from '~/app/shared/carreras/carreras.service';

@Component({
	moduleId: module.id,
	selector: 'registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
	//VARIABLES GLOBALES
	public isLoading: boolean = false;
	public usuario: Usuario;
	public carreras: any [];
	public item: any;
	constructor(
		private router: Router,
		private routerExtensions: RouterExtensions,
		public 	usuarioS: UsuarioService,
		public carrerasS: CarrerasService
	) { 
		//INICIAR CLASE USUARIO
		this.usuario = new Usuario();

		//OBTENER LAS CARRERAS
        this.carrerasS.obtenerCarreras().subscribe( result=>{
			this.carreras = result;
			this.item = {
                items: result,
                length: result.length,
                getItem: function(index) {
                    return this.items[index].nombre;
				}
			}
		  console.log("carreras", this.carreras);
		  
		});
	}

	ngOnInit() {
	 }
   
	
	registro(form: NgForm){
		console.log("form valid", form.valid);
		
		if(!form.valid){
			console.log("complete sus datos");
			return;
		}

		if (form.value.carrera === undefined){
			form.value.carrera = 0;
		}

		let usuario: Usuario = {
			matricula: form.value.matricula,
			nombre: form.value.nombre,
			correo: form.value.correo.toLowerCase(),
			contrasena: form.value.contrasena,
			id_carrera: this.carreras[form.value.carrera].id_carrera,
			tipo: 0
		}
		this.isLoading = true;

		this.usuarioS.register(usuario).subscribe( (datos)=>{
			console.log("register function:", datos);
			this.isLoading = false;
			if(datos.mensaje == "El usuario ya existe"){
				let options = {
					title: "Alerta",
					message: "Este usuario ya se encuentra registrado",
					okButtonText: "OK"
				};
				
				alert(options);
			}
			if(!datos.error){
				let confirmOptions: any = {
					title: "Perfecto",
					message: "Su registro se realizo con exito",
					okButtonText: "Ok",
				};
				
				var alerta:any = confirm(confirmOptions);
				alerta.then((result: any) => {
					this.routerExtensions.navigate(["/login"], {
						clearHistory: true,
						transition: {
							name: "fade"
						}
					});
				});
			}
			
		}); 
	
	}

	irAtras(){
		this.routerExtensions.back();
	}
}