import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//MODELO
import { Usuario } from "./usuario.model";
//URL API
import { URL_API } from "../url_api";

@Injectable()
export class UsuarioService {
    constructor(private http: HttpClient) { }

    

    register(usuario: Usuario) {
        let headers = this.createRequestHeader();
        let url = URL_API + '/usuario/registrar/';
            return this.http.post(url, usuario, { headers: headers }).pipe(
              map((res: any) =>{
                return res;
              }))
    }
    
    
    private createRequestHeader() {
        // set headers here e.g.
        let headers = new HttpHeaders({
            "Content-Type": "application/json",
         });
    
        return headers;
    }

}