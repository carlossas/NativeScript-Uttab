import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
//URL API
import { URL_API } from "../url_api";

@Injectable()
export class CarrerasService {
    constructor(public http: HttpClient) { }

obtenerCarreras() {
    let headers = this.createRequestHeader();
    let url = URL_API + '/carreras/obtenerCarreras';

    return this.http.get(url, { headers: headers }).pipe(
        map((resultado:any) =>{
        // console.log("Obtener carreras function", resultado);
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