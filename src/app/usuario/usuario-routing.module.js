"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var usuario_component_1 = require("./usuario.component");
var examen_component_1 = require("./examen/examen.component");
var listaExamen_component_1 = require("./listaExamen/listaExamen.component");
var routes = [
    {
        path: "",
        component: usuario_component_1.UsuarioComponent,
        children: [
            { path: "", component: listaExamen_component_1.ListaExamenComponent },
            { path: 'examen', component: examen_component_1.ExamenComponent },
            { path: 'listaexamen', component: listaExamen_component_1.ListaExamenComponent },
        ]
    },
];
var UsuarioRoutingModule = /** @class */ (function () {
    function UsuarioRoutingModule() {
    }
    UsuarioRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], UsuarioRoutingModule);
    return UsuarioRoutingModule;
}());
exports.UsuarioRoutingModule = UsuarioRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzdWFyaW8tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBQ3ZFLHlEQUF1RDtBQUN2RCw4REFBNEQ7QUFDNUQsNkVBQTJFO0FBRzNFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsb0NBQWdCO1FBQzNCLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQzdDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUM7U0FDMUQ7S0FDSjtDQUNKLENBQUM7QUFNRjtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBSmhDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csb0JBQW9CLENBQUk7SUFBRCwyQkFBQztDQUFBLEFBQXJDLElBQXFDO0FBQXhCLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFVzdWFyaW9Db21wb25lbnQgfSBmcm9tIFwiLi91c3VhcmlvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXhhbWVuQ29tcG9uZW50IH0gZnJvbSBcIi4vZXhhbWVuL2V4YW1lbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RhRXhhbWVuQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdGFFeGFtZW4vbGlzdGFFeGFtZW4uY29tcG9uZW50XCI7XG5cblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBcbiAgICAgICAgcGF0aDogXCJcIiwgXG4gICAgICAgIGNvbXBvbmVudDogVXN1YXJpb0NvbXBvbmVudCxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMaXN0YUV4YW1lbkNvbXBvbmVudCB9LFxuICAgICAgICAgICAgeyBwYXRoOiAnZXhhbWVuJywgY29tcG9uZW50OiBFeGFtZW5Db21wb25lbnR9LFxuICAgICAgICAgICAgeyBwYXRoOiAnbGlzdGFleGFtZW4nLCBjb21wb25lbnQ6IExpc3RhRXhhbWVuQ29tcG9uZW50fSxcbiAgICAgICAgXVxuICAgIH0sXG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgVXN1YXJpb1JvdXRpbmdNb2R1bGUgeyB9XG4iXX0=