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
        //VARIABLES GLOBALES
        this.isLoading = false;
        //INICIAR CLASE USUARIO
        this.usuario = new usuario_model_1.Usuario();
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
            //   console.log("carreras", this.carreras);
        });
    }
    RegistroComponent.prototype.ngOnInit = function () {
    };
    RegistroComponent.prototype.registro = function (form) {
        var _this = this;
        console.log("form valid", form.valid);
        if (!form.valid) {
            console.log("complete sus datos");
            return;
        }
        if (form.value.carrera === undefined) {
            form.value.carrera = 0;
        }
        var usuario = {
            matricula: form.value.matricula,
            nombre: form.value.nombre,
            correo: form.value.correo.toLowerCase(),
            contrasena: form.value.contrasena,
            id_carrera: this.carreras[form.value.carrera].id_carrera,
            tipo: 0
        };
        this.isLoading = true;
        this.usuarioS.register(usuario).subscribe(function (datos) {
            console.log("register function:", datos);
            _this.isLoading = false;
            if (datos.mensaje == "El usuario ya existe") {
                var options = {
                    title: "Alerta",
                    message: "Este usuario ya se encuentra registrado",
                    okButtonText: "OK"
                };
                alert(options);
            }
            if (!datos.error) {
                var confirmOptions = {
                    title: "Perfecto",
                    message: "Su registro se realizo con exito",
                    okButtonText: "Ok",
                };
                var alerta = confirm(confirmOptions);
                alerta.then(function (result) {
                    _this.routerExtensions.navigate(["/login"], {
                        clearHistory: true,
                        transition: {
                            name: "fade"
                        }
                    });
                });
            }
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFLL0QsU0FBUztBQUNULG9FQUE2RDtBQUM3RCxVQUFVO0FBQ1YscUVBQW1FO0FBQ25FLDJFQUF5RTtBQVN6RTtJQU1DLDJCQUNTLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsUUFBd0IsRUFDekIsU0FBMEI7UUFKbEMsaUJBc0JDO1FBckJRLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBVGxDLG9CQUFvQjtRQUNiLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFVakMsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7UUFFN0Isc0JBQXNCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUFFLFVBQUEsTUFBTTtZQUN2RCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN2QixLQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNDLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDckIsT0FBTyxFQUFFLFVBQVMsS0FBSztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNoRCxDQUFDO2FBQ0QsQ0FBQTtZQUNGLDRDQUE0QztRQUU1QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBUSxHQUFSO0lBQ0MsQ0FBQztJQUdGLG9DQUFRLEdBQVIsVUFBUyxJQUFZO1FBQXJCLGlC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b250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuaW1wb3J0IHsgTGlzdFBpY2tlciB9IGZyb20gXCJ1aS9saXN0LXBpY2tlclwiO1xuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcblxuLy8gbW9kZWxvXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5tb2RlbCc7XG4vL3NlcnZpY2lvXG5pbXBvcnQgeyBVc3VhcmlvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8uc2VydmljZSc7XG5pbXBvcnQgeyBDYXJyZXJhc1NlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvY2FycmVyYXMvY2FycmVyYXMuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuXHRzZWxlY3RvcjogJ3JlZ2lzdHJvJyxcblx0dGVtcGxhdGVVcmw6ICcuL3JlZ2lzdHJvLmNvbXBvbmVudC5odG1sJyxcblx0c3R5bGVVcmxzOiBbJy4vcmVnaXN0cm8uY29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgUmVnaXN0cm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvL1ZBUklBQkxFUyBHTE9CQUxFU1xuXHRwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB1c3VhcmlvOiBVc3VhcmlvO1xuXHRwdWJsaWMgY2FycmVyYXM6IGFueSBbXTtcblx0cHVibGljIGl0ZW06IGFueTtcblx0Y29uc3RydWN0b3IoXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcblx0XHRwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsXG5cdFx0cHVibGljIFx0dXN1YXJpb1M6IFVzdWFyaW9TZXJ2aWNlLFxuXHRcdHB1YmxpYyBjYXJyZXJhc1M6IENhcnJlcmFzU2VydmljZVxuXHQpIHsgXG5cdFx0Ly9JTklDSUFSIENMQVNFIFVTVUFSSU9cblx0XHR0aGlzLnVzdWFyaW8gPSBuZXcgVXN1YXJpbygpO1xuXG5cdFx0Ly9PQlRFTkVSIExBUyBDQVJSRVJBU1xuICAgICAgICB0aGlzLmNhcnJlcmFzUy5vYnRlbmVyQ2FycmVyYXMoKS5zdWJzY3JpYmUoIHJlc3VsdD0+e1xuXHRcdFx0dGhpcy5jYXJyZXJhcyA9IHJlc3VsdDtcblx0XHRcdHRoaXMuaXRlbSA9IHtcbiAgICAgICAgICAgICAgICBpdGVtczogcmVzdWx0LFxuICAgICAgICAgICAgICAgIGxlbmd0aDogcmVzdWx0Lmxlbmd0aCxcbiAgICAgICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbihpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF0ubm9tYnJlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0Ly8gICBjb25zb2xlLmxvZyhcImNhcnJlcmFzXCIsIHRoaXMuY2FycmVyYXMpO1xuXHRcdCAgXG5cdFx0fSk7XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblx0IH1cbiAgIFxuXHRcblx0cmVnaXN0cm8oZm9ybTogTmdGb3JtKXtcblx0XHRjb25zb2xlLmxvZyhcImZvcm0gdmFsaWRcIiwgZm9ybS52YWxpZCk7XG5cdFx0XG5cdFx0aWYoIWZvcm0udmFsaWQpe1xuXHRcdFx0Y29uc29sZS5sb2coXCJjb21wbGV0ZSBzdXMgZGF0b3NcIik7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKGZvcm0udmFsdWUuY2FycmVyYSA9PT0gdW5kZWZpbmVkKXtcblx0XHRcdGZvcm0udmFsdWUuY2FycmVyYSA9IDA7XG5cdFx0fVxuXG5cdFx0bGV0IHVzdWFyaW86IFVzdWFyaW8gPSB7XG5cdFx0XHRtYXRyaWN1bGE6IGZvcm0udmFsdWUubWF0cmljdWxhLFxuXHRcdFx0bm9tYnJlOiBmb3JtLnZhbHVlLm5vbWJyZSxcblx0XHRcdGNvcnJlbzogZm9ybS52YWx1ZS5jb3JyZW8udG9Mb3dlckNhc2UoKSxcblx0XHRcdGNvbnRyYXNlbmE6IGZvcm0udmFsdWUuY29udHJhc2VuYSxcblx0XHRcdGlkX2NhcnJlcmE6IHRoaXMuY2FycmVyYXNbZm9ybS52YWx1ZS5jYXJyZXJhXS5pZF9jYXJyZXJhLFxuXHRcdFx0dGlwbzogMFxuXHRcdH1cblx0XHR0aGlzLmlzTG9hZGluZyA9IHRydWU7XG5cblx0XHR0aGlzLnVzdWFyaW9TLnJlZ2lzdGVyKHVzdWFyaW8pLnN1YnNjcmliZSggKGRhdG9zKT0+e1xuXHRcdFx0Y29uc29sZS5sb2coXCJyZWdpc3RlciBmdW5jdGlvbjpcIiwgZGF0b3MpO1xuXHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcblx0XHRcdGlmKGRhdG9zLm1lbnNhamUgPT0gXCJFbCB1c3VhcmlvIHlhIGV4aXN0ZVwiKXtcblx0XHRcdFx0bGV0IG9wdGlvbnMgPSB7XG5cdFx0XHRcdFx0dGl0bGU6IFwiQWxlcnRhXCIsXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJFc3RlIHVzdWFyaW8geWEgc2UgZW5jdWVudHJhIHJlZ2lzdHJhZG9cIixcblx0XHRcdFx0XHRva0J1dHRvblRleHQ6IFwiT0tcIlxuXHRcdFx0XHR9O1xuXHRcdFx0XHRcblx0XHRcdFx0YWxlcnQob3B0aW9ucyk7XG5cdFx0XHR9XG5cdFx0XHRpZighZGF0b3MuZXJyb3Ipe1xuXHRcdFx0XHRsZXQgY29uZmlybU9wdGlvbnM6IGFueSA9IHtcblx0XHRcdFx0XHR0aXRsZTogXCJQZXJmZWN0b1wiLFxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiU3UgcmVnaXN0cm8gc2UgcmVhbGl6byBjb24gZXhpdG9cIixcblx0XHRcdFx0XHRva0J1dHRvblRleHQ6IFwiT2tcIixcblx0XHRcdFx0fTtcblx0XHRcdFx0XG5cdFx0XHRcdHZhciBhbGVydGE6YW55ID0gY29uZmlybShjb25maXJtT3B0aW9ucyk7XG5cdFx0XHRcdGFsZXJ0YS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xuXHRcdFx0XHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvbG9naW5cIl0sIHtcblx0XHRcdFx0XHRcdGNsZWFySGlzdG9yeTogdHJ1ZSxcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcblx0XHRcdFx0XHRcdFx0bmFtZTogXCJmYWRlXCJcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0XHRcblx0XHR9KTsgXG5cdFxuXHR9XG5cblx0aXJBdHJhcygpe1xuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XG5cdH1cbn0iXX0=