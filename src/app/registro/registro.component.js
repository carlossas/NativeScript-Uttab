"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
// modelo
var usuario_model_1 = require("~/app/shared/usuario/usuario.model");
//servicio
var usuario_service_1 = require("../shared/usuario/usuario.service");
var carreras_service_1 = require("~/app/shared/carreras/carreras.service");
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(router, routerExtensions, usuarioS, carrerasS) {
        var _this = this;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.usuarioS = usuarioS;
        this.carrerasS = carrerasS;
        //INICIAR CLASE USUARIO
        this.usuario = new usuario_model_1.Usuario();
        //OBTENER LAS CARRERAS
        this.carrerasS.obtenerCarreras().subscribe(function (result) {
            _this.carreras = result;
            console.log("carreras", _this.carreras);
        });
    }
    RegistroComponent.prototype.ngOnInit = function () {
        //RADDATAFORM
        this._person = new usuario_model_1.Person("John", 23, "john@company.com", "New York", "5th Avenue", 11);
    };
    Object.defineProperty(RegistroComponent.prototype, "person", {
        //RADDATAFORM
        get: function () {
            return this._person;
        },
        enumerable: true,
        configurable: true
    });
    RegistroComponent.prototype.registro = function (form) {
        var usuario = {
            nombre: 'carlos',
            contrasena: '123'
        };
        console.log("form value:", form.value);
    };
    RegistroComponent.prototype.irAtras = function () {
        this.routerExtensions.back();
    };
    RegistroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'registro',
            templateUrl: './registro.component.html',
            styleUrls: ['./registro.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            usuario_service_1.UsuarioService,
            carreras_service_1.CarrerasService])
    ], RegistroComponent);
    return RegistroComponent;
}());
exports.RegistroComponent = RegistroComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFNL0QsU0FBUztBQUNULG9FQUFxRTtBQUNyRSxVQUFVO0FBQ1YscUVBQW1FO0FBQ25FLDJFQUF5RTtBQVN6RTtJQVFDLDJCQUNTLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsUUFBd0IsRUFDekIsU0FBMEI7UUFKbEMsaUJBZUM7UUFkUSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQUVqQyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFPLEVBQUUsQ0FBQztRQUU3QixzQkFBc0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQSxNQUFNO1lBQ3RELEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBUSxHQUFSO1FBQ0MsYUFBYTtRQUNiLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxzQkFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLEVBQUUsa0JBQWtCLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN4RixDQUFDO0lBRUYsc0JBQUkscUNBQU07UUFEUCxhQUFhO2FBQ2hCO1lBQ08sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDeEIsQ0FBQzs7O09BQUE7SUFFSixvQ0FBUSxHQUFSLFVBQVMsSUFBWTtRQUNwQixJQUFJLE9BQU8sR0FBWTtZQUN0QixNQUFNLEVBQUUsUUFBUTtZQUNoQixVQUFVLEVBQUUsS0FBSztTQUNqQixDQUFBO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBR3hDLENBQUM7SUFFRCxtQ0FBTyxHQUFQO1FBQ0MsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUE5Q1csaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN2QyxDQUFDO3lDQVdnQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3hCLGdDQUFjO1lBQ2Qsa0NBQWU7T0FadEIsaUJBQWlCLENBK0M3QjtJQUFELHdCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7QUEvQ1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XG5pbXBvcnQgeyBSYWREYXRhRm9ybSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktZGF0YWZvcm1cIlxuXG5cbi8vIG1vZGVsb1xuaW1wb3J0IHsgVXN1YXJpbywgUGVyc29uIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5tb2RlbCc7XG4vL3NlcnZpY2lvXG5pbXBvcnQgeyBVc3VhcmlvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8uc2VydmljZSc7XG5pbXBvcnQgeyBDYXJyZXJhc1NlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvY2FycmVyYXMvY2FycmVyYXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3JlZ2lzdHJvJyxcblx0dGVtcGxhdGVVcmw6ICcuL3JlZ2lzdHJvLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcmVnaXN0cm8uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0cm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvL1ZBUklBQkxFUyBHTE9CQUxFU1xuXHRwdWJsaWMgaXNMb2FkaW5nOiBmYWxzZTtcblx0cHVibGljIHVzdWFyaW86IFVzdWFyaW87XG5cdHB1YmxpYyBjYXJyZXJhczogYW55IFtdO1xuXHQvL1JBRERBVEFGT1JNXG5cdHByaXZhdGUgX3BlcnNvbjogUGVyc29uO1xuXG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuXHRcdHB1YmxpYyBcdHVzdWFyaW9TOiBVc3VhcmlvU2VydmljZSxcblx0XHRwdWJsaWMgY2FycmVyYXNTOiBDYXJyZXJhc1NlcnZpY2Vcblx0KSB7IFxuXHRcdC8vSU5JQ0lBUiBDTEFTRSBVU1VBUklPXG5cdFx0dGhpcy51c3VhcmlvID0gbmV3IFVzdWFyaW8oKTtcblxuXHRcdC8vT0JURU5FUiBMQVMgQ0FSUkVSQVNcbiAgICAgICAgdGhpcy5jYXJyZXJhc1Mub2J0ZW5lckNhcnJlcmFzKCkuc3Vic2NyaWJlKCByZXN1bHQ9Pntcblx0XHQgIHRoaXMuY2FycmVyYXMgPSByZXN1bHQ7XG5cdFx0ICBjb25zb2xlLmxvZyhcImNhcnJlcmFzXCIsIHRoaXMuY2FycmVyYXMpO1xuXHRcdCAgXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0XHQvL1JBRERBVEFGT1JNXG5cdFx0dGhpcy5fcGVyc29uID0gbmV3IFBlcnNvbihcIkpvaG5cIiwgMjMsIFwiam9obkBjb21wYW55LmNvbVwiLCBcIk5ldyBZb3JrXCIsIFwiNXRoIEF2ZW51ZVwiLCAxMSk7XG5cdCB9XG4gICAgLy9SQUREQVRBRk9STVxuXHRnZXQgcGVyc29uKCk6IFBlcnNvbiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wZXJzb247XG4gICAgfVxuXHRcblx0cmVnaXN0cm8oZm9ybTogTmdGb3JtKXtcblx0XHRsZXQgdXN1YXJpbzogVXN1YXJpbyA9IHtcblx0XHRcdG5vbWJyZTogJ2NhcmxvcycsXG5cdFx0XHRjb250cmFzZW5hOiAnMTIzJ1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhcImZvcm0gdmFsdWU6XCIsIGZvcm0udmFsdWUpO1xuXHRcdFxuXHRcblx0fVxuXG5cdGlyQXRyYXMoKXtcblx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMuYmFjaygpO1xuXHR9XG59Il19