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
        return this.http.get('http://192.168.1.77/uttab-evaluaciones/index.php/carreras/obtenerCarreras').pipe(operators_1.map(function (resultado) {
            console.log("Obtener carreras function", resultado);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FycmVyYXMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnJlcmFzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MsNkNBQStEO0FBRy9ELDRDQUFzRDtBQUN0RCxTQUFTO0FBQ1Qsc0NBQXFDO0FBR3JDO0lBQ0kseUJBQW1CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRTVDLHlDQUFlLEdBQWY7UUFDSSxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztRQUN6QyxJQUFJLEdBQUcsR0FBRyxpQkFBTyxHQUFHLDJCQUEyQixDQUFDO1FBRWhELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLElBQUksQ0FDbEcsZUFBRyxDQUFDLFVBQUMsU0FBYTtZQUVsQixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLFNBQVMsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFUixDQUFDO0lBRU8sNkNBQW1CLEdBQTNCO1FBQ0ksd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksa0JBQVcsQ0FBQztZQUMxQixjQUFjLEVBQUUsa0JBQWtCO1NBQ3BDLENBQUMsQ0FBQztRQUVKLE1BQU0sQ0FBQyxPQUFPLENBQUM7SUFDbkIsQ0FBQztJQXZCWSxlQUFlO1FBRDNCLGlCQUFVLEVBQUU7eUNBRWdCLGlCQUFVO09BRDFCLGVBQWUsQ0F5QjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXpCRCxJQXlCQztBQXpCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQgeyBIdHRwLCBIZWFkZXJzLCBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInJ4anNcIjtcclxuaW1wb3J0IHsgY2F0Y2hFcnJvciwgbWFwLCB0YXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuLy9VUkwgQVBJXHJcbmltcG9ydCB7IFVSTF9BUEkgfSBmcm9tIFwiLi4vdXJsX2FwaVwiO1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FycmVyYXNTZXJ2aWNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbm9idGVuZXJDYXJyZXJhcygpIHtcclxuICAgIGxldCBoZWFkZXJzID0gdGhpcy5jcmVhdGVSZXF1ZXN0SGVhZGVyKCk7XHJcbiAgICBsZXQgdXJsID0gVVJMX0FQSSArICcvY2FycmVyYXMvb2J0ZW5lckNhcnJlcmFzJztcclxuXHJcbiAgICByZXR1cm4gdGhpcy5odHRwLmdldCgnaHR0cDovLzE5Mi4xNjguMS43Ny91dHRhYi1ldmFsdWFjaW9uZXMvaW5kZXgucGhwL2NhcnJlcmFzL29idGVuZXJDYXJyZXJhcycpLnBpcGUoXHJcbiAgICAgICAgbWFwKChyZXN1bHRhZG86YW55KSA9PntcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZyhcIk9idGVuZXIgY2FycmVyYXMgZnVuY3Rpb25cIiwgcmVzdWx0YWRvKTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0YWRvLnJlc3VsdDtcclxuICAgIH0pKTtcclxuXHJcbn1cclxuXHJcbnByaXZhdGUgY3JlYXRlUmVxdWVzdEhlYWRlcigpIHtcclxuICAgIC8vIHNldCBoZWFkZXJzIGhlcmUgZS5nLlxyXG4gICAgbGV0IGhlYWRlcnMgPSBuZXcgSHR0cEhlYWRlcnMoe1xyXG4gICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBoZWFkZXJzO1xyXG59XHJcblxyXG59Il19