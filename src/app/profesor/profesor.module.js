"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
//RUTAS
var profesor_routing_module_1 = require("./profesor-routing.module");
//COMPONENTES
var profesor_component_1 = require("./profesor.component");
var crearexamen_component_1 = require("./crearexamen/crearexamen.component");
//SERVICIOS
var usuario_service_1 = require("../shared/usuario/usuario.service");
//MODULOS EXTERNOS
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var http_client_1 = require("nativescript-angular/http-client");
var carreras_service_1 = require("../shared/carreras/carreras.service");
var examen_service_1 = require("../shared/examenalumno/examen.service");
var ProfesorModule = /** @class */ (function () {
    function ProfesorModule() {
    }
    ProfesorModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                profesor_routing_module_1.ProfesorRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule,
            ],
            providers: [
                usuario_service_1.UsuarioService,
                carreras_service_1.CarrerasService,
                examen_service_1.ExamenesService,
            ],
            declarations: [
                profesor_component_1.ProfesorComponent,
                crearexamen_component_1.CrearexamenComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ProfesorModule);
    return ProfesorModule;
}());
exports.ProfesorModule = ProfesorModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzb3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZmVzb3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxPQUFPO0FBQ1AscUVBQWtFO0FBQ2xFLGFBQWE7QUFDYiwyREFBeUQ7QUFDekQsNkVBQTJFO0FBRTNFLFdBQVc7QUFDWCxxRUFBbUU7QUFDbkUsa0JBQWtCO0FBQ2xCLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsZ0VBQWdGO0FBQ2hGLHdFQUFzRTtBQUN0RSx3RUFBd0U7QUF5QnhFO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBckIxQixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7Z0JBQ3JCLCtCQUF1QjtnQkFDdkIsNkJBQXNCO2dCQUN0QiwwQ0FBNEI7YUFDL0I7WUFDRCxTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWM7Z0JBQ2Qsa0NBQWU7Z0JBQ2YsZ0NBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1Ysc0NBQWlCO2dCQUNqQiw0Q0FBb0I7YUFDdkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG4vL1JVVEFTXG5pbXBvcnQgeyBQcm9mZXNvclJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9wcm9mZXNvci1yb3V0aW5nLm1vZHVsZVwiO1xuLy9DT01QT05FTlRFU1xuaW1wb3J0IHsgUHJvZmVzb3JDb21wb25lbnQgfSBmcm9tIFwiLi9wcm9mZXNvci5jb21wb25lbnRcIjtcbmltcG9ydCB7IENyZWFyZXhhbWVuQ29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXJleGFtZW4vY3JlYXJleGFtZW4uY29tcG9uZW50XCI7XG5cbi8vU0VSVklDSU9TXG5pbXBvcnQgeyBVc3VhcmlvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8uc2VydmljZSc7XG4vL01PRFVMT1MgRVhURVJOT1NcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cC1jbGllbnRcIjtcbmltcG9ydCB7IENhcnJlcmFzU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY2FycmVyYXMvY2FycmVyYXMuc2VydmljZVwiO1xuaW1wb3J0IHsgRXhhbWVuZXNTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9leGFtZW5hbHVtbm8vZXhhbWVuLnNlcnZpY2VcIjtcblxuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFByb2Zlc29yUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVXN1YXJpb1NlcnZpY2UsXG4gICAgICAgIENhcnJlcmFzU2VydmljZSxcbiAgICAgICAgRXhhbWVuZXNTZXJ2aWNlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFByb2Zlc29yQ29tcG9uZW50LFxuICAgICAgICBDcmVhcmV4YW1lbkNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9mZXNvck1vZHVsZSB7IH1cbiJdfQ==