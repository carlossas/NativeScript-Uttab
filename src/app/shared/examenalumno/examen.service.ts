import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map, tap, retry } from "rxjs/operators";
//URL API
import { URL_API } from "../url_api";

@Injectable()
export class ExamenesService {
    constructor(public http: HttpClient) { }

obtenerExamenes(id_carrera) {
    let headers = this.createRequestHeader();
    let url = URL_API + '/examenesalumno/obtenerExamenes/' + id_carrera;

    return this.http.get(url, { headers: headers }).pipe(
        map((resultado:any) =>{
        return resultado.result;
    }));

}

obtenerPreguntas(id_examen){
    let headers = this.createRequestHeader();
    let url = URL_API + '/examenesalumno/obtenerPreguntas/' + id_examen;

    return this.http.get(url, { headers: headers }).pipe(
        map((resultado: any) => {
            return resultado.result;
        }));
}

private createRequestHeader() {
    // set headers here e.g.
    let headers = new HttpHeaders({
        "Content-Type": "application/json",
     });

    return headers;
}

}