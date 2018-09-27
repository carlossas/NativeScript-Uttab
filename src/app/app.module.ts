import { NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

//AUTH SERVICE
import { UsuarioService } from "~/app/shared/usuario/usuario.service";
//MODULOS EXTERNOS
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptHttpClientModule,
        NativeScriptHttpModule
    ],
    providers: [
        UsuarioService
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
