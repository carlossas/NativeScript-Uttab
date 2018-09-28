"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
//RUTAS
var usuario_routing_module_1 = require("./usuario-routing.module");
//COMPONENTES
var usuario_component_1 = require("./usuario.component");
var examen_component_1 = require("./examen/examen.component");
var listaExamen_component_1 = require("./listaExamen/listaExamen.component");
//SERVICIOS
var usuario_service_1 = require("../shared/usuario/usuario.service");
//MODULOS EXTERNOS
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var http_client_1 = require("nativescript-angular/http-client");
var UsuarioModule = /** @class */ (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                usuario_routing_module_1.UsuarioRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule,
            ],
            providers: [
                usuario_service_1.UsuarioService,
            ],
            declarations: [
                usuario_component_1.UsuarioComponent,
                examen_component_1.ExamenComponent,
                listaExamen_component_1.ListaExamenComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], UsuarioModule);
    return UsuarioModule;
}());
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsT0FBTztBQUNQLG1FQUFnRTtBQUNoRSxhQUFhO0FBQ2IseURBQXVEO0FBQ3ZELDhEQUE0RDtBQUM1RCw2RUFBMkU7QUFFM0UsV0FBVztBQUNYLHFFQUFtRTtBQUNuRSxrQkFBa0I7QUFDbEIsb0RBQXFFO0FBQ3JFLGtEQUFtRTtBQUNuRSxnRUFBZ0Y7QUF3QmhGO0lBQUE7SUFBNkIsQ0FBQztJQUFqQixhQUFhO1FBcEJ6QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4Qiw2Q0FBb0I7Z0JBQ3BCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QiwwQ0FBNEI7YUFDL0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWM7YUFDakI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysb0NBQWdCO2dCQUNoQixrQ0FBZTtnQkFDZiw0Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG4vL1JVVEFTXG5pbXBvcnQgeyBVc3VhcmlvUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3VzdWFyaW8tcm91dGluZy5tb2R1bGVcIjtcbi8vQ09NUE9ORU5URVNcbmltcG9ydCB7IFVzdWFyaW9Db21wb25lbnQgfSBmcm9tIFwiLi91c3VhcmlvLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXhhbWVuQ29tcG9uZW50IH0gZnJvbSBcIi4vZXhhbWVuL2V4YW1lbi5jb21wb25lbnRcIjtcbmltcG9ydCB7IExpc3RhRXhhbWVuQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdGFFeGFtZW4vbGlzdGFFeGFtZW4uY29tcG9uZW50XCI7XG5cbi8vU0VSVklDSU9TXG5pbXBvcnQgeyBVc3VhcmlvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8uc2VydmljZSc7XG4vL01PRFVMT1MgRVhURVJOT1NcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFVzdWFyaW9Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBVc3VhcmlvU2VydmljZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBVc3VhcmlvQ29tcG9uZW50LFxuICAgICAgICBFeGFtZW5Db21wb25lbnQsXG4gICAgICAgIExpc3RhRXhhbWVuQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFVzdWFyaW9Nb2R1bGUgeyB9XG4iXX0=