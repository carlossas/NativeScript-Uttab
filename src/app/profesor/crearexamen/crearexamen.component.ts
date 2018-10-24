import { Component, OnInit } from '@angular/core';
import { authService } from '~/app/shared/auth';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { ExamenesService } from '~/app/shared/examenalumno/examen.service';
import { NgForm } from '@angular/forms';
import { CarrerasService } from '~/app/shared/carreras/carreras.service';
import { LoadingIndicator } from 'nativescript-loading-indicator';

@Component({
	moduleId: module.id,
	selector: 'crearexamen',
	templateUrl: './crearexamen.component.html',
	styleUrls: ['./crearexamen.component.css']
})

export class CrearexamenComponent implements OnInit {
	public carreras: any [];
	public item: any;
	public loader = new LoadingIndicator();

	constructor(
		public authS: authService,
		private router: Router, 
		private routerExtensions: RouterExtensions,
		public examenesS: ExamenesService,
		public carrerasS: CarrerasService
	) { }

	ngOnInit() { 
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
		})
	}

	registro(form: NgForm){
		console.log("form valid", form.valid);
		
		if(!form.valid){
			console.log("complete sus datos");
			return;
		}

		// this.loader.show();


		if (form.value.carrera === undefined){
			form.value.carrera = 0;
		}

		let examen: any = {
			nombre: form.value.nombre.toLowerCase(),
			numeroPreguntas: form.value.preguntas.toLowerCase(),
			random: 0,
			id_carrera: this.carreras[form.value.carrera].id_carrera,
			tiempo: 0,
			id_profesor: this.authS.usuarioAuth.id_usuario
		}

		this.examenesS.crearExamen(examen).subscribe( result=>{
			console.log(result);
			
		}) 
		
		console.log("EXAMEN", examen);
		

		
	}
}