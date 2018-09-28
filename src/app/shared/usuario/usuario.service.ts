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
        let parseUser:any = localStorage.getItem('usuario');
        this.usuario = JSON.parse(parseUser);  
        this.verificarSesion();
    }


    //UNA VEZ QUE SE OBTIENE EL USUARIO DE LOCAL STORAGE, VERIFICA QUE ESTE AUTENTICADO
    //Y QUE EL TOKEN SIGA SIENDO VALIDO
    verificarSesion(){
        if(this.usuario != undefined){
            this.authStatus = true;
            let headers = this.createRequestHeader();
            let url = URL_API + '/usuario/obtenerUsuarioPorId';
            let usuario  = {
                id_usuario: this.usuario.id_usuario
            }
            this.http.post(url, usuario, { headers: headers }).pipe(
            map((res: any) => {
                console.log("token", res.usuario.token);
                console.log("actual token", this.usuario.token);
                
                if(res.usuario.token === this.usuario.token){
                    this.authStatus = true;
                }else{
                    this.cerrarSesion();
                }
            })).subscribe();
        }else{
            this.authStatus = false;
        }
    }

    //LOGIN
    login(usuario:Usuario) {
        let headers = this.createRequestHeader();
        let url = URL_API + '/login';
            return this.http.post(url, usuario, { headers: headers }).pipe(
              map((res: any) =>{
                  //SI NO EXISTE NINGUN ERROR, ALMACENAMOS EL USUARIO EN STORAGE
                  if(!res.error){
                    this.usuario = res.usuario;
                    localStorage.setItem('usuario', JSON.stringify(res.usuario));
                    setTimeout(() => {
                        this.routerExtensions.navigate(["/usuario"], {
                            clearHistory: true,
                            transition: {
                                name: "fade"
                            }
                        });
                    }, 500);
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
        }, 500);
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