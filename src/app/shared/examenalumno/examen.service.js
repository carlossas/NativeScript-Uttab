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
    ExamenesService.prototype.obtenerExamenes = function () {
        var headers = this.createRequestHeader();
        var url = url_api_1.URL_API + '/carreras/obtenerCarreras';
        return this.http.get(url, { headers: headers }).pipe(operators_1.map(function (resultado) {
            // console.log("Obtener carreras function", resultado);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFHL0QsNENBQTZEO0FBQzdELFNBQVM7QUFDVCxzQ0FBcUM7QUFHckM7SUFDSSx5QkFBbUIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFNUMseUNBQWUsR0FBZjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFHLGlCQUFPLEdBQUcsMkJBQTJCLENBQUM7UUFFaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FDaEQsZUFBRyxDQUFDLFVBQUMsU0FBYTtZQUNsQix1REFBdUQ7WUFDdkQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVSLENBQUM7SUFFTyw2Q0FBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7U0FDcEMsQ0FBQyxDQUFDO1FBRUosTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBdEJZLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFZ0IsaUJBQVU7T0FEMUIsZUFBZSxDQXdCM0I7SUFBRCxzQkFBQztDQUFBLEFBeEJELElBd0JDO0FBeEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAsIHJldHJ5IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbi8vVVJMIEFQSVxyXG5pbXBvcnQgeyBVUkxfQVBJIH0gZnJvbSBcIi4uL3VybF9hcGlcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4YW1lbmVzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG5vYnRlbmVyRXhhbWVuZXMoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgbGV0IHVybCA9IFVSTF9BUEkgKyAnL2NhcnJlcmFzL29idGVuZXJDYXJyZXJhcyc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShcclxuICAgICAgICBtYXAoKHJlc3VsdGFkbzphbnkpID0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiT2J0ZW5lciBjYXJyZXJhcyBmdW5jdGlvblwiLCByZXN1bHRhZG8pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRhZG8ucmVzdWx0O1xyXG4gICAgfSkpO1xyXG5cclxufVxyXG5cclxucHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbn1cclxuXHJcbn0iXX0=