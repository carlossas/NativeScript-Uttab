import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
import { NgForm } from '@angular/forms';
import { ListPicker } from "ui/list-picker";
import { RadDataForm } from "nativescript-ui-dataform"


// modelo
import { Usuario, Person } from '~/app/shared/usuario/usuario.model';
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
	public isLoading: false;
	public usuario: Usuario;
	public carreras: any [];
	public nombre = ["uno", "dos", "tres"]
	//RADDATAFORM
	private _person: Person;

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
		  console.log("carreras", this.carreras);
		  
		});
	}

	ngOnInit() {
		//RADDATAFORM
		this._person = new Person("John", 23, "john@company.com", "New York", "5th Avenue", 11);
	 }
    //RADDATAFORM
	get person(): Person {
        return this._person;
    }
	
	registro(form: NgForm){
		let usuario: Usuario = {
			nombre: 'carlos',
			contrasena: '123'
		}
		console.log("form value:", form.value);
		
	
	}

	irAtras(){
		this.routerExtensions.back();
	}
}