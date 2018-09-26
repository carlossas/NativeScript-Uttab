"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
// modelo
var usuario_model_1 = require("~/app/shared/usuario/usuario.model");
//servicio
var usuario_service_1 = require("../shared/usuario/usuario.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, routerExtensions, usuarioS) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.usuarioS = usuarioS;
        //VARIABLES GLOBALES
        this.isLoading = false;
        //INICIAR CLASE USUARIO
        this.usuario = new usuario_model_1.Usuario();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.irAtras = function () {
        this.routerExtensions.navigate(["/home"], {
            transition: {
                name: "fade"
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            usuario_service_1.UsuarioService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFLL0QsU0FBUztBQUNULG9FQUE2RDtBQUM3RCxVQUFVO0FBQ1YscUVBQW1FO0FBU25FO0lBSUMsd0JBQ1MsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxRQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQU5qQyxvQkFBb0I7UUFDYixjQUFTLEdBQVksS0FBSyxDQUFDO1FBT2pDLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUJBQU8sRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUdELGdDQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekMsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxNQUFNO2FBQ1o7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBdkJXLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7eUNBT2dCLGVBQU07WUFDSSx5QkFBZ0I7WUFDeEIsZ0NBQWM7T0FQckIsY0FBYyxDQXdCMUI7SUFBRCxxQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuXG4vLyBtb2RlbG9cbmltcG9ydCB7IFVzdWFyaW8gfSBmcm9tICd+L2FwcC9zaGFyZWQvdXN1YXJpby91c3VhcmlvLm1vZGVsJztcbi8vc2VydmljaW9cbmltcG9ydCB7IFVzdWFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnbG9naW4nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8vVkFSSUFCTEVTIEdMT0JBTEVTXG5cdHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcblx0cHVibGljIHVzdWFyaW86IFVzdWFyaW87XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdHB1YmxpYyBcdHVzdWFyaW9TOiBVc3VhcmlvU2VydmljZSxcblx0KSB7IFxuXHRcdC8vSU5JQ0lBUiBDTEFTRSBVU1VBUklPXG5cdFx0dGhpcy51c3VhcmlvID0gbmV3IFVzdWFyaW8oKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG4gICBcblxuXHRpckF0cmFzKCl7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7XG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdG5hbWU6IFwiZmFkZVwiXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0iXX0=