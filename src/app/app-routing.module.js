"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    //MODULOS DE REGISTRO, INICIO Y BIENVENIDA
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "registro", loadChildren: "~/app/registro/registro.module#RegistroModule" },
    { path: "login", loadChildren: "~/app/login/login.module#LoginModule" },
    //MODULO DE ALUMNOS
    { path: "usuario", loadChildren: "~/app/usuario/usuario.module#UsuarioModule" },
    { path: "examen", loadChildren: "~/app/usuario/usuario.module#UsuarioModule" },
    { path: "listaexamen", loadChildren: "~/app/usuario/usuario.module#UsuarioModule" },
    //MODULO DE PROFESORES
    { path: "profesor", loadChildren: "~/app/profesor/profesor.module#ProfesorModule" },
    { path: "crearexamen", loadChildren: "~/app/profesor/profesor.module#ProfesorModule" },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELDBDQUEwQztJQUMxQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxzQ0FBc0MsRUFBRTtJQUN2RSxtQkFBbUI7SUFDbkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSw0Q0FBNEMsRUFBRTtJQUMvRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLDRDQUE0QyxFQUFFO0lBQzlFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsNENBQTRDLEVBQUU7SUFDbkYsc0JBQXNCO0lBQ3RCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtDQUN6RixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgcmVkaXJlY3RUbzogXCIvaG9tZVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgLy9NT0RVTE9TIERFIFJFR0lTVFJPLCBJTklDSU8gWSBCSUVOVkVOSURBXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcInJlZ2lzdHJvXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9yZWdpc3Ryby9yZWdpc3Ryby5tb2R1bGUjUmVnaXN0cm9Nb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCIgfSxcbiAgICAvL01PRFVMTyBERSBBTFVNTk9TXG4gICAgeyBwYXRoOiBcInVzdWFyaW9cIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3VzdWFyaW8vdXN1YXJpby5tb2R1bGUjVXN1YXJpb01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImV4YW1lblwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvdXN1YXJpby91c3VhcmlvLm1vZHVsZSNVc3VhcmlvTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwibGlzdGFleGFtZW5cIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3VzdWFyaW8vdXN1YXJpby5tb2R1bGUjVXN1YXJpb01vZHVsZVwiIH0sXG4gICAgLy9NT0RVTE8gREUgUFJPRkVTT1JFU1xuICAgIHsgcGF0aDogXCJwcm9mZXNvclwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvcHJvZmVzb3IvcHJvZmVzb3IubW9kdWxlI1Byb2Zlc29yTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwiY3JlYXJleGFtZW5cIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3Byb2Zlc29yL3Byb2Zlc29yLm1vZHVsZSNQcm9mZXNvck1vZHVsZVwiIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHsgfVxuIl19