"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
//URL API
var url_api_1 = require("../url_api");
var ExamenesService = /** @class */ (function () {
    function ExamenesService(http) {
        this.http = http;
    }
    ExamenesService.prototype.obtenerExamenes = function (id_carrera) {
        var headers = this.createRequestHeader();
        var url = url_api_1.URL_API + '/examenesalumno/obtenerExamenes/' + id_carrera;
        return this.http.get(url, { headers: headers }).pipe(operators_1.map(function (resultado) {
            return resultado.result;
        }));
    };
    ExamenesService.prototype.obtenerPreguntas = function (id_examen) {
        var headers = this.createRequestHeader();
        var url = url_api_1.URL_API + '/examenesalumno/obtenerPreguntas/' + id_examen;
        return this.http.get(url, { headers: headers }).pipe(operators_1.map(function (resultado) {
            return resultado.result;
        }));
    };
    ExamenesService.prototype.crearExamen = function (examen) {
        var headers = this.createRequestHeader();
        var url = url_api_1.URL_API + '/examenesalumno/crearExamen';
        return this.http.post(url, examen, { headers: headers }).pipe(operators_1.map(function (resultado) {
            return resultado.result;
        }));
    };
    ExamenesService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    };
    ExamenesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], ExamenesService);
    return ExamenesService;
}());
exports.ExamenesService = ExamenesService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFHL0QsNENBQTZEO0FBQzdELFNBQVM7QUFDVCxzQ0FBcUM7QUFHckM7SUFDSSx5QkFBbUIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFNUMseUNBQWUsR0FBZixVQUFnQixVQUFVO1FBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFHLGlCQUFPLEdBQUcsa0NBQWtDLEdBQUcsVUFBVSxDQUFDO1FBRXBFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2hELGVBQUcsQ0FBQyxVQUFDLFNBQWE7WUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVSLENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsU0FBUztRQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBRyxpQkFBTyxHQUFHLG1DQUFtQyxHQUFHLFNBQVMsQ0FBQztRQUVwRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNoRCxlQUFHLENBQUMsVUFBQyxTQUFjO1lBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFRCxxQ0FBVyxHQUFYLFVBQVksTUFBTTtRQUNkLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFHLGlCQUFPLEdBQUcsNkJBQTZCLENBQUM7UUFFbEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ3pELGVBQUcsQ0FBQyxVQUFDLFNBQWM7WUFDZixNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztRQUM1QixDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVPLDZDQUFtQixHQUEzQjtRQUNJLHdCQUF3QjtRQUN4QixJQUFJLE9BQU8sR0FBRyxJQUFJLGtCQUFXLENBQUM7WUFDMUIsY0FBYyxFQUFFLGtCQUFrQjtTQUNwQyxDQUFDLENBQUM7UUFFSixNQUFNLENBQUMsT0FBTyxDQUFDO0lBQ25CLENBQUM7SUF6Q1ksZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUVnQixpQkFBVTtPQUQxQixlQUFlLENBMkMzQjtJQUFELHNCQUFDO0NBQUEsQUEzQ0QsSUEyQ0M7QUEzQ1ksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuXHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCwgcmV0cnkgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuLy9VUkwgQVBJXHJcbmltcG9ydCB7IFVSTF9BUEkgfSBmcm9tIFwiLi4vdXJsX2FwaVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgRXhhbWVuZXNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbm9idGVuZXJFeGFtZW5lcyhpZF9jYXJyZXJhKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgbGV0IHVybCA9IFVSTF9BUEkgKyAnL2V4YW1lbmVzYWx1bW5vL29idGVuZXJFeGFtZW5lcy8nICsgaWRfY2FycmVyYTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHsgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzdWx0YWRvOmFueSkgPT57XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdGFkby5yZXN1bHQ7XHJcbiAgICB9KSk7XHJcblxyXG59XHJcblxyXG5vYnRlbmVyUHJlZ3VudGFzKGlkX2V4YW1lbil7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgbGV0IHVybCA9IFVSTF9BUEkgKyAnL2V4YW1lbmVzYWx1bW5vL29idGVuZXJQcmVndW50YXMvJyArIGlkX2V4YW1lbjtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHsgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzdWx0YWRvOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGFkby5yZXN1bHQ7XHJcbiAgICAgICAgfSkpO1xyXG59XHJcblxyXG5jcmVhckV4YW1lbihleGFtZW4pe1xyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgIGxldCB1cmwgPSBVUkxfQVBJICsgJy9leGFtZW5lc2FsdW1uby9jcmVhckV4YW1lbic7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgZXhhbWVuLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShcclxuICAgICAgICBtYXAoKHJlc3VsdGFkbzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRhZG8ucmVzdWx0O1xyXG4gICAgICAgIH0pKTtcclxufVxyXG5cclxucHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbn1cclxuXHJcbn0iXX0=