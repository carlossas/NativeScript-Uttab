"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var auth_1 = require("~/app/shared/auth");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var examen_service_1 = require("~/app/shared/examenalumno/examen.service");
var carreras_service_1 = require("~/app/shared/carreras/carreras.service");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var CrearexamenComponent = /** @class */ (function () {
    function CrearexamenComponent(authS, router, routerExtensions, examenesS, carrerasS) {
        this.authS = authS;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.examenesS = examenesS;
        this.carrerasS = carrerasS;
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    CrearexamenComponent.prototype.ngOnInit = function () {
        var _this = this;
        //OBTENER LAS CARRERAS
        this.carrerasS.obtenerCarreras().subscribe(function (result) {
            _this.carreras = result;
            _this.item = {
                items: result,
                length: result.length,
                getItem: function (index) {
                    return this.items[index].nombre;
                }
            };
        });
    };
    CrearexamenComponent.prototype.registro = function (form) {
        console.log("form valid", form.valid);
        if (!form.valid) {
            console.log("complete sus datos");
            return;
        }
        // this.loader.show();
        if (form.value.carrera === undefined) {
            form.value.carrera = 0;
        }
        var examen = {
            nombre: form.value.nombre.toLowerCase(),
            numeroPreguntas: form.value.preguntas.toLowerCase(),
            random: 0,
            id_carrera: this.carreras[form.value.carrera].id_carrera,
            tiempo: 0,
            id_profesor: this.authS.usuarioAuth.id_usuario
        };
        this.examenesS.crearExamen(examen).subscribe(function (result) {
            console.log(result);
        });
        console.log("EXAMEN", examen);
    };
    CrearexamenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'crearexamen',
            templateUrl: './crearexamen.component.html',
            styleUrls: ['./crearexamen.component.css']
        }),
        __metadata("design:paramtypes", [auth_1.authService,
            router_1.Router,
            router_2.RouterExtensions,
            examen_service_1.ExamenesService,
            carreras_service_1.CarrerasService])
    ], CrearexamenComponent);
    return CrearexamenComponent;
}());
exports.CrearexamenComponent = CrearexamenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXJleGFtZW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3JlYXJleGFtZW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUFnRDtBQUNoRCwwQ0FBeUM7QUFDekMsc0RBQStEO0FBQy9ELDJFQUEyRTtBQUUzRSwyRUFBeUU7QUFDekUsaUZBQWtFO0FBU2xFO0lBS0MsOEJBQ1EsS0FBa0IsRUFDakIsTUFBYyxFQUNkLGdCQUFrQyxFQUNuQyxTQUEwQixFQUMxQixTQUEwQjtRQUoxQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ25DLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBQzFCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBUDNCLFdBQU0sR0FBRyxJQUFJLGlEQUFnQixFQUFFLENBQUM7SUFRbkMsQ0FBQztJQUVMLHVDQUFRLEdBQVI7UUFBQSxpQkFZQztRQVhBLHNCQUFzQjtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBRSxVQUFBLE1BQU07WUFDdkQsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdkIsS0FBSSxDQUFDLElBQUksR0FBRztnQkFDQyxLQUFLLEVBQUUsTUFBTTtnQkFDYixNQUFNLEVBQUUsTUFBTSxDQUFDLE1BQU07Z0JBQ3JCLE9BQU8sRUFBRSxVQUFTLEtBQUs7b0JBQ25CLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQztnQkFDaEQsQ0FBQzthQUNELENBQUE7UUFDRixDQUFDLENBQUMsQ0FBQTtJQUNILENBQUM7SUFFRCx1Q0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdEMsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUEsQ0FBQztZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsQ0FBQztZQUNsQyxNQUFNLENBQUM7UUFDUixDQUFDO1FBRUQsc0JBQXNCO1FBR3RCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJLE1BQU0sR0FBUTtZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQ3ZDLGVBQWUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUU7WUFDbkQsTUFBTSxFQUFFLENBQUM7WUFDVCxVQUFVLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFVBQVU7WUFDeEQsTUFBTSxFQUFFLENBQUM7WUFDVCxXQUFXLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsVUFBVTtTQUM5QyxDQUFBO1FBRUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUMsU0FBUyxDQUFFLFVBQUEsTUFBTTtZQUNuRCxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRXJCLENBQUMsQ0FBQyxDQUFBO1FBRUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFJL0IsQ0FBQztJQTVEVyxvQkFBb0I7UUFQaEMsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsOEJBQThCO1lBQzNDLFNBQVMsRUFBRSxDQUFDLDZCQUE2QixDQUFDO1NBQzFDLENBQUM7eUNBUWMsa0JBQVc7WUFDVCxlQUFNO1lBQ0kseUJBQWdCO1lBQ3hCLGdDQUFlO1lBQ2Ysa0NBQWU7T0FWdEIsb0JBQW9CLENBNkRoQztJQUFELDJCQUFDO0NBQUEsQUE3REQsSUE2REM7QUE3RFksb0RBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL2F1dGgnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgRXhhbWVuZXNTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL2V4YW1lbmFsdW1uby9leGFtZW4uc2VydmljZSc7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBDYXJyZXJhc1NlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvY2FycmVyYXMvY2FycmVyYXMuc2VydmljZSc7XG5pbXBvcnQgeyBMb2FkaW5nSW5kaWNhdG9yIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAnY3JlYXJleGFtZW4nLFxuXHR0ZW1wbGF0ZVVybDogJy4vY3JlYXJleGFtZW4uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9jcmVhcmV4YW1lbi5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBDcmVhcmV4YW1lbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdHB1YmxpYyBjYXJyZXJhczogYW55IFtdO1xuXHRwdWJsaWMgaXRlbTogYW55O1xuXHRwdWJsaWMgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcblxuXHRjb25zdHJ1Y3Rvcihcblx0XHRwdWJsaWMgYXV0aFM6IGF1dGhTZXJ2aWNlLFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwdWJsaWMgZXhhbWVuZXNTOiBFeGFtZW5lc1NlcnZpY2UsXG5cdFx0cHVibGljIGNhcnJlcmFzUzogQ2FycmVyYXNTZXJ2aWNlXG5cdCkgeyB9XG5cblx0bmdPbkluaXQoKSB7IFxuXHRcdC8vT0JURU5FUiBMQVMgQ0FSUkVSQVNcbiAgICAgICAgdGhpcy5jYXJyZXJhc1Mub2J0ZW5lckNhcnJlcmFzKCkuc3Vic2NyaWJlKCByZXN1bHQ9Pntcblx0XHRcdHRoaXMuY2FycmVyYXMgPSByZXN1bHQ7XG5cdFx0XHR0aGlzLml0ZW0gPSB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IHJlc3VsdCxcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHJlc3VsdC5sZW5ndGgsXG4gICAgICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNbaW5kZXhdLm5vbWJyZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pXG5cdH1cblxuXHRyZWdpc3Rybyhmb3JtOiBOZ0Zvcm0pe1xuXHRcdGNvbnNvbGUubG9nKFwiZm9ybSB2YWxpZFwiLCBmb3JtLnZhbGlkKTtcblx0XHRcblx0XHRpZighZm9ybS52YWxpZCl7XG5cdFx0XHRjb25zb2xlLmxvZyhcImNvbXBsZXRlIHN1cyBkYXRvc1wiKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyB0aGlzLmxvYWRlci5zaG93KCk7XG5cblxuXHRcdGlmIChmb3JtLnZhbHVlLmNhcnJlcmEgPT09IHVuZGVmaW5lZCl7XG5cdFx0XHRmb3JtLnZhbHVlLmNhcnJlcmEgPSAwO1xuXHRcdH1cblxuXHRcdGxldCBleGFtZW46IGFueSA9IHtcblx0XHRcdG5vbWJyZTogZm9ybS52YWx1ZS5ub21icmUudG9Mb3dlckNhc2UoKSxcblx0XHRcdG51bWVyb1ByZWd1bnRhczogZm9ybS52YWx1ZS5wcmVndW50YXMudG9Mb3dlckNhc2UoKSxcblx0XHRcdHJhbmRvbTogMCxcblx0XHRcdGlkX2NhcnJlcmE6IHRoaXMuY2FycmVyYXNbZm9ybS52YWx1ZS5jYXJyZXJhXS5pZF9jYXJyZXJhLFxuXHRcdFx0dGllbXBvOiAwLFxuXHRcdFx0aWRfcHJvZmVzb3I6IHRoaXMuYXV0aFMudXN1YXJpb0F1dGguaWRfdXN1YXJpb1xuXHRcdH1cblxuXHRcdHRoaXMuZXhhbWVuZXNTLmNyZWFyRXhhbWVuKGV4YW1lbikuc3Vic2NyaWJlKCByZXN1bHQ9Pntcblx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdCk7XG5cdFx0XHRcblx0XHR9KSBcblx0XHRcblx0XHRjb25zb2xlLmxvZyhcIkVYQU1FTlwiLCBleGFtZW4pO1xuXHRcdFxuXG5cdFx0XG5cdH1cbn0iXX0=