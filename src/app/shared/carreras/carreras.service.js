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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FycmVyYXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnJlcmFzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQStEO0FBRy9ELDRDQUFzRDtBQUN0RCxTQUFTO0FBQ1Qsc0NBQXFDO0FBR3JDO0lBQ0kseUJBQW1CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRTVDLHlDQUFlLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBRyxpQkFBTyxHQUFHLDJCQUEyQixDQUFDO1FBRWhELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQ2hELGVBQUcsQ0FBQyxVQUFDLFNBQWE7WUFDbEIsdURBQXVEO1lBQ3ZELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFUixDQUFDO0lBRU8sNkNBQW1CLEdBQTNCO1FBQ0ksd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixjQUFjLEVBQUUsa0JBQWtCO1NBQ3BDLENBQUMsQ0FBQztRQUVKLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQXRCWSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBRWdCLGlCQUFVO09BRDFCLGVBQWUsQ0F3QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xyXG5cclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcbi8vVVJMIEFQSVxyXG5pbXBvcnQgeyBVUkxfQVBJIH0gZnJvbSBcIi4uL3VybF9hcGlcIjtcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIENhcnJlcmFzU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgaHR0cDogSHR0cENsaWVudCkgeyB9XHJcblxyXG5vYnRlbmVyQ2FycmVyYXMoKSB7XHJcbiAgICBsZXQgaGVhZGVycyA9IHRoaXMuY3JlYXRlUmVxdWVzdEhlYWRlcigpO1xyXG4gICAgbGV0IHVybCA9IFVSTF9BUEkgKyAnL2NhcnJlcmFzL29idGVuZXJDYXJyZXJhcyc7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsLCB7IGhlYWRlcnM6IGhlYWRlcnMgfSkucGlwZShcclxuICAgICAgICBtYXAoKHJlc3VsdGFkbzphbnkpID0+e1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiT2J0ZW5lciBjYXJyZXJhcyBmdW5jdGlvblwiLCByZXN1bHRhZG8pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHRhZG8ucmVzdWx0O1xyXG4gICAgfSkpO1xyXG5cclxufVxyXG5cclxucHJpdmF0ZSBjcmVhdGVSZXF1ZXN0SGVhZGVyKCkge1xyXG4gICAgLy8gc2V0IGhlYWRlcnMgaGVyZSBlLmcuXHJcbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycyh7XHJcbiAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGhlYWRlcnM7XHJcbn1cclxuXHJcbn0iXX0=