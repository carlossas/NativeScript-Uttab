import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";

//MODELO
import { Usuario } from "./usuario.model";
//URL API
import { URL_API } from "../url_api";

@Injectable()
export class UsuarioService {
    constructor(private http: Http) { }

    

    register(usuario: Usuario) {
        let url = URL_API + '/usuario/registrar/';
            return this.http.post(url, usuario).pipe(
              map((res: any) =>{
                console.log("register function:", res);
              }))
    }

}