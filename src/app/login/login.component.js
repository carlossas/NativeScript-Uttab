"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
//servicio
var usuario_service_1 = require("../shared/usuario/usuario.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, routerExtensions, usuarioS) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.usuarioS = usuarioS;
        //VARIABLES GLOBALES
        this.isLoading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        console.log("ingreso", form.value);
        this.isLoading = true;
        var user = {
            matricula: form.value.matricula,
            contrasena: form.value.contrasena
        };
        this.usuarioS.login(user).subscribe(function (datos) {
            _this.isLoading = false;
            if (datos.error) {
                var options = {
                    title: "Alerta",
                    message: datos.mensaje,
                    okButtonText: "OK"
                };
                alert(options);
            }
            else {
                _this.usuario = datos.usuario;
                console.log("login function", _this.usuario);
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFPL0QsVUFBVTtBQUNWLHFFQUFtRTtBQVNuRTtJQUlDLHdCQUNTLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsUUFBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFOakMsb0JBQW9CO1FBQ2IsY0FBUyxHQUFZLEtBQUssQ0FBQztJQVFsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sSUFBWTtRQUFsQixpQkE2QkM7UUE1QkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksSUFBSSxHQUFHO1lBQ1YsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztZQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO1NBQ2pDLENBQUE7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQSxLQUFLO1lBQ3pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXZCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNmLElBQUksT0FBTyxHQUFHO29CQUNiLEtBQUssRUFBRSxRQUFRO29CQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsWUFBWSxFQUFFLElBQUk7aUJBQ2xCLENBQUM7Z0JBRUYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhCLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDTCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFHRCxnQ0FBTyxHQUFQO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsTUFBTTthQUNaO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXJEVyxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNwQyxDQUFDO3lDQU9nQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3hCLGdDQUFjO09BUHJCLGNBQWMsQ0FzRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XHJcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG4vLyBtb2RlbG9cclxuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gJ34vYXBwL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8ubW9kZWwnO1xyXG4vL3NlcnZpY2lvXHJcbmltcG9ydCB7IFVzdWFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdsb2dpbicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Ly9WQVJJQUJMRVMgR0xPQkFMRVNcclxuXHRwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIHVzdWFyaW86IFVzdWFyaW87XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG5cdFx0cHVibGljIFx0dXN1YXJpb1M6IFVzdWFyaW9TZXJ2aWNlLFxyXG5cdCkgeyBcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG5cclxuXHRsb2dpbihmb3JtOiBOZ0Zvcm0pe1xyXG5cdFx0Y29uc29sZS5sb2coXCJpbmdyZXNvXCIsIGZvcm0udmFsdWUpO1xyXG5cclxuXHRcdHRoaXMuaXNMb2FkaW5nID0gdHJ1ZTtcclxuXHJcblx0XHRsZXQgdXNlciA9IHtcclxuXHRcdFx0bWF0cmljdWxhOiBmb3JtLnZhbHVlLm1hdHJpY3VsYSxcclxuXHRcdFx0Y29udHJhc2VuYTogZm9ybS52YWx1ZS5jb250cmFzZW5hXHJcblx0XHR9XHJcblxyXG5cdFx0dGhpcy51c3VhcmlvUy5sb2dpbih1c2VyKS5zdWJzY3JpYmUoIGRhdG9zPT57XHJcblx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XHJcblxyXG5cdFx0XHRpZihkYXRvcy5lcnJvcil7XHJcblx0XHRcdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdFx0XHR0aXRsZTogXCJBbGVydGFcIixcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdG9zLm1lbnNhamUsXHJcblx0XHRcdFx0XHRva0J1dHRvblRleHQ6IFwiT0tcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YWxlcnQob3B0aW9ucyk7XHJcblxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHR0aGlzLnVzdWFyaW8gPSBkYXRvcy51c3VhcmlvO1xyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwibG9naW4gZnVuY3Rpb25cIiwgdGhpcy51c3VhcmlvKTtcclxuXHRcdFx0fVxyXG5cclxuXHRcdH0pO1xyXG5cclxuXHR9XHJcbiAgIFxyXG5cclxuXHRpckF0cmFzKCl7XHJcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2hvbWVcIl0sIHtcclxuXHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdG5hbWU6IFwiZmFkZVwiXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdH1cclxufSJdfQ==