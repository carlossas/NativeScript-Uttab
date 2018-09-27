"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var usuario_routing_module_1 = require("./usuario-routing.module");
var usuario_component_1 = require("./usuario.component");
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
                usuario_component_1.UsuarioComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], UsuarioModule);
    return UsuarioModule;
}());
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFFdkUsbUVBQWdFO0FBQ2hFLHlEQUF1RDtBQUN2RCxXQUFXO0FBQ1gscUVBQW1FO0FBQ25FLGtCQUFrQjtBQUNsQixvREFBcUU7QUFDckUsa0RBQW1FO0FBQ25FLGdFQUFnRjtBQXNCaEY7SUFBQTtJQUE2QixDQUFDO0lBQWpCLGFBQWE7UUFsQnpCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRTtnQkFDTCxpQ0FBd0I7Z0JBQ3hCLDZDQUFvQjtnQkFDcEIsK0JBQXVCO2dCQUN2Qiw2QkFBc0I7Z0JBQ3RCLDBDQUE0QjthQUMvQjtZQUNELFNBQVMsRUFBRTtnQkFDUCxnQ0FBYzthQUNqQjtZQUNELFlBQVksRUFBRTtnQkFDVixvQ0FBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLGFBQWEsQ0FBSTtJQUFELG9CQUFDO0NBQUEsQUFBOUIsSUFBOEI7QUFBakIsc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFVzdWFyaW9Sb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vdXN1YXJpby1yb3V0aW5nLm1vZHVsZVwiO1xuaW1wb3J0IHsgVXN1YXJpb0NvbXBvbmVudCB9IGZyb20gXCIuL3VzdWFyaW8uY29tcG9uZW50XCI7XG4vL1NFUlZJQ0lPU1xuaW1wb3J0IHsgVXN1YXJpb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdXN1YXJpby91c3VhcmlvLnNlcnZpY2UnO1xuLy9NT0RVTE9TIEVYVEVSTk9TXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0SHR0cE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9odHRwXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cblxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICBVc3VhcmlvUm91dGluZ01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEh0dHBDbGllbnRNb2R1bGUsXG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgVXN1YXJpb1NlcnZpY2UsXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgVXN1YXJpb0NvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBVc3VhcmlvTW9kdWxlIHsgfVxuIl19