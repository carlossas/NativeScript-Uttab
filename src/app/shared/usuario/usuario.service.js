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
            }
            return res;
        }));
    };
    UsuarioService.prototype.cerrarSesion = function () {
        localStorage.removeItem('usuario');
        this.authS.usuarioAuth = null;
        this.authStatus = false;
        this.routerExtensions.navigate(["/home"], {
            clearHistory: true,
            transition: {
                name: "fade"
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXN1YXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDRDQUFzRDtBQUN0RCw2Q0FBK0Q7QUFDL0QsWUFBWTtBQUNaLDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFHL0QsU0FBUztBQUNULHNDQUFxQztBQUNyQyxjQUFjO0FBQ2Qsd0RBQTBEO0FBQzFELDZCQUE2QjtBQUM3QixnQ0FBc0M7QUFJdEM7SUFJSSx3QkFDWSxJQUFnQixFQUNoQixNQUFjLEVBQ2QsZ0JBQWtDLEVBQ2xDLEtBQWtCO1FBSGxCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUUxQixJQUFJLFNBQVMsR0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFHRCxtRkFBbUY7SUFDbkYsbUNBQW1DO0lBQ25DLHdDQUFlLEdBQWY7UUFBQSxpQkFxQkM7UUFwQkcsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLElBQUksU0FBUyxDQUFDLENBQUEsQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN6QyxJQUFJLEdBQUcsR0FBRyxpQkFBTyxHQUFHLDhCQUE4QixDQUFDO1lBQ25ELElBQUksT0FBTyxHQUFJO2dCQUNYLFVBQVUsRUFBRSxJQUFJLENBQUMsS0FB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RSxNQUFNO2FBQ2Y7U0FDSixDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsaUNBQVEsR0FBUixVQUFTLE9BQWdCO1FBQ3JCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFHLGlCQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQzVELGVBQUcsQ0FBQyxVQUFDLEdBQVE7WUFDWCxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQTtJQUNiLENBQUM7SUFHTyw0Q0FBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7U0FDcEMsQ0FBQyxDQUFDO1FBRUosTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBbkdRLGNBQWM7UUFEMUIsaUJBQVUsRUFBRTt5Q0FNUyxpQkFBVTtZQUNSLGVBQU07WUFDSSx5QkFBZ0I7WUFDM0Isa0JBQVc7T0FSckIsY0FBYyxDQXFHMUI7SUFBRCxxQkFBQztDQUFBLEFBckdELElBcUdDO0FBckdZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG4vL05BVkVHQUNJT05cclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG4vL01PREVMT1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSBcIi4vdXN1YXJpby5tb2RlbFwiO1xyXG4vL1VSTCBBUElcclxuaW1wb3J0IHsgVVJMX0FQSSB9IGZyb20gXCIuLi91cmxfYXBpXCI7XHJcbi8vTE9DQUxTVE9SQUdFXHJcbmltcG9ydCAqIGFzIGxvY2FsU3RvcmFnZSBmcm9tICduYXRpdmVzY3JpcHQtbG9jYWxzdG9yYWdlJztcclxuLy9BUVVJIFNFIEFMTUFDRU5BIEVMIFVTVUFSSU9cclxuaW1wb3J0IHsgYXV0aFNlcnZpY2UgfSBmcm9tIFwiLi4vYXV0aFwiO1xyXG5cclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzdWFyaW9TZXJ2aWNlIHtcclxuICAgIHB1YmxpYyBhdXRoU3RhdHVzOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBmaXJzdFBhZ2U6IHN0cmluZztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXHJcbiAgICAgICAgcHJpdmF0ZSBhdXRoUzogYXV0aFNlcnZpY2VcclxuICAgICkgeyBcclxuICAgICAgICBsZXQgcGFyc2VVc2VyOmFueSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c3VhcmlvJyk7XHJcbiAgICAgICAgdGhpcy5hdXRoUy51c3VhcmlvQXV0aCA9IEpTT04ucGFyc2UocGFyc2VVc2VyKTsgIFxyXG4gICAgICAgIHRoaXMudmVyaWZpY2FyU2VzaW9uKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vVU5BIFZFWiBRVUUgU0UgT0JUSUVORSBFTCBVU1VBUklPIERFIExPQ0FMIFNUT1JBR0UsIFZFUklGSUNBIFFVRSBFU1RFIEFVVEVOVElDQURPXHJcbiAgICAvL1kgUVVFIEVMIFRPS0VOIFNJR0EgU0lFTkRPIFZBTElET1xyXG4gICAgdmVyaWZpY2FyU2VzaW9uKCl7XHJcbiAgICAgICAgaWYodGhpcy5hdXRoUy51c3VhcmlvQXV0aCAhPSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgICAgICAgICBsZXQgdXJsID0gVVJMX0FQSSArICcvdXN1YXJpby9vYnRlbmVyVXN1YXJpb1BvcklkJztcclxuICAgICAgICAgICAgbGV0IHVzdWFyaW8gID0ge1xyXG4gICAgICAgICAgICAgICAgaWRfdXN1YXJpbzogdGhpcy5hdXRoUy51c3VhcmlvQXV0aC5pZF91c3VhcmlvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5odHRwLnBvc3QodXJsLCB1c3VhcmlvLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShcclxuICAgICAgICAgICAgbWFwKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0b2tlblwiLCByZXMudXN1YXJpby50b2tlbik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFjdHVhbCB0b2tlblwiLCB0aGlzLmF1dGhTLnVzdWFyaW9BdXRoLnRva2VuKTtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy51c3VhcmlvLnRva2VuID09PSB0aGlzLmF1dGhTLnVzdWFyaW9BdXRoLnRva2VuKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jZXJyYXJTZXNpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSkpLnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB0aGlzLmF1dGhTdGF0dXMgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9MT0dJTlxyXG4gICAgbG9naW4odXN1YXJpbzpVc3VhcmlvKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgICAgICBsZXQgdXJsID0gVVJMX0FQSSArICcvbG9naW4nO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCB1c3VhcmlvLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShcclxuICAgICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PntcclxuICAgICAgICAgICAgICAgICAgLy9TSSBOTyBFWElTVEUgTklOR1VOIEVSUk9SLCBBTE1BQ0VOQU1PUyBFTCBVU1VBUklPIEVOIFNUT1JBR0VcclxuICAgICAgICAgICAgICAgICAgaWYoIXJlcy5lcnJvcil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRoUy51c3VhcmlvQXV0aCA9IHJlcy51c3VhcmlvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0aFMudXN1YXJpb0F1dGggPSByZXMudXN1YXJpbztcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXN1YXJpbycsIEpTT04uc3RyaW5naWZ5KHJlcy51c3VhcmlvKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhTLnVzdWFyaW9BdXRoLnRpcG8gPT09ICcwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UGFnZSA9IFwidXN1YXJpb1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmF1dGhTLnVzdWFyaW9BdXRoLnRpcG8gPT09ICcxJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpcnN0UGFnZSA9IFwicHJvZmVzb3JcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWycvJyt0aGlzLmZpcnN0UGFnZV0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgICAgICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIGNlcnJhclNlc2lvbigpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c3VhcmlvJyk7XHJcbiAgICAgICAgdGhpcy5hdXRoUy51c3VhcmlvQXV0aCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hdXRoU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvaG9tZVwiXSwge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiZmFkZVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKHVzdWFyaW86IFVzdWFyaW8pIHtcclxuICAgICAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgICAgIGxldCB1cmwgPSBVUkxfQVBJICsgJy91c3VhcmlvL3JlZ2lzdHJhci8nO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QodXJsLCB1c3VhcmlvLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShcclxuICAgICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PntcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgICAgICAgfSkpXHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG59Il19