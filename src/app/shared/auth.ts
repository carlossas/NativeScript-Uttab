import { Injectable } from "@angular/core";
import { Usuario } from "./usuario/usuario.model";

@Injectable()
export class authService {
    public usuarioAuth: Usuario;

}