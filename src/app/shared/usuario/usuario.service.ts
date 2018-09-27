import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { HttpClient, HttpHeaders } from "@angular/common/http";
//NAVEGACION
import { NavigationEnd, Router } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";
//MODELO
import { Usuario } from "./usuario.model";
//URL API
import { URL_API } from "../url_api";
//LOCALSTORAGE
import * as localStorage from 'nativescript-localstorage';

@Injectable()
export class UsuarioService {
    public usuario: Usuario;
    public authStatus: boolean;

    constructor(
        private http: HttpClient,
        private router: Router,
		private routerExtensions: RouterExtensions,
    ) { 
        this.usuario = localStorage.getItem('usuario');
        this.verificarSesion();
    }


    //UNA VEZ QUE SE OBTIENE EL USUARIO DE LOCAL STORAGE, VERIFICA QUE ESTE AUTENTICADO
    verificarSesion(){
        if(this.usuario != undefined){
            this.authStatus = true;
        }else{
            this.authStatus = false;
        }
        console.log("Usuario autenticado", this.authStatus);
    }

    //LOGIN
    login(usuario:Usuario) {
        let headers = this.createRequestHeader();
        let url = URL_API + '/login';
            return this.http.post(url, usuario, { headers: headers }).pipe(
              map((res: any) =>{
                  //SI NO EXISTE NINGUN ERROR, ALMACENAMOS EL USUARIO EN STORAGE
                  if(!res.error){
                    localStorage.setItem('usuario', JSON.stringify(res.usuario));
                  }
                
                return res;
              }))
    }

    cerrarSesion(){
        localStorage.removeItem('usuario');
        this.usuario = null;
        this.authStatus = false;
        setTimeout(() => {
            this.routerExtensions.navigate(["/home"], {
                clearHistory: true,
                transition: {
                    name: "fade"
                }
            });
        }, 800);
    }

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