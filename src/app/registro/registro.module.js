"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var registro_routing_module_1 = require("./registro-routing.module");
var registro_component_1 = require("./registro.component");
//SERVICIOS
var usuario_service_1 = require("../shared/usuario/usuario.service");
var carreras_service_1 = require("~/app/shared/carreras/carreras.service");
//MODULOS EXTERNOS
var forms_1 = require("nativescript-angular/forms");
var http_1 = require("nativescript-angular/http");
var http_client_1 = require("nativescript-angular/http-client");
var RegistroModule = /** @class */ (function () {
    function RegistroModule() {
    }
    RegistroModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                registro_routing_module_1.RegistroRoutingModule,
                forms_1.NativeScriptFormsModule,
                http_1.NativeScriptHttpModule,
                http_client_1.NativeScriptHttpClientModule,
            ],
            providers: [
                usuario_service_1.UsuarioService,
                carreras_service_1.CarrerasService
            ],
            declarations: [
                registro_component_1.RegistroComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], RegistroModule);
    return RegistroModule;
}());
exports.RegistroModule = RegistroModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cm8ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0cm8ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBQ3pELFdBQVc7QUFDWCxxRUFBbUU7QUFDbkUsMkVBQXlFO0FBQ3pFLGtCQUFrQjtBQUNsQixvREFBcUU7QUFDckUsa0RBQW1FO0FBQ25FLGdFQUFnRjtBQXNCaEY7SUFBQTtJQUE4QixDQUFDO0lBQWxCLGNBQWM7UUFuQjFCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLCtDQUFxQjtnQkFDckIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDBDQUE0QjthQUMvQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxnQ0FBYztnQkFDZCxrQ0FBZTthQUNsQjtZQUNELFlBQVksRUFBRTtnQkFDVixzQ0FBaUI7YUFDcEI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGNBQWMsQ0FBSTtJQUFELHFCQUFDO0NBQUEsQUFBL0IsSUFBK0I7QUFBbEIsd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFJlZ2lzdHJvUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3JlZ2lzdHJvLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBSZWdpc3Ryb0NvbXBvbmVudCB9IGZyb20gXCIuL3JlZ2lzdHJvLmNvbXBvbmVudFwiO1xuLy9TRVJWSUNJT1NcbmltcG9ydCB7IFVzdWFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnJlcmFzU2VydmljZSB9IGZyb20gXCJ+L2FwcC9zaGFyZWQvY2FycmVyYXMvY2FycmVyYXMuc2VydmljZVwiO1xuLy9NT0RVTE9TIEVYVEVSTk9TXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICAgICAgUmVnaXN0cm9Sb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0SHR0cENsaWVudE1vZHVsZSxcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW1xuICAgICAgICBVc3VhcmlvU2VydmljZSxcbiAgICAgICAgQ2FycmVyYXNTZXJ2aWNlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgUmVnaXN0cm9Db21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgUmVnaXN0cm9Nb2R1bGUgeyB9XG4iXX0=