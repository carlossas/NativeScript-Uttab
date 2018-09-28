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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzb3IubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZmVzb3IubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSxPQUFPO0FBQ1AscUVBQWtFO0FBQ2xFLGFBQWE7QUFDYiwyREFBeUQ7QUFDekQsNkVBQTJFO0FBRTNFLFdBQVc7QUFDWCxxRUFBbUU7QUFDbkUsa0JBQWtCO0FBQ2xCLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsZ0VBQWdGO0FBdUJoRjtJQUFBO0lBQThCLENBQUM7SUFBbEIsY0FBYztRQW5CMUIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsK0NBQXFCO2dCQUNyQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjtnQkFDdEIsMENBQTRCO2FBQy9CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGdDQUFjO2FBQ2pCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLHNDQUFpQjtnQkFDakIsNENBQW9CO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxjQUFjLENBQUk7SUFBRCxxQkFBQztDQUFBLEFBQS9CLElBQStCO0FBQWxCLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuLy9SVVRBU1xuaW1wb3J0IHsgUHJvZmVzb3JSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vcHJvZmVzb3Itcm91dGluZy5tb2R1bGVcIjtcbi8vQ09NUE9ORU5URVNcbmltcG9ydCB7IFByb2Zlc29yQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmVzb3IuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDcmVhcmV4YW1lbkNvbXBvbmVudCB9IGZyb20gXCIuL2NyZWFyZXhhbWVuL2NyZWFyZXhhbWVuLmNvbXBvbmVudFwiO1xuXG4vL1NFUlZJQ0lPU1xuaW1wb3J0IHsgVXN1YXJpb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdXN1YXJpby91c3VhcmlvLnNlcnZpY2UnO1xuLy9NT0RVTE9TIEVYVEVSTk9TXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBQcm9mZXNvclJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgIF0sXG4gICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIFVzdWFyaW9TZXJ2aWNlLFxuICAgIF0sXG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIFByb2Zlc29yQ29tcG9uZW50LFxuICAgICAgICBDcmVhcmV4YW1lbkNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9mZXNvck1vZHVsZSB7IH1cbiJdfQ==