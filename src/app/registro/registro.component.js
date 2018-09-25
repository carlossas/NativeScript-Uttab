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
        this.nombre = ["uno", "dos", "tres"];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFNL0QsU0FBUztBQUNULG9FQUFxRTtBQUNyRSxVQUFVO0FBQ1YscUVBQW1FO0FBQ25FLDJFQUF5RTtBQVN6RTtJQVNDLDJCQUNTLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsUUFBd0IsRUFDekIsU0FBMEI7UUFKbEMsaUJBZUM7UUFkUSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQUN6QixjQUFTLEdBQVQsU0FBUyxDQUFpQjtRQVIzQixXQUFNLEdBQUcsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFBO1FBVXJDLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksdUJBQU8sRUFBRSxDQUFDO1FBRTdCLHNCQUFzQjtRQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRSxDQUFDLFNBQVMsQ0FBRSxVQUFBLE1BQU07WUFDdEQsS0FBSSxDQUFDLFFBQVEsR0FBRyxNQUFNLENBQUM7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELG9DQUFRLEdBQVI7UUFDQyxhQUFhO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHNCQUFNLENBQUMsTUFBTSxFQUFFLEVBQUUsRUFBRSxrQkFBa0IsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFRixzQkFBSSxxQ0FBTTtRQURQLGFBQWE7YUFDaEI7WUFDTyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN4QixDQUFDOzs7T0FBQTtJQUVKLG9DQUFRLEdBQVIsVUFBUyxJQUFZO1FBQ3BCLElBQUksT0FBTyxHQUFZO1lBQ3RCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFVBQVUsRUFBRSxLQUFLO1NBQ2pCLENBQUE7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFHeEMsQ0FBQztJQUVELG1DQUFPLEdBQVA7UUFDQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQS9DVyxpQkFBaUI7UUFQN0IsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsVUFBVTtZQUNwQixXQUFXLEVBQUUsMkJBQTJCO1lBQ3hDLFNBQVMsRUFBRSxDQUFDLDBCQUEwQixDQUFDO1NBQ3ZDLENBQUM7eUNBWWdCLGVBQU07WUFDSSx5QkFBZ0I7WUFDeEIsZ0NBQWM7WUFDZCxrQ0FBZTtPQWJ0QixpQkFBaUIsQ0FnRDdCO0lBQUQsd0JBQUM7Q0FBQSxBQWhERCxJQWdEQztBQWhEWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcbmltcG9ydCB7IFJhZERhdGFGb3JtIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1kYXRhZm9ybVwiXG5cblxuLy8gbW9kZWxvXG5pbXBvcnQgeyBVc3VhcmlvLCBQZXJzb24gfSBmcm9tICd+L2FwcC9zaGFyZWQvdXN1YXJpby91c3VhcmlvLm1vZGVsJztcbi8vc2VydmljaW9cbmltcG9ydCB7IFVzdWFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5zZXJ2aWNlJztcbmltcG9ydCB7IENhcnJlcmFzU2VydmljZSB9IGZyb20gJ34vYXBwL3NoYXJlZC9jYXJyZXJhcy9jYXJyZXJhcy5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG5cdHNlbGVjdG9yOiAncmVnaXN0cm8nLFxuXHR0ZW1wbGF0ZVVybDogJy4vcmVnaXN0cm8uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi9yZWdpc3Ryby5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBSZWdpc3Ryb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cdC8vVkFSSUFCTEVTIEdMT0JBTEVTXG5cdHB1YmxpYyBpc0xvYWRpbmc6IGZhbHNlO1xuXHRwdWJsaWMgdXN1YXJpbzogVXN1YXJpbztcblx0cHVibGljIGNhcnJlcmFzOiBhbnkgW107XG5cdHB1YmxpYyBub21icmUgPSBbXCJ1bm9cIiwgXCJkb3NcIiwgXCJ0cmVzXCJdXG5cdC8vUkFEREFUQUZPUk1cblx0cHJpdmF0ZSBfcGVyc29uOiBQZXJzb247XG5cblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG5cdFx0cHVibGljIFx0dXN1YXJpb1M6IFVzdWFyaW9TZXJ2aWNlLFxuXHRcdHB1YmxpYyBjYXJyZXJhc1M6IENhcnJlcmFzU2VydmljZVxuXHQpIHsgXG5cdFx0Ly9JTklDSUFSIENMQVNFIFVTVUFSSU9cblx0XHR0aGlzLnVzdWFyaW8gPSBuZXcgVXN1YXJpbygpO1xuXG5cdFx0Ly9PQlRFTkVSIExBUyBDQVJSRVJBU1xuICAgICAgICB0aGlzLmNhcnJlcmFzUy5vYnRlbmVyQ2FycmVyYXMoKS5zdWJzY3JpYmUoIHJlc3VsdD0+e1xuXHRcdCAgdGhpcy5jYXJyZXJhcyA9IHJlc3VsdDtcblx0XHQgIGNvbnNvbGUubG9nKFwiY2FycmVyYXNcIiwgdGhpcy5jYXJyZXJhcyk7XG5cdFx0ICBcblx0XHR9KTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXHRcdC8vUkFEREFUQUZPUk1cblx0XHR0aGlzLl9wZXJzb24gPSBuZXcgUGVyc29uKFwiSm9oblwiLCAyMywgXCJqb2huQGNvbXBhbnkuY29tXCIsIFwiTmV3IFlvcmtcIiwgXCI1dGggQXZlbnVlXCIsIDExKTtcblx0IH1cbiAgICAvL1JBRERBVEFGT1JNXG5cdGdldCBwZXJzb24oKTogUGVyc29uIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BlcnNvbjtcbiAgICB9XG5cdFxuXHRyZWdpc3Rybyhmb3JtOiBOZ0Zvcm0pe1xuXHRcdGxldCB1c3VhcmlvOiBVc3VhcmlvID0ge1xuXHRcdFx0bm9tYnJlOiAnY2FybG9zJyxcblx0XHRcdGNvbnRyYXNlbmE6ICcxMjMnXG5cdFx0fVxuXHRcdGNvbnNvbGUubG9nKFwiZm9ybSB2YWx1ZTpcIiwgZm9ybS52YWx1ZSk7XG5cdFx0XG5cdFxuXHR9XG5cblx0aXJBdHJhcygpe1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cbn0iXX0=