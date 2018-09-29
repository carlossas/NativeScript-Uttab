import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExamenesService } from '~/app/shared/examenalumno/examen.service';
import { authService } from '~/app/shared/auth';


@Component({
	moduleId: module.id,
	selector: 'examen',
	templateUrl: './examen.component.html',
	styleUrls: ['./examen.component.css']
})

export class ExamenComponent implements OnInit {
	public id: number;
	public preguntas: any[] = [];
	public aciertos: number = 0;
	public totalPreguntas: number = 0;
	public calificacionFinal: number;

	constructor(
		private activatedRoute: ActivatedRoute,
		public examenesS: ExamenesService,
		public authS: authService,
		) { 
		
		this.activatedRoute.params.subscribe(params => {
			this.id = params['id'];
			this.obtenerPreguntasPorId();
		})
	}

	ngOnInit() { }

	responder(respuesta, index){
		// console.log(this.preguntas[index].respuesta);
		// console.log(respuesta);

		//SI YA NO HAY PREGUNTAS, ME SALGO DE LA FUNCION Y PROMEDIO SEGUN LOS ACIERTOS
		if(this.preguntas.length === 1){
			if (this.preguntas[index].respuesta === respuesta) {
				this.aciertos++;
			}
			this.preguntas.splice(index, 1);			
			this.calificacionFinal = (this.aciertos/this.totalPreguntas) * 100;
			console.log("calificacion", this.calificacionFinal);
			return;
		}
		//SI LA RESPUESTA ES CORRECTA, SUBO LOS ACIERTOS
		if (this.preguntas[index].respuesta === respuesta) {
			this.aciertos++;
		}
		//QUITO LA PREGUNTA QUE YA RESPONDIO EL USUARIO
		this.preguntas.splice(index, 1);

	}
	

	obtenerPreguntasPorId(){
		this.examenesS.obtenerPreguntas(this.id).subscribe(datos => {
			// console.log("Preguntas", datos);
			this.preguntas = datos;
			this.totalPreguntas = datos.length;
		});
	}

	
}