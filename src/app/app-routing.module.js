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
    { path: "examen/:id", loadChildren: "~/app/usuario/usuario.module#UsuarioModule" },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3BELDBDQUEwQztJQUMxQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLG1DQUFtQyxFQUFFO0lBQ25FLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxzQ0FBc0MsRUFBRTtJQUN2RSxtQkFBbUI7SUFDbkIsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSw0Q0FBNEMsRUFBRTtJQUMvRSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLDRDQUE0QyxFQUFFO0lBQ2xGLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxZQUFZLEVBQUUsNENBQTRDLEVBQUU7SUFDbkYsc0JBQXNCO0lBQ3RCLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtDQUN6RixDQUFDO0FBTUY7SUFBQTtJQUFnQyxDQUFDO0lBQXBCLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUFJO0lBQUQsdUJBQUM7Q0FBQSxBQUFqQyxJQUFpQztBQUFwQiw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2hvbWVcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxyXG4gICAgLy9NT0RVTE9TIERFIFJFR0lTVFJPLCBJTklDSU8gWSBCSUVOVkVOSURBXHJcbiAgICB7IHBhdGg6IFwiaG9tZVwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvaG9tZS9ob21lLm1vZHVsZSNIb21lTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJyZWdpc3Ryb1wiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvcmVnaXN0cm8vcmVnaXN0cm8ubW9kdWxlI1JlZ2lzdHJvTW9kdWxlXCIgfSxcclxuICAgIHsgcGF0aDogXCJsb2dpblwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvbG9naW4vbG9naW4ubW9kdWxlI0xvZ2luTW9kdWxlXCIgfSxcclxuICAgIC8vTU9EVUxPIERFIEFMVU1OT1NcclxuICAgIHsgcGF0aDogXCJ1c3VhcmlvXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC91c3VhcmlvL3VzdWFyaW8ubW9kdWxlI1VzdWFyaW9Nb2R1bGVcIiB9LFxyXG4gICAgeyBwYXRoOiBcImV4YW1lbi86aWRcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3VzdWFyaW8vdXN1YXJpby5tb2R1bGUjVXN1YXJpb01vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwibGlzdGFleGFtZW5cIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3VzdWFyaW8vdXN1YXJpby5tb2R1bGUjVXN1YXJpb01vZHVsZVwiIH0sXHJcbiAgICAvL01PRFVMTyBERSBQUk9GRVNPUkVTXHJcbiAgICB7IHBhdGg6IFwicHJvZmVzb3JcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3Byb2Zlc29yL3Byb2Zlc29yLm1vZHVsZSNQcm9mZXNvck1vZHVsZVwiIH0sXHJcbiAgICB7IHBhdGg6IFwiY3JlYXJleGFtZW5cIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3Byb2Zlc29yL3Byb2Zlc29yLm1vZHVsZSNQcm9mZXNvck1vZHVsZVwiIH0sXHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XHJcbiJdfQ==