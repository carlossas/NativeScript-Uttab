"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var examen_service_1 = require("~/app/shared/examenalumno/examen.service");
var auth_1 = require("~/app/shared/auth");
var ExamenComponent = /** @class */ (function () {
    function ExamenComponent(activatedRoute, examenesS, authS) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.examenesS = examenesS;
        this.authS = authS;
        this.preguntas = [];
        this.aciertos = 0;
        this.totalPreguntas = 0;
        this.activatedRoute.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.obtenerPreguntasPorId();
        });
    }
    ExamenComponent.prototype.ngOnInit = function () { };
    ExamenComponent.prototype.responder = function (respuesta, index) {
        // console.log(this.preguntas[index].respuesta);
        // console.log(respuesta);
        //SI YA NO HAY PREGUNTAS, ME SALGO DE LA FUNCION Y PROMEDIO SEGUN LOS ACIERTOS
        if (this.preguntas.length === 1) {
            if (this.preguntas[index].respuesta === respuesta) {
                this.aciertos++;
            }
            this.preguntas.splice(index, 1);
            this.calificacionFinal = (this.aciertos / this.totalPreguntas) * 100;
            console.log("calificacion", this.calificacionFinal);
            return;
        }
        //SI LA RESPUESTA ES CORRECTA, SUBO LOS ACIERTOS
        if (this.preguntas[index].respuesta === respuesta) {
            this.aciertos++;
        }
        //QUITO LA PREGUNTA QUE YA RESPONDIO EL USUARIO
        this.preguntas.splice(index, 1);
    };
    ExamenComponent.prototype.obtenerPreguntasPorId = function () {
        var _this = this;
        this.examenesS.obtenerPreguntas(this.id).subscribe(function (datos) {
            // console.log("Preguntas", datos);
            _this.preguntas = datos;
            _this.totalPreguntas = datos.length;
        });
    };
    ExamenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'examen',
            templateUrl: './examen.component.html',
            styleUrls: ['./examen.component.css']
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute,
            examen_service_1.ExamenesService,
            auth_1.authService])
    ], ExamenComponent);
    return ExamenComponent;
}());
exports.ExamenComponent = ExamenComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImV4YW1lbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsMENBQWlEO0FBQ2pELDJFQUEyRTtBQUMzRSwwQ0FBZ0Q7QUFVaEQ7SUFPQyx5QkFDUyxjQUE4QixFQUMvQixTQUEwQixFQUMxQixLQUFrQjtRQUgxQixpQkFVQztRQVRRLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUMvQixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUMxQixVQUFLLEdBQUwsS0FBSyxDQUFhO1FBUm5CLGNBQVMsR0FBVSxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixtQkFBYyxHQUFXLENBQUMsQ0FBQztRQVNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQzFDLEtBQUksQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFBO0lBQ0gsQ0FBQztJQUVELGtDQUFRLEdBQVIsY0FBYSxDQUFDO0lBRWQsbUNBQVMsR0FBVCxVQUFVLFNBQVMsRUFBRSxLQUFLO1FBQ3pCLGdEQUFnRDtRQUNoRCwwQkFBMEI7UUFFMUIsOEVBQThFO1FBQzlFLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFBLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkQsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ2pCLENBQUM7WUFDRCxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEdBQUcsR0FBRyxDQUFDO1lBQ25FLE9BQU8sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1lBQ3BELE1BQU0sQ0FBQztRQUNSLENBQUM7UUFDRCxnREFBZ0Q7UUFDaEQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQztRQUNELCtDQUErQztRQUMvQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFakMsQ0FBQztJQUdELCtDQUFxQixHQUFyQjtRQUFBLGlCQU1DO1FBTEEsSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUN2RCxtQ0FBbUM7WUFDbkMsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQ3BDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQW5EVyxlQUFlO1FBUDNCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFFBQVE7WUFDbEIsV0FBVyxFQUFFLHlCQUF5QjtZQUN0QyxTQUFTLEVBQUUsQ0FBQyx3QkFBd0IsQ0FBQztTQUNyQyxDQUFDO3lDQVV3Qix1QkFBYztZQUNwQixnQ0FBZTtZQUNuQixrQkFBVztPQVZkLGVBQWUsQ0FzRDNCO0lBQUQsc0JBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRXhhbWVuZXNTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL2V4YW1lbmFsdW1uby9leGFtZW4uc2VydmljZSc7XHJcbmltcG9ydCB7IGF1dGhTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL2F1dGgnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICdleGFtZW4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9leGFtZW4uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2V4YW1lbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBFeGFtZW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdHB1YmxpYyBpZDogbnVtYmVyO1xyXG5cdHB1YmxpYyBwcmVndW50YXM6IGFueVtdID0gW107XHJcblx0cHVibGljIGFjaWVydG9zOiBudW1iZXIgPSAwO1xyXG5cdHB1YmxpYyB0b3RhbFByZWd1bnRhczogbnVtYmVyID0gMDtcclxuXHRwdWJsaWMgY2FsaWZpY2FjaW9uRmluYWw6IG51bWJlcjtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHRcdHB1YmxpYyBleGFtZW5lc1M6IEV4YW1lbmVzU2VydmljZSxcclxuXHRcdHB1YmxpYyBhdXRoUzogYXV0aFNlcnZpY2UsXHJcblx0XHQpIHsgXHJcblx0XHRcclxuXHRcdHRoaXMuYWN0aXZhdGVkUm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG5cdFx0XHR0aGlzLmlkID0gcGFyYW1zWydpZCddO1xyXG5cdFx0XHR0aGlzLm9idGVuZXJQcmVndW50YXNQb3JJZCgpO1xyXG5cdFx0fSlcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkgeyB9XHJcblxyXG5cdHJlc3BvbmRlcihyZXNwdWVzdGEsIGluZGV4KXtcclxuXHRcdC8vIGNvbnNvbGUubG9nKHRoaXMucHJlZ3VudGFzW2luZGV4XS5yZXNwdWVzdGEpO1xyXG5cdFx0Ly8gY29uc29sZS5sb2cocmVzcHVlc3RhKTtcclxuXHJcblx0XHQvL1NJIFlBIE5PIEhBWSBQUkVHVU5UQVMsIE1FIFNBTEdPIERFIExBIEZVTkNJT04gWSBQUk9NRURJTyBTRUdVTiBMT1MgQUNJRVJUT1NcclxuXHRcdGlmKHRoaXMucHJlZ3VudGFzLmxlbmd0aCA9PT0gMSl7XHJcblx0XHRcdGlmICh0aGlzLnByZWd1bnRhc1tpbmRleF0ucmVzcHVlc3RhID09PSByZXNwdWVzdGEpIHtcclxuXHRcdFx0XHR0aGlzLmFjaWVydG9zKys7XHJcblx0XHRcdH1cclxuXHRcdFx0dGhpcy5wcmVndW50YXMuc3BsaWNlKGluZGV4LCAxKTtcdFx0XHRcclxuXHRcdFx0dGhpcy5jYWxpZmljYWNpb25GaW5hbCA9ICh0aGlzLmFjaWVydG9zL3RoaXMudG90YWxQcmVndW50YXMpICogMTAwO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNhbGlmaWNhY2lvblwiLCB0aGlzLmNhbGlmaWNhY2lvbkZpbmFsKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0Ly9TSSBMQSBSRVNQVUVTVEEgRVMgQ09SUkVDVEEsIFNVQk8gTE9TIEFDSUVSVE9TXHJcblx0XHRpZiAodGhpcy5wcmVndW50YXNbaW5kZXhdLnJlc3B1ZXN0YSA9PT0gcmVzcHVlc3RhKSB7XHJcblx0XHRcdHRoaXMuYWNpZXJ0b3MrKztcclxuXHRcdH1cclxuXHRcdC8vUVVJVE8gTEEgUFJFR1VOVEEgUVVFIFlBIFJFU1BPTkRJTyBFTCBVU1VBUklPXHJcblx0XHR0aGlzLnByZWd1bnRhcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cclxuXHR9XHJcblx0XHJcblxyXG5cdG9idGVuZXJQcmVndW50YXNQb3JJZCgpe1xyXG5cdFx0dGhpcy5leGFtZW5lc1Mub2J0ZW5lclByZWd1bnRhcyh0aGlzLmlkKS5zdWJzY3JpYmUoZGF0b3MgPT4ge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyhcIlByZWd1bnRhc1wiLCBkYXRvcyk7XHJcblx0XHRcdHRoaXMucHJlZ3VudGFzID0gZGF0b3M7XHJcblx0XHRcdHRoaXMudG90YWxQcmVndW50YXMgPSBkYXRvcy5sZW5ndGg7XHJcblx0XHR9KTtcclxuXHR9XHJcblxyXG5cdFxyXG59Il19