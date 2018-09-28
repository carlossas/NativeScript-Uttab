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
            console.log("carreras", _this.carreras);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFLL0QsU0FBUztBQUNULG9FQUE2RDtBQUM3RCxVQUFVO0FBQ1YscUVBQW1FO0FBQ25FLDJFQUF5RTtBQVN6RTtJQU1DLDJCQUNTLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsUUFBd0IsRUFDekIsU0FBMEI7UUFKbEMsaUJBc0JDO1FBckJRLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLGFBQVEsR0FBUixRQUFRLENBQWdCO1FBQ3pCLGNBQVMsR0FBVCxTQUFTLENBQWlCO1FBVGxDLG9CQUFvQjtRQUNiLGNBQVMsR0FBWSxLQUFLLENBQUM7UUFVakMsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSx1QkFBTyxFQUFFLENBQUM7UUFFN0Isc0JBQXNCO1FBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFLENBQUMsU0FBUyxDQUFFLFVBQUEsTUFBTTtZQUN2RCxLQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQztZQUN2QixLQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNDLEtBQUssRUFBRSxNQUFNO2dCQUNiLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTTtnQkFDckIsT0FBTyxFQUFFLFVBQVMsS0FBSztvQkFDbkIsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDO2dCQUNoRCxDQUFDO2FBQ0QsQ0FBQTtZQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUV6QyxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFRCxvQ0FBUSxH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RCx3QkFBQztDQUFBLEFBN0ZELElBNkZDO0FBN0ZZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBMaXN0UGlja2VyIH0gZnJvbSBcInVpL2xpc3QtcGlja2VyXCI7XHJcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XHJcblxyXG4vLyBtb2RlbG9cclxuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gJ34vYXBwL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8ubW9kZWwnO1xyXG4vL3NlcnZpY2lvXHJcbmltcG9ydCB7IFVzdWFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2FycmVyYXNTZXJ2aWNlIH0gZnJvbSAnfi9hcHAvc2hhcmVkL2NhcnJlcmFzL2NhcnJlcmFzLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3JlZ2lzdHJvJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vcmVnaXN0cm8uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3JlZ2lzdHJvLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFJlZ2lzdHJvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHQvL1ZBUklBQkxFUyBHTE9CQUxFU1xyXG5cdHB1YmxpYyBpc0xvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHRwdWJsaWMgdXN1YXJpbzogVXN1YXJpbztcclxuXHRwdWJsaWMgY2FycmVyYXM6IGFueSBbXTtcclxuXHRwdWJsaWMgaXRlbTogYW55O1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuXHRcdHB1YmxpYyBcdHVzdWFyaW9TOiBVc3VhcmlvU2VydmljZSxcclxuXHRcdHB1YmxpYyBjYXJyZXJhc1M6IENhcnJlcmFzU2VydmljZVxyXG5cdCkgeyBcclxuXHRcdC8vSU5JQ0lBUiBDTEFTRSBVU1VBUklPXHJcblx0XHR0aGlzLnVzdWFyaW8gPSBuZXcgVXN1YXJpbygpO1xyXG5cclxuXHRcdC8vT0JURU5FUiBMQVMgQ0FSUkVSQVNcclxuICAgICAgICB0aGlzLmNhcnJlcmFzUy5vYnRlbmVyQ2FycmVyYXMoKS5zdWJzY3JpYmUoIHJlc3VsdD0+e1xyXG5cdFx0XHR0aGlzLmNhcnJlcmFzID0gcmVzdWx0O1xyXG5cdFx0XHR0aGlzLml0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtczogcmVzdWx0LFxyXG4gICAgICAgICAgICAgICAgbGVuZ3RoOiByZXN1bHQubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgZ2V0SXRlbTogZnVuY3Rpb24oaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF0ubm9tYnJlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0ICBjb25zb2xlLmxvZyhcImNhcnJlcmFzXCIsIHRoaXMuY2FycmVyYXMpO1xyXG5cdFx0ICBcclxuXHRcdH0pO1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0IH1cclxuICAgXHJcblx0XHJcblx0cmVnaXN0cm8oZm9ybTogTmdGb3JtKXtcclxuXHRcdGNvbnNvbGUubG9nKFwiZm9ybSB2YWxpZFwiLCBmb3JtLnZhbGlkKTtcclxuXHRcdFxyXG5cdFx0aWYoIWZvcm0udmFsaWQpe1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcImNvbXBsZXRlIHN1cyBkYXRvc1wiKTtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmIChmb3JtLnZhbHVlLmNhcnJlcmEgPT09IHVuZGVmaW5lZCl7XHJcblx0XHRcdGZvcm0udmFsdWUuY2FycmVyYSA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHVzdWFyaW86IFVzdWFyaW8gPSB7XHJcblx0XHRcdG1hdHJpY3VsYTogZm9ybS52YWx1ZS5tYXRyaWN1bGEsXHJcblx0XHRcdG5vbWJyZTogZm9ybS52YWx1ZS5ub21icmUsXHJcblx0XHRcdGNvcnJlbzogZm9ybS52YWx1ZS5jb3JyZW8udG9Mb3dlckNhc2UoKSxcclxuXHRcdFx0Y29udHJhc2VuYTogZm9ybS52YWx1ZS5jb250cmFzZW5hLFxyXG5cdFx0XHRpZF9jYXJyZXJhOiB0aGlzLmNhcnJlcmFzW2Zvcm0udmFsdWUuY2FycmVyYV0uaWRfY2FycmVyYSxcclxuXHRcdFx0dGlwbzogMFxyXG5cdFx0fVxyXG5cdFx0dGhpcy5pc0xvYWRpbmcgPSB0cnVlO1xyXG5cclxuXHRcdHRoaXMudXN1YXJpb1MucmVnaXN0ZXIodXN1YXJpbykuc3Vic2NyaWJlKCAoZGF0b3MpPT57XHJcblx0XHRcdGNvbnNvbGUubG9nKFwicmVnaXN0ZXIgZnVuY3Rpb246XCIsIGRhdG9zKTtcclxuXHRcdFx0dGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0aWYoZGF0b3MubWVuc2FqZSA9PSBcIkVsIHVzdWFyaW8geWEgZXhpc3RlXCIpe1xyXG5cdFx0XHRcdGxldCBvcHRpb25zID0ge1xyXG5cdFx0XHRcdFx0dGl0bGU6IFwiQWxlcnRhXCIsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBcIkVzdGUgdXN1YXJpbyB5YSBzZSBlbmN1ZW50cmEgcmVnaXN0cmFkb1wiLFxyXG5cdFx0XHRcdFx0b2tCdXR0b25UZXh0OiBcIk9LXCJcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFsZXJ0KG9wdGlvbnMpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGlmKCFkYXRvcy5lcnJvcil7XHJcblx0XHRcdFx0bGV0IGNvbmZpcm1PcHRpb25zOiBhbnkgPSB7XHJcblx0XHRcdFx0XHR0aXRsZTogXCJQZXJmZWN0b1wiLFxyXG5cdFx0XHRcdFx0bWVzc2FnZTogXCJTdSByZWdpc3RybyBzZSByZWFsaXpvIGNvbiBleGl0b1wiLFxyXG5cdFx0XHRcdFx0b2tCdXR0b25UZXh0OiBcIk9rXCIsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YXIgYWxlcnRhOmFueSA9IGNvbmZpcm0oY29uZmlybU9wdGlvbnMpO1xyXG5cdFx0XHRcdGFsZXJ0YS50aGVuKChyZXN1bHQ6IGFueSkgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9sb2dpblwiXSwge1xyXG5cdFx0XHRcdFx0XHRjbGVhckhpc3Rvcnk6IHRydWUsXHJcblx0XHRcdFx0XHRcdHRyYW5zaXRpb246IHtcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBcImZhZGVcIlxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0pOyBcclxuXHRcclxuXHR9XHJcblxyXG5cdGlyQXRyYXMoKXtcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5iYWNrKCk7XHJcblx0fVxyXG59Il19