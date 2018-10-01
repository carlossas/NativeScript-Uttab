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
            { path: 'examen/:id', component: examen_component_1.ExamenComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzdWFyaW8tcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBQ3ZFLHlEQUF1RDtBQUN2RCw4REFBNEQ7QUFDNUQsNkVBQTJFO0FBRzNFLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0ksSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsb0NBQWdCO1FBQzNCLFFBQVEsRUFBRTtZQUNOLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7WUFDN0MsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFDO1lBQ2pELEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUM7U0FDMUQ7S0FDSjtDQUNKLENBQUM7QUFNRjtJQUFBO0lBQW9DLENBQUM7SUFBeEIsb0JBQW9CO1FBSmhDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csb0JBQW9CLENBQUk7SUFBRCwyQkFBQztDQUFBLEFBQXJDLElBQXFDO0FBQXhCLG9EQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFVzdWFyaW9Db21wb25lbnQgfSBmcm9tIFwiLi91c3VhcmlvLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBFeGFtZW5Db21wb25lbnQgfSBmcm9tIFwiLi9leGFtZW4vZXhhbWVuLmNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBMaXN0YUV4YW1lbkNvbXBvbmVudCB9IGZyb20gXCIuL2xpc3RhRXhhbWVuL2xpc3RhRXhhbWVuLmNvbXBvbmVudFwiO1xyXG5cclxuXHJcbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xyXG4gICAgeyBcclxuICAgICAgICBwYXRoOiBcIlwiLCBcclxuICAgICAgICBjb21wb25lbnQ6IFVzdWFyaW9Db21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IExpc3RhRXhhbWVuQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2V4YW1lbi86aWQnLCBjb21wb25lbnQ6IEV4YW1lbkNvbXBvbmVudH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogJ2xpc3RhZXhhbWVuJywgY29tcG9uZW50OiBMaXN0YUV4YW1lbkNvbXBvbmVudH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFVzdWFyaW9Sb3V0aW5nTW9kdWxlIHsgfVxyXG4iXX0=