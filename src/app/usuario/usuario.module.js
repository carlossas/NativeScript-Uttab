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
var examen_service_1 = require("~/app/shared/examenalumno/examen.service");
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
                examen_service_1.ExamenesService
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsT0FBTztBQUNQLG1FQUFnRTtBQUNoRSxhQUFhO0FBQ2IseURBQXVEO0FBQ3ZELDhEQUE0RDtBQUM1RCw2RUFBMkU7QUFFM0UsV0FBVztBQUNYLHFFQUFtRTtBQUNuRSwyRUFBMkU7QUFFM0Usa0JBQWtCO0FBQ2xCLG9EQUFxRTtBQUNyRSxrREFBbUU7QUFDbkUsZ0VBQWdGO0FBMEJoRjtJQUFBO0lBQTZCLENBQUM7SUFBakIsYUFBYTtRQXRCekIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsNkNBQW9CO2dCQUNwQiwrQkFBdUI7Z0JBQ3ZCLDZCQUFzQjtnQkFDdEIsMENBQTRCO2FBQy9CO1lBQ0QsU0FBUyxFQUFFO2dCQUNQLGdDQUFjO2dCQUNkLGdDQUFlO2FBRWxCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLG9DQUFnQjtnQkFDaEIsa0NBQWU7Z0JBQ2YsNENBQW9CO2FBQ3ZCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxhQUFhLENBQUk7SUFBRCxvQkFBQztDQUFBLEFBQTlCLElBQThCO0FBQWpCLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XHJcbi8vUlVUQVNcclxuaW1wb3J0IHsgVXN1YXJpb1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi91c3VhcmlvLXJvdXRpbmcubW9kdWxlXCI7XHJcbi8vQ09NUE9ORU5URVNcclxuaW1wb3J0IHsgVXN1YXJpb0NvbXBvbmVudCB9IGZyb20gXCIuL3VzdWFyaW8uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEV4YW1lbkNvbXBvbmVudCB9IGZyb20gXCIuL2V4YW1lbi9leGFtZW4uY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IExpc3RhRXhhbWVuQ29tcG9uZW50IH0gZnJvbSBcIi4vbGlzdGFFeGFtZW4vbGlzdGFFeGFtZW4uY29tcG9uZW50XCI7XHJcblxyXG4vL1NFUlZJQ0lPU1xyXG5pbXBvcnQgeyBVc3VhcmlvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8uc2VydmljZSc7XHJcbmltcG9ydCB7IEV4YW1lbmVzU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9leGFtZW5hbHVtbm8vZXhhbWVuLnNlcnZpY2UnO1xyXG5cclxuLy9NT0RVTE9TIEVYVEVSTk9TXHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XHJcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvaHR0cFwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XHJcblxyXG5cclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxyXG4gICAgICAgIFVzdWFyaW9Sb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXHJcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcclxuICAgIF0sXHJcbiAgICBwcm92aWRlcnM6IFtcclxuICAgICAgICBVc3VhcmlvU2VydmljZSxcclxuICAgICAgICBFeGFtZW5lc1NlcnZpY2VcclxuICAgICAgICBcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBVc3VhcmlvQ29tcG9uZW50LFxyXG4gICAgICAgIEV4YW1lbkNvbXBvbmVudCxcclxuICAgICAgICBMaXN0YUV4YW1lbkNvbXBvbmVudFxyXG4gICAgXSxcclxuICAgIHNjaGVtYXM6IFtcclxuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXHJcbiAgICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBVc3VhcmlvTW9kdWxlIHsgfVxyXG4iXX0=