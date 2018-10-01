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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbWVuLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJleGFtZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyw2Q0FBK0Q7QUFHL0QsNENBQTZEO0FBQzdELFNBQVM7QUFDVCxzQ0FBcUM7QUFHckM7SUFDSSx5QkFBbUIsSUFBZ0I7UUFBaEIsU0FBSSxHQUFKLElBQUksQ0FBWTtJQUFJLENBQUM7SUFFNUMseUNBQWUsR0FBZixVQUFnQixVQUFVO1FBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksR0FBRyxHQUFHLGlCQUFPLEdBQUcsa0NBQWtDLEdBQUcsVUFBVSxDQUFDO1FBRXBFLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2hELGVBQUcsQ0FBQyxVQUFDLFNBQWE7WUFDbEIsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUVSLENBQUM7SUFFRCwwQ0FBZ0IsR0FBaEIsVUFBaUIsU0FBUztRQUN0QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBRyxpQkFBTyxHQUFHLG1DQUFtQyxHQUFHLFNBQVMsQ0FBQztRQUVwRSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUNoRCxlQUFHLENBQUMsVUFBQyxTQUFjO1lBQ2YsTUFBTSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNaLENBQUM7SUFFTyw2Q0FBbUIsR0FBM0I7UUFDSSx3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEdBQUcsSUFBSSxrQkFBVyxDQUFDO1lBQzFCLGNBQWMsRUFBRSxrQkFBa0I7U0FDcEMsQ0FBQyxDQUFDO1FBRUosTUFBTSxDQUFDLE9BQU8sQ0FBQztJQUNuQixDQUFDO0lBL0JZLGVBQWU7UUFEM0IsaUJBQVUsRUFBRTt5Q0FFZ0IsaUJBQVU7T0FEMUIsZUFBZSxDQWlDM0I7SUFBRCxzQkFBQztDQUFBLEFBakNELElBaUNDO0FBakNZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAsIHJldHJ5IH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbi8vVVJMIEFQSVxyXG5pbXBvcnQgeyBVUkxfQVBJIH0gZnJvbSBcIi4uL3VybF9hcGlcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEV4YW1lbmVzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG5vYnRlbmVyRXhhbWVuZXMoaWRfY2FycmVyYSkge1xyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgIGxldCB1cmwgPSBVUkxfQVBJICsgJy9leGFtZW5lc2FsdW1uby9vYnRlbmVyRXhhbWVuZXMvJyArIGlkX2NhcnJlcmE7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShcclxuICAgICAgICBtYXAoKHJlc3VsdGFkbzphbnkpID0+e1xyXG4gICAgICAgIHJldHVybiByZXN1bHRhZG8ucmVzdWx0O1xyXG4gICAgfSkpO1xyXG5cclxufVxyXG5cclxub2J0ZW5lclByZWd1bnRhcyhpZF9leGFtZW4pe1xyXG4gICAgbGV0IGhlYWRlcnMgPSB0aGlzLmNyZWF0ZVJlcXVlc3RIZWFkZXIoKTtcclxuICAgIGxldCB1cmwgPSBVUkxfQVBJICsgJy9leGFtZW5lc2FsdW1uby9vYnRlbmVyUHJlZ3VudGFzLycgKyBpZF9leGFtZW47XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShcclxuICAgICAgICBtYXAoKHJlc3VsdGFkbzogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRhZG8ucmVzdWx0O1xyXG4gICAgICAgIH0pKTtcclxufVxyXG5cclxucHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbn1cclxuXHJcbn0iXX0=