"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var http_1 = require("@angular/common/http");
//URL API
var url_api_1 = require("../url_api");
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
    }
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
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXN1YXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRTNDLDRDQUFzRDtBQUN0RCw2Q0FBK0Q7QUFHL0QsU0FBUztBQUNULHNDQUFxQztBQUdyQztJQUNJLHdCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUksQ0FBQztJQUl6QyxpQ0FBUSxHQUFSLFVBQVMsT0FBZ0I7UUFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7UUFDekMsSUFBSSxHQUFHLEdBQUcsaUJBQU8sR0FBRyxxQkFBcUIsQ0FBQztRQUN0QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDNUQsZUFBRyxDQUFDLFVBQUMsR0FBUTtZQUNYLE1BQU0sQ0FBQyxHQUFHLENBQUM7UUFDYixDQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2IsQ0FBQztJQUdPLDRDQUFtQixHQUEzQjtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDMUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNwQyxDQUFDLENBQUM7UUFFSixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUF0QlEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUVpQixpQkFBVTtPQUQzQixjQUFjLENBd0IxQjtJQUFELHFCQUFDO0NBQUEsQUF4QkQsSUF3QkM7QUF4Qlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcbi8vTU9ERUxPXHJcbmltcG9ydCB7IFVzdWFyaW8gfSBmcm9tIFwiLi91c3VhcmlvLm1vZGVsXCI7XHJcbi8vVVJMIEFQSVxyXG5pbXBvcnQgeyBVUkxfQVBJIH0gZnJvbSBcIi4uL3VybF9hcGlcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFVzdWFyaW9TZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG4gICAgXHJcblxyXG4gICAgcmVnaXN0ZXIodXN1YXJpbzogVXN1YXJpbykge1xyXG4gICAgICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICAgICAgbGV0IHVybCA9IFVSTF9BUEkgKyAnL3VzdWFyaW8vcmVnaXN0cmFyLyc7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdCh1cmwsIHVzdWFyaW8sIHsgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKFxyXG4gICAgICAgICAgICAgIG1hcCgocmVzOiBhbnkpID0+e1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICAgICAgICB9KSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBwcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XHJcbiAgICAgICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXHJcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gaGVhZGVycztcclxuICAgIH1cclxuXHJcbn0iXX0=