"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var examen_service_1 = require("~/app/shared/examenalumno/examen.service");
var auth_1 = require("~/app/shared/auth");
//ROUTES
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var ListaExamenComponent = /** @class */ (function () {
    function ListaExamenComponent(examenesS, authS, router, routerExtensions) {
        var _this = this;
        this.examenesS = examenesS;
        this.authS = authS;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.examenes = [];
        this.examenesS.obtenerExamenes(this.authS.usuarioAuth.id_carrera).subscribe(function (datos) {
            _this.examenes = datos;
            // console.log("Examenes pendientes", datos);
        });
    }
    ListaExamenComponent.prototype.ngOnInit = function () { };
    ListaExamenComponent.prototype.irAlExamen = function (id_examen) {
        this.routerExtensions.navigate(['usuario/examen', id_examen], {
            transition: {
                name: "fade"
            },
            clearHistory: true
        });
    };
    ListaExamenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'listaExamen',
            templateUrl: './listaExamen.component.html',
            styleUrls: ['./listaExamen.component.css']
        }),
        __metadata("design:paramtypes", [examen_service_1.ExamenesService,
            auth_1.authService,
            router_2.Router,
            router_1.RouterExtensions])
    ], ListaExamenComponent);
    return ListaExamenComponent;
}());
exports.ListaExamenComponent = ListaExamenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGFFeGFtZW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibGlzdGFFeGFtZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUEyRTtBQUMzRSwwQ0FBZ0Q7QUFDaEQsUUFBUTtBQUNSLHNEQUErRDtBQUMvRCwwQ0FBd0Q7QUFTeEQ7SUFHQyw4QkFDUSxTQUEwQixFQUMxQixLQUFrQixFQUNqQixNQUFjLEVBQ2QsZ0JBQWtDO1FBSjNDLGlCQVdDO1FBVk8sY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFDMUIsVUFBSyxHQUFMLEtBQUssQ0FBYTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQU5wQyxhQUFRLEdBQVUsRUFBRSxDQUFDO1FBUTNCLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFNBQVMsQ0FBRSxVQUFBLEtBQUs7WUFDakYsS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDdEIsNkNBQTZDO1FBRTlDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHVDQUFRLEdBQVIsY0FBYSxDQUFDO0lBR2QseUNBQVUsR0FBVixVQUFXLFNBQVM7UUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLFNBQVMsQ0FBQyxFQUFFO1lBQzdELFVBQVUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsTUFBTTthQUNaO1lBQ0QsWUFBWSxFQUFFLElBQUk7U0FDbEIsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQTFCVyxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzFDLENBQUM7eUNBTWtCLGdDQUFlO1lBQ25CLGtCQUFXO1lBQ1QsZUFBTTtZQUNJLHlCQUFnQjtPQVAvQixvQkFBb0IsQ0E0QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTVCRCxJQTRCQztBQTVCWSxvREFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBFeGFtZW5lc1NlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvZXhhbWVuYWx1bW5vL2V4YW1lbi5zZXJ2aWNlJztcclxuaW1wb3J0IHsgYXV0aFNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvYXV0aCc7XHJcbi8vUk9VVEVTXHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdsaXN0YUV4YW1lbicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2xpc3RhRXhhbWVuLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9saXN0YUV4YW1lbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBMaXN0YUV4YW1lbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0cHVibGljIGV4YW1lbmVzOiBhbnlbXSA9IFtdO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBleGFtZW5lc1M6IEV4YW1lbmVzU2VydmljZSxcclxuXHRcdHB1YmxpYyBhdXRoUzogYXV0aFNlcnZpY2UsXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLCBcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuXHQpIHsgXHJcblx0XHR0aGlzLmV4YW1lbmVzUy5vYnRlbmVyRXhhbWVuZXModGhpcy5hdXRoUy51c3VhcmlvQXV0aC5pZF9jYXJyZXJhKS5zdWJzY3JpYmUoIGRhdG9zPT57XHJcblx0XHRcdHRoaXMuZXhhbWVuZXMgPSBkYXRvcztcclxuXHRcdFx0Ly8gY29uc29sZS5sb2coXCJFeGFtZW5lcyBwZW5kaWVudGVzXCIsIGRhdG9zKTtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkgeyB9XHJcblxyXG5cclxuXHRpckFsRXhhbWVuKGlkX2V4YW1lbil7XHJcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoWyd1c3VhcmlvL2V4YW1lbicsIGlkX2V4YW1lbl0sIHtcclxuXHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdG5hbWU6IFwiZmFkZVwiXHJcblx0XHRcdH0sXHJcblx0XHRcdGNsZWFySGlzdG9yeTogdHJ1ZVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxufSJdfQ==