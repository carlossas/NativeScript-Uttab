import { Component, OnInit } from '@angular/core';
import { ExamenesService } from '~/app/shared/examenalumno/examen.service';
import { authService } from '~/app/shared/auth';
//ROUTES
import { RouterExtensions } from "nativescript-angular/router";
import { NavigationEnd, Router } from "@angular/router";

@Component({
	moduleId: module.id,
	selector: 'listaExamen',
	templateUrl: './listaExamen.component.html',
	styleUrls: ['./listaExamen.component.css']
})

export class ListaExamenComponent implements OnInit {
	public examenes: any[] = [];

	constructor(
		public examenesS: ExamenesService,
		public authS: authService,
		private router: Router, 
		private routerExtensions: RouterExtensions,
	) { 
		this.examenesS.obtenerExamenes(this.authS.usuarioAuth.id_carrera).subscribe( datos=>{
			this.examenes = datos;
			// console.log("Examenes pendientes", datos);
			
		});
	}

	ngOnInit() { }


	irAlExamen(id_examen){
		this.routerExtensions.navigate(['usuario/examen', id_examen], {
			transition: {
				name: "fade"
			},
			clearHistory: true
		});
	}

}