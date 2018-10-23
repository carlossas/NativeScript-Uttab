"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
//LOADING
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
//servicio
var usuario_service_1 = require("../shared/usuario/usuario.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, routerExtensions, usuarioS) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.usuarioS = usuarioS;
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (form) {
        var _this = this;
        console.log("ingreso", form.value);
        this.loader.show();
        var user = {
            matricula: form.value.matricula,
            contrasena: form.value.contrasena
        };
        this.usuarioS.login(user).subscribe(function (datos) {
            _this.loader.hide();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFJL0QsU0FBUztBQUNULGlGQUFnRTtBQUdoRSxVQUFVO0FBQ1YscUVBQW1FO0FBU25FO0lBS0Msd0JBQ1MsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxRQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUwxQixXQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO0lBUXZDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTSxJQUFZO1FBQWxCLGlCQThCQztRQTdCQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuQixJQUFJLElBQUksR0FBRztZQUNWLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtTQUNqQyxDQUFBO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFFLFVBQUEsS0FBSztZQUV6QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRW5CLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNmLElBQUksT0FBTyxHQUFHO29CQUNiLEtBQUssRUFBRSxRQUFRO29CQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsWUFBWSxFQUFFLElBQUk7aUJBQ2xCLENBQUM7Z0JBRUYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhCLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDTCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFHRCxnQ0FBTyxHQUFQO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ3pDLFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsTUFBTTthQUNaO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQXZEVyxjQUFjO1FBUDFCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLHdCQUF3QjtZQUNyQyxTQUFTLEVBQUUsQ0FBQyx1QkFBdUIsQ0FBQztTQUNwQyxDQUFDO3lDQVFnQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3hCLGdDQUFjO09BUnJCLGNBQWMsQ0F3RDFCO0lBQUQscUJBQUM7Q0FBQSxBQXhERCxJQXdEQztBQXhEWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcbi8vTE9BRElOR1xuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG4vLyBtb2RlbG9cbmltcG9ydCB7IFVzdWFyaW8gfSBmcm9tICd+L2FwcC9zaGFyZWQvdXN1YXJpby91c3VhcmlvLm1vZGVsJztcbi8vc2VydmljaW9cbmltcG9ydCB7IFVzdWFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnbG9naW4nLFxuXHR0ZW1wbGF0ZVVybDogJy4vbG9naW4uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9sb2dpbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8vVkFSSUFCTEVTIEdMT0JBTEVTXG5cdHB1YmxpYyB1c3VhcmlvOiBVc3VhcmlvO1xuXHRwdWJsaWMgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwdWJsaWMgXHR1c3VhcmlvUzogVXN1YXJpb1NlcnZpY2UsXG5cdCkgeyBcblx0XHRcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHR9XG5cblx0bG9naW4oZm9ybTogTmdGb3JtKXtcblx0XHRjb25zb2xlLmxvZyhcImluZ3Jlc29cIiwgZm9ybS52YWx1ZSk7XG5cblx0XHR0aGlzLmxvYWRlci5zaG93KCk7XG5cblx0XHRsZXQgdXNlciA9IHtcblx0XHRcdG1hdHJpY3VsYTogZm9ybS52YWx1ZS5tYXRyaWN1bGEsXG5cdFx0XHRjb250cmFzZW5hOiBmb3JtLnZhbHVlLmNvbnRyYXNlbmFcblx0XHR9XG5cblx0XHR0aGlzLnVzdWFyaW9TLmxvZ2luKHVzZXIpLnN1YnNjcmliZSggZGF0b3M9Pntcblx0XHRcdFxuXHRcdFx0dGhpcy5sb2FkZXIuaGlkZSgpO1xuXG5cdFx0XHRpZihkYXRvcy5lcnJvcil7XG5cdFx0XHRcdGxldCBvcHRpb25zID0ge1xuXHRcdFx0XHRcdHRpdGxlOiBcIkFsZXJ0YVwiLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IGRhdG9zLm1lbnNhamUsXG5cdFx0XHRcdFx0b2tCdXR0b25UZXh0OiBcIk9LXCJcblx0XHRcdFx0fTtcblx0XHRcdFx0XG5cdFx0XHRcdGFsZXJ0KG9wdGlvbnMpO1xuXG5cdFx0XHR9ZWxzZXtcblx0XHRcdFx0dGhpcy51c3VhcmlvID0gZGF0b3MudXN1YXJpbztcblx0XHRcdFx0Y29uc29sZS5sb2coXCJsb2dpbiBmdW5jdGlvblwiLCB0aGlzLnVzdWFyaW8pO1xuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0fVxuICAgXG5cblx0aXJBdHJhcygpe1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwge1xuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRuYW1lOiBcImZhZGVcIlxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59Il19