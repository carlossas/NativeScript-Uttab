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
//AQUI SE ALMACENA EL USUARIO
import { authService } from "../auth";


@Injectable()
export class UsuarioService {
    public authStatus: boolean;
    private firstPage: string;

    constructor(
        private http: HttpClient,
        private router: Router,
        private routerExtensions: RouterExtensions,
        private authS: authService
    ) { 
        let parseUser:any = localStorage.getItem('usuario');
        this.authS.usuarioAuth = JSON.parse(parseUser);  
        this.verificarSesion();
    }


    //UNA VEZ QUE SE OBTIENE EL USUARIO DE LOCAL STORAGE, VERIFICA QUE ESTE AUTENTICADO
    //Y QUE EL TOKEN SIGA SIENDO VALIDO
    verificarSesion(){
        if(this.authS.usuarioAuth != undefined){
            this.authStatus = true;
            let headers = this.createRequestHeader();
            let url = URL_API + '/usuario/obtenerUsuarioPorId';
            let usuario  = {
                id_usuario: this.authS.usuarioAuth.id_usuario
            }
            this.http.post(url, usuario, { headers: headers }).pipe(
            map((res: any) => {
                // console.log("token", res.usuario.token);
                // console.log("actual token", this.authS.usuarioAuth.token);
                if(res.usuario.token === this.authS.usuarioAuth.token){
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
                    this.authS.usuarioAuth = res.usuario;
                    this.authS.usuarioAuth = res.usuario;
                    localStorage.setItem('usuario', JSON.stringify(res.usuario));
                        if (this.authS.usuarioAuth.tipo === '0'){
                            this.firstPage = "usuario";
                        }
                        if (this.authS.usuarioAuth.tipo === '1'){
                            this.firstPage = "profesor";
                        }
                        this.routerExtensions.navigate(['/'+this.firstPage], {
                            clearHistory: true,
                            animated: false
                        });
                  }
                
                return res;
              }))
    }

    cerrarSesion(){
        localStorage.removeItem('usuario');
        this.authS.usuarioAuth = null;
        this.authStatus = false;
            this.routerExtensions.navigate(["/home"], {
                clearHistory: true,
                animated: false
            });
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