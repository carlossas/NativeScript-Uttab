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
        //SE USA PARA TRANSICIONES
        this.routerExtensions.navigate([''], {
            clearHistory: true,
            transition: {
                name: "slideRight"
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFJL0QsU0FBUztBQUNULGlGQUFnRTtBQUdoRSxVQUFVO0FBQ1YscUVBQW1FO0FBU25FO0lBS0Msd0JBQ1MsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxRQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUwxQixXQUFNLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO0lBUXZDLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDhCQUFLLEdBQUwsVUFBTSxJQUFZO1FBQWxCLGlCQThCQztRQTdCQSxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUVuQixJQUFJLElBQUksR0FBRztZQUNWLFNBQVMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVM7WUFDL0IsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsVUFBVTtTQUNqQyxDQUFBO1FBRUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFFLFVBQUEsS0FBSztZQUV6QyxLQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1lBRW5CLEVBQUUsQ0FBQSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUNmLElBQUksT0FBTyxHQUFHO29CQUNiLEtBQUssRUFBRSxRQUFRO29CQUNmLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztvQkFDdEIsWUFBWSxFQUFFLElBQUk7aUJBQ2xCLENBQUM7Z0JBRUYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBRWhCLENBQUM7WUFBQSxJQUFJLENBQUEsQ0FBQztnQkFDTCxLQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7Z0JBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzdDLENBQUM7UUFFRixDQUFDLENBQUMsQ0FBQztJQUVKLENBQUM7SUFHRCxnQ0FBTyxHQUFQO1FBQ0MsMEJBQTBCO1FBQzFCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNwQyxZQUFZLEVBQUUsSUFBSTtZQUNsQixVQUFVLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLFlBQVk7YUFDbEI7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBekRXLGNBQWM7UUFQMUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUsd0JBQXdCO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLHVCQUF1QixDQUFDO1NBQ3BDLENBQUM7eUNBUWdCLGVBQU07WUFDSSx5QkFBZ0I7WUFDeEIsZ0NBQWM7T0FSckIsY0FBYyxDQTBEMUI7SUFBRCxxQkFBQztDQUFBLEFBMURELElBMERDO0FBMURZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBhY3Rpb24gfSBmcm9tIFwidWkvZGlhbG9nc1wiO1xuLy9MT0FESU5HXG5pbXBvcnQge0xvYWRpbmdJbmRpY2F0b3J9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcbi8vIG1vZGVsb1xuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gJ34vYXBwL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8ubW9kZWwnO1xuLy9zZXJ2aWNpb1xuaW1wb3J0IHsgVXN1YXJpb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdXN1YXJpby91c3VhcmlvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICdsb2dpbicsXG5cdHRlbXBsYXRlVXJsOiAnLi9sb2dpbi5jb21wb25lbnQuaHRtbCcsXG5cdHN0eWxlVXJsczogWycuL2xvZ2luLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblx0Ly9WQVJJQUJMRVMgR0xPQkFMRVNcblx0cHVibGljIHVzdWFyaW86IFVzdWFyaW87XG5cdHB1YmxpYyBsb2FkZXIgPSBuZXcgTG9hZGluZ0luZGljYXRvcigpO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdHB1YmxpYyBcdHVzdWFyaW9TOiBVc3VhcmlvU2VydmljZSxcblx0KSB7IFxuXHRcdFxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuXHRsb2dpbihmb3JtOiBOZ0Zvcm0pe1xuXHRcdGNvbnNvbGUubG9nKFwiaW5ncmVzb1wiLCBmb3JtLnZhbHVlKTtcblxuXHRcdHRoaXMubG9hZGVyLnNob3coKTtcblxuXHRcdGxldCB1c2VyID0ge1xuXHRcdFx0bWF0cmljdWxhOiBmb3JtLnZhbHVlLm1hdHJpY3VsYSxcblx0XHRcdGNvbnRyYXNlbmE6IGZvcm0udmFsdWUuY29udHJhc2VuYVxuXHRcdH1cblxuXHRcdHRoaXMudXN1YXJpb1MubG9naW4odXNlcikuc3Vic2NyaWJlKCBkYXRvcz0+e1xuXHRcdFx0XG5cdFx0XHR0aGlzLmxvYWRlci5oaWRlKCk7XG5cblx0XHRcdGlmKGRhdG9zLmVycm9yKXtcblx0XHRcdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0dGl0bGU6IFwiQWxlcnRhXCIsXG5cdFx0XHRcdFx0bWVzc2FnZTogZGF0b3MubWVuc2FqZSxcblx0XHRcdFx0XHRva0J1dHRvblRleHQ6IFwiT0tcIlxuXHRcdFx0XHR9O1xuXHRcdFx0XHRcblx0XHRcdFx0YWxlcnQob3B0aW9ucyk7XG5cblx0XHRcdH1lbHNle1xuXHRcdFx0XHR0aGlzLnVzdWFyaW8gPSBkYXRvcy51c3VhcmlvO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcImxvZ2luIGZ1bmN0aW9uXCIsIHRoaXMudXN1YXJpbyk7XG5cdFx0XHR9XG5cblx0XHR9KTtcblxuXHR9XG4gICBcblxuXHRpckF0cmFzKCl7XG5cdFx0Ly9TRSBVU0EgUEFSQSBUUkFOU0lDSU9ORVNcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycnXSwge1xuXHRcdFx0Y2xlYXJIaXN0b3J5OiB0cnVlLFxuXHRcdFx0dHJhbnNpdGlvbjoge1xuXHRcdFx0XHRuYW1lOiBcInNsaWRlUmlnaHRcIlxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59Il19