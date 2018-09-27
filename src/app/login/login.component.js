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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFPL0QsVUFBVTtBQUNWLHFFQUFtRTtBQVNuRTtJQUlDLHdCQUNTLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsUUFBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFOakMsb0JBQW9CO1FBQ2IsY0FBUyxHQUFZLEtBQUssQ0FBQztJQVFsQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCw4QkFBSyxHQUFMLFVBQU0sSUFBWTtRQUFsQixpQkE2QkM7UUE1QkEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1FBRXRCLElBQUksSUFBSSxHQUFHO1lBQ1YsU0FBUyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUztZQUMvQixVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO1NBQ2pDLENBQUE7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQSxLQUFLO1lBQ3pDLEtBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBRXZCLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNmLElBQUksT0FBTyxHQUFHO29CQUNiLEtBQUssRUFBRSxRQUFRO29CQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsWUFBWSxFQUFFLElBQUk7aUJBQ2xCLENBQUM7Z0JBRUYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhCLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDTCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFHRCxnQ0FBTyxHQUFQO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsTUFBTTthQUNaO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXJEVyxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNwQyxDQUFDO3lDQU9nQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3hCLGdDQUFjO09BUHJCLGNBQWMsQ0FzRDFCO0lBQUQscUJBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuLy8gbW9kZWxvXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5tb2RlbCc7XG4vL3NlcnZpY2lvXG5pbXBvcnQgeyBVc3VhcmlvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ2xvZ2luJyxcblx0dGVtcGxhdGVVcmw6ICcuL2xvZ2luLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vbG9naW4uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTG9naW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvL1ZBUklBQkxFUyBHTE9CQUxFU1xuXHRwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB1c3VhcmlvOiBVc3VhcmlvO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwdWJsaWMgXHR1c3VhcmlvUzogVXN1YXJpb1NlcnZpY2UsXG5cdCkgeyBcblx0XHRcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cblx0bG9naW4oZm9ybTogTmdGb3JtKXtcblx0XHRjb25zb2xlLmxvZyhcImluZ3Jlc29cIiwgZm9ybS52YWx1ZSk7XG5cblx0XHR0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cblx0XHRsZXQgdXNlciA9IHtcblx0XHRcdG1hdHJpY3VsYTogZm9ybS52YWx1ZS5tYXRyaWN1bGEsXG5cdFx0XHRjb250cmFzZW5hOiBmb3JtLnZhbHVlLmNvbnRyYXNlbmFcblx0XHR9XG5cblx0XHR0aGlzLnVzdWFyaW9TLmxvZ2luKHVzZXIpLnN1YnNjcmliZSggZGF0b3M9Pntcblx0XHRcdHRoaXMuaXNMb2FkaW5nID0gZmFsc2U7XG5cblx0XHRcdGlmKGRhdG9zLmVycm9yKXtcblx0XHRcdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0dGl0bGU6IFwiQWxlcnRhXCIsXG5cdFx0XHRcdFx0bWVzc2FnZTogZGF0b3MubWVuc2FqZSxcblx0XHRcdFx0XHRva0J1dHRvblRleHQ6IFwiT0tcIlxuXHRcdFx0XHR9O1xuXHRcdFx0XHRcblx0XHRcdFx0YWxlcnQob3B0aW9ucyk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnVzdWFyaW8gPSBkYXRvcy51c3VhcmlvO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImxvZ2luIGZ1bmN0aW9uXCIsIHRoaXMudXN1YXJpbyk7XG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG4gICBcblxuXHRpckF0cmFzKCl7XG5cdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9ob21lXCJdLCB7XG5cdFx0XHR0cmFuc2l0aW9uOiB7XG5cdFx0XHRcdG5hbWU6IFwiZmFkZVwiXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0iXX0=