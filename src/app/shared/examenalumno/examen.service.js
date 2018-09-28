"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
//URL API
var url_api_1 = require("../url_api");
var CarrerasService = /** @class */ (function () {
    function CarrerasService(http) {
        this.http = http;
    }
    CarrerasService.prototype.obtenerCarreras = function () {
        var headers = this.createRequestHeader();
        var url = url_api_1.URL_API + '/carreras/obtenerCarreras';
        return this.http.get(url, { headers: headers }).pipe(operators_1.map(function (resultado) {
            // console.log("Obtener carreras function", resultado);
            return resultado.result;
        }));
    };
    CarrerasService.prototype.createRequestHeader = function () {
        // set headers here e.g.
        var headers = new http_1.HttpHeaders({
            "Content-Type": "application/json",
        });
        return headers;
    };
    CarrerasService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], CarrerasService);
    return CarrerasService;
}());
exports.CarrerasService = CarrerasService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFHL0QsNENBQXNEO0FBQ3RELFNBQVM7QUFDVCxzQ0FBcUM7QUFHckM7SUFDSSx5QkFBbUIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFNUMseUNBQWUsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFHLGlCQUFPLEdBQUcsMkJBQTJCLENBQUM7UUFFaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEQsZUFBRyxDQUFDLFVBQUMsU0FBYTtZQUNsQix1REFBdUQ7WUFDdkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVSLENBQUM7SUFFTyw2Q0FBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7U0FDcEMsQ0FBQyxDQUFDO1FBRUosTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBdEJZLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFZ0IsaUJBQVU7T0FEMUIsZUFBZSxDQXdCM0I7SUFBRCxzQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuLy9VUkwgQVBJXHJcbmltcG9ydCB7IFVSTF9BUEkgfSBmcm9tIFwiLi4vdXJsX2FwaVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FycmVyYXNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbm9idGVuZXJDYXJyZXJhcygpIHtcclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICBsZXQgdXJsID0gVVJMX0FQSSArICcvY2FycmVyYXMvb2J0ZW5lckNhcnJlcmFzJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCh1cmwsIHsgaGVhZGVyczogaGVhZGVycyB9KS5waXBlKFxyXG4gICAgICAgIG1hcCgocmVzdWx0YWRvOmFueSkgPT57XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJPYnRlbmVyIGNhcnJlcmFzIGZ1bmN0aW9uXCIsIHJlc3VsdGFkbyk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdGFkby5yZXN1bHQ7XHJcbiAgICB9KSk7XHJcblxyXG59XHJcblxyXG5wcml2YXRlIGNyZWF0ZVJlcXVlc3RIZWFkZXIoKSB7XHJcbiAgICAvLyBzZXQgaGVhZGVycyBoZXJlIGUuZy5cclxuICAgIGxldCBoZWFkZXJzID0gbmV3IEh0dHBIZWFkZXJzKHtcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gaGVhZGVycztcclxufVxyXG5cclxufSJdfQ==