"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
//NAVEGACION
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
//URL API
var url_api_1 = require("../url_api");
//LOCALSTORAGE
var localStorage = require("nativescript-localstorage");
//AQUI SE ALMACENA EL USUARIO
var auth_1 = require("../auth");
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http, router, routerExtensions, authS) {
        this.http = http;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.authS = authS;
        var parseUser = localStorage.getItem('usuario');
        this.authS.usuarioAuth = JSON.parse(parseUser);
        this.verificarSesion();
    }
    //UNA VEZ QUE SE OBTIENE EL USUARIO DE LOCAL STORAGE, VERIFICA QUE ESTE AUTENTICADO
    //Y QUE EL TOKEN SIGA SIENDO VALIDO
    UsuarioService.prototype.verificarSesion = function () {
        var _this = this;
        if (this.authS.usuarioAuth != undefined) {
            this.authStatus = true;
            var headers = this.createRequestHeader();
            var url = url_api_1.URL_API + '/usuario/obtenerUsuarioPorId';
            var usuario = {
                id_usuario: this.authS.usuarioAuth.id_usuario
            };
            this.http.post(url, usuario, { headers: headers }).pipe(operators_1.map(function (res) {
                // console.log("token", res.usuario.token);
                // console.log("actual token", this.authS.usuarioAuth.token);
                if (res.usuario.token === _this.authS.usuarioAuth.token) {
                    _this.authStatus = true;
                }
                else {
                    _this.cerrarSesion();
                }
            })).subscribe();
        }
        else {
            this.authStatus = false;
        }
    };
    //LOGIN
    UsuarioService.prototype.login = function (usuario) {
        var _this = this;
        var headers = this.createRequestHeader();
        var url = url_api_1.URL_API + '/login';
        return this.http.post(url, usuario, { headers: headers }).pipe(operators_1.map(function (res) {
            //SI NO EXISTE NINGUN ERROR, ALMACENAMOS EL USUARIO EN STORAGE
            if (!res.error) {
                _this.authS.usuarioAuth = res.usuario;
                _this.authS.usuarioAuth = res.usuario;
                localStorage.setItem('usuario', JSON.stringify(res.usuario));
                setTimeout(function () {
                    if (_this.authS.usuarioAuth.tipo === '0') {
                        _this.firstPage = "usuario";
                    }
                    if (_this.authS.usuarioAuth.tipo === '1') {
                        _this.firstPage = "profesor";
                    }
                    _this.routerExtensions.navigate(['/' + _this.firstPage], {
                        clearHistory: true,
                        transition: {
                            name: "fade"
                        }
                    });
                }, 500);
            }
            return res;
        }));
    };
    UsuarioService.prototype.cerrarSesion = function () {
        var _this = this;
        localStorage.removeItem('usuario');
        this.authS.usuarioAuth = null;
        this.authStatus = false;
        setTimeout(function () {
            _this.routerExtensions.navigate(["/home"], {
                clearHistory: true,
                transition: {
                    name: "fade"
                }
            });
        }, 500);
    };
    UsuarioService.prototype.register = function (usuario) {
        var headers = this.createRequestHeader();
        var url = url_api_1.URL_API + '/usuario/registrar/';
        return this.http.post(url, usuario, { headers: headers }).pipe(operators_1.map(function (res) {
            return res;
        }));
    };
    UsuarioService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    };
    UsuarioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router,
            router_2.RouterExtensions,
            auth_1.authService])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXN1YXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDRDQUFzRDtBQUN0RCw2Q0FBK0Q7QUFDL0QsWUFBWTtBQUNaLDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFHL0QsU0FBUztBQUNULHNDQUFxQztBQUNyQyxjQUFjO0FBQ2Qsd0RBQTBEO0FBQzFELDZCQUE2QjtBQUM3QixnQ0FBc0M7QUFJdEM7SUFJSSx3QkFDWSxJQUFnQixFQUNoQixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLEtBQWtCO1FBSGxCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUUxQixJQUFJLFNBQVMsR0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHRCxtRkFBbUY7SUFDbkYsbUNBQW1DO0lBQ25DLHdDQUFlLEdBQWY7UUFBQSxpQkFxQkM7UUFwQkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN6QyxJQUFJLEdBQUcsR0FBRyxpQkFBTyxHQUFHLDhCQUE4QixDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFJO2dCQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FB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QyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN0QyxZQUFZLEVBQUUsSUFBSTtnQkFDbEIsVUFBVSxFQUFFO29CQUNSLElBQUksRUFBRSxNQUFNO2lCQUNmO2FBQ0osQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELGlDQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUNyQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBRyxpQkFBTyxHQUFHLHFCQUFxQixDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUM1RCxlQUFHLENBQUMsVUFBQyxHQUFRO1lBQ1gsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNiLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDYixDQUFDO0lBR08sNENBQW1CLEdBQTNCO1FBQ0ksd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixjQUFjLEVBQUUsa0JBQWtCO1NBQ3BDLENBQUMsQ0FBQztRQUVKLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQXZHUSxjQUFjO1FBRDFCLGlCQUFVLEVBQUU7eUNBTVMsaUJBQVU7WUFDUixlQUFNO1lBQ0kseUJBQWdCO1lBQzNCLGtCQUFXO09BUnJCLGNBQWMsQ0F5RzFCO0lBQUQscUJBQUM7Q0FBQSxBQXpHRCxJQXlHQztBQXpHWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuLy9OQVZFR0FDSU9OXHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuLy9NT0RFTE9cclxuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gXCIuL3VzdWFyaW8ubW9kZWxcIjtcclxuLy9VUkwgQVBJXHJcbmltcG9ydCB7IFVSTF9BUEkgfSBmcm9tIFwiLi4vdXJsX2FwaVwiO1xyXG4vL0xPQ0FMU1RPUkFHRVxyXG5pbXBvcnQgKiBhcyBsb2NhbFN0b3JhZ2UgZnJvbSAnbmF0aXZlc2NyaXB0LWxvY2Fsc3RvcmFnZSc7XHJcbi8vQVFVSSBTRSBBTE1BQ0VOQSBFTCBVU1VBUklPXHJcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSBcIi4uL2F1dGhcIjtcclxuXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc3VhcmlvU2VydmljZSB7XHJcbiAgICBwdWJsaWMgYXV0aFN0YXR1czogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgZmlyc3RQYWdlOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG4gICAgICAgIHByaXZhdGUgYXV0aFM6IGF1dGhTZXJ2aWNlXHJcbiAgICApIHsgXHJcbiAgICAgICAgbGV0IHBhcnNlVXNlcjphbnkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXN1YXJpbycpO1xyXG4gICAgICAgIHRoaXMuYXV0aFMudXN1YXJpb0F1dGggPSBKU09OLnBhcnNlKHBhcnNlVXNlcik7ICBcclxuICAgICAgICB0aGlzLnZlcmlmaWNhclNlc2lvbigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvL1VOQSBWRVogUVVFIFNFIE9CVElFTkUgRUwgVVNVQVJJTyBERSBMT0NBTCBTVE9SQUdFLCBWRVJJRklDQSBRVUUgRVNURSBBVVRFTlRJQ0FET1xyXG4gICAgLy9ZIFFVRSBFTCBUT0tFTiBTSUdBIFNJRU5ETyBWQUxJRE9cclxuICAgIHZlcmlmaWNhclNlc2lvbigpe1xyXG4gICAgICAgIGlmKHRoaXMuYXV0aFMudXN1YXJpb0F1dGggIT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICAgICAgbGV0IHVybCA9IFVSTF9BUEkgKyAnL3VzdWFyaW8vb2J0ZW5lclVzdWFyaW9Qb3JJZCc7XHJcbiAgICAgICAgICAgIGxldCB1c3VhcmlvICA9IHtcclxuICAgICAgICAgICAgICAgIGlkX3VzdWFyaW86IHRoaXMuYXV0aFMudXN1YXJpb0F1dGguaWRfdXN1YXJpb1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuaHR0cC5wb3N0KHVybCwgdXN1YXJpbywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidG9rZW5cIiwgcmVzLnVzdWFyaW8udG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhY3R1YWwgdG9rZW5cIiwgdGhpcy5hdXRoUy51c3VhcmlvQXV0aC50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMudXN1YXJpby50b2tlbiA9PT0gdGhpcy5hdXRoUy51c3VhcmlvQXV0aC50b2tlbil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2VycmFyU2VzaW9uKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKS5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5hdXRoU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vTE9HSU5cclxuICAgIGxvZ2luKHVzdWFyaW86VXN1YXJpbykge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAgICAgbGV0IHVybCA9IFVSTF9BUEkgKyAnL2xvZ2luJztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgdXN1YXJpbywgeyBoZWFkZXJzOiBoZWFkZXJzIH0pLnBpcGUoXHJcbiAgICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT57XHJcbiAgICAgICAgICAgICAgICAgIC8vU0kgTk8gRVhJU1RFIE5JTkdVTiBFUlJPUiwgQUxNQUNFTkFNT1MgRUwgVVNVQVJJTyBFTiBTVE9SQUdFXHJcbiAgICAgICAgICAgICAgICAgIGlmKCFyZXMuZXJyb3Ipe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFMudXN1YXJpb0F1dGggPSByZXMudXN1YXJpbztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTLnVzdWFyaW9BdXRoID0gcmVzLnVzdWFyaW87XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzdWFyaW8nLCBKU09OLnN0cmluZ2lmeShyZXMudXN1YXJpbykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoUy51c3VhcmlvQXV0aC50aXBvID09PSAnMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFBhZ2UgPSBcInVzdWFyaW9cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hdXRoUy51c3VhcmlvQXV0aC50aXBvID09PSAnMScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdFBhZ2UgPSBcInByb2Zlc29yXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFsnLycrdGhpcy5maXJzdFBhZ2VdLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNlcnJhclNlc2lvbigpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c3VhcmlvJyk7XHJcbiAgICAgICAgdGhpcy5hdXRoUy51c3VhcmlvQXV0aCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdXRoU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVnaXN0ZXIodXN1YXJpbzogVXN1YXJpbykge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAgICAgbGV0IHVybCA9IFVSTF9BUEkgKyAnL3VzdWFyaW8vcmVnaXN0cmFyLyc7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHVzdWFyaW8sIHsgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKFxyXG4gICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICB9KSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XHJcbiAgICAgICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbn0iXX0=