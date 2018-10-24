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
//LOADING
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var RegistroComponent = /** @class */ (function () {
    function RegistroComponent(router, routerExtensions, usuarioS, carrerasS) {
        var _this = this;
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.usuarioS = usuarioS;
        this.carrerasS = carrerasS;
        this.loader = new nativescript_loading_indicator_1.LoadingIndicator();
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
        this.loader.show();
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
        this.usuarioS.register(usuario).subscribe(function (datos) {
            console.log("register function:", datos);
            _this.loader.hide();
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
        //SE USA PARA TRANSICIONES
        this.routerExtensions.navigate([''], {
            clearHistory: true,
            transition: {
                name: "slideRight"
            }
        });
        // this.routerExtensions.back();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0cm8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmVnaXN0cm8uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxzREFBK0Q7QUFLL0QsU0FBUztBQUNULG9FQUE2RDtBQUM3RCxVQUFVO0FBQ1YscUVBQW1FO0FBQ25FLDJFQUF5RTtBQUN6RSxTQUFTO0FBQ1QsaUZBQWdFO0FBV2hFO0lBUUMsMkJBQ1MsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxRQUF3QixFQUN6QixTQUEwQjtRQUpsQyxpQkF1QkM7UUF0QlEsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7UUFDekIsY0FBUyxHQUFULFNBQVMsQ0FBaUI7UUFOM0IsV0FBTSxHQUFHLElBQUksaURBQWdCLEVBQUUsQ0FBQztRQVF0Qyx1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLHVCQUFPLEVBQUUsQ0FBQztRQUU3QixzQkFBc0I7UUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsQ0FBQyxTQUFTLENBQUUsVUFBQSxNQUFNO1lBQ3ZELEtBQUksQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJLEdBQUc7Z0JBQ0MsS0FBSyxFQUFFLE1BQU07Z0JBQ2IsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO2dCQUNyQixPQUFPLEVBQUUsVUFBUyxLQUFLO29CQUNuQixNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUM7Z0JBQ2hELENBQUM7YUFDRCxDQUFBO1lBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBRXpDLENBQUMsQ0FBQyxDQUFDO0lBRUosQ0FBQztJQUVELG9DQUFRLEdBQVI7SUFDQyxDQUFDO0lBR0Ysb0NBQVEsR0FBUixVQUFTLElBQVk7UUFBckIsaUJBNERDO1FBM0RBLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV0QyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1lBQ2xDLE1BQU0sQ0FBQztRQUNSLENBQUM7UUFFRCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBR25CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQyxDQUFBLENBQUM7WUFDckMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3hCLENBQUM7UUFFRCxJQUFJLE9BQU8sR0FBWTtZQUN0QixTQUFTLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1lBQy9CLE1BQU0sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU07WUFDekIsTUFBTSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRTtZQUN2QyxVQUFVLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxVQUFVO1lBQ2pDLFVBQVUsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsVUFBVTtZQUN4RCxJQUFJLEVBQUUsQ0FBQztTQUNQLENBQUE7UUFHRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUUsVUFBQyxLQUFLO1lBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFFekMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUVuQixFQUFFLENBQUEsQ0FBQyxLQUFLLENBQUMsT0FBTyxJQUFJLHNCQUFzQixDQUFDLENBQUEsQ0FBQztnQkFDM0MsSUFBSSxPQUFPLEdBQUc7b0JBQ2IsS0FBSyxFQUFFLFFBQVE7b0JBQ2YsT0FBTyxFQUFFLHlDQUF5QztvQkFDbEQsWUFBWSxFQUFFLElBQUk7aUJBQ2xCLENBQUM7Z0JBRUYsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hCLENBQUM7WUFDRCxFQUFFLENBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQSxDQUFDO2dCQUVoQixJQUFJLGNBQWMsR0FBUTtvQkFDekIsS0FBSyxFQUFFLFVBQVU7b0JBQ2pCLE9BQU8sRUFBRSxrQ0FBa0M7b0JBQzNDLFlBQVksRUFBRSxJQUFJO2lCQUNsQixDQUFDO2dCQUVGLElBQUksTUFBTSxHQUFPLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDekMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQVc7b0JBQ3ZCLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDMUMsWUFBWSxFQUFFLElBQUk7d0JBQ2xCLFVBQVUsRUFBRTs0QkFDWCxJQUFJLEVBQUUsTUFBTTt5QkFDWjtxQkFDRCxDQUFDLENBQUM7Z0JBQ0osQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDO1FBRUYsQ0FBQyxDQUFDLENBQUM7SUFFSixDQUFDO0lBRUQsbUNBQU8sR0FBUDtRQUNDLDBCQUEwQjtRQUMxQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDcEMsWUFBWSxFQUFFLElBQUk7WUFDbEIsVUFBVSxFQUFFO2dCQUNYLElBQUksRUFBRSxZQUFZO2FBQ2xCO1NBQ0QsQ0FBQyxDQUFDO1FBQ0gsZ0NBQWdDO0lBQ2pDLENBQUM7SUE1R1csaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN2QyxDQUFDO3lDQVdnQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3hCLGdDQUFjO1lBQ2Qsa0NBQWU7T0FadEIsaUJBQWlCLENBNkc3QjtJQUFELHdCQUFDO0NBQUEsQUE3R0QsSUE2R0M7QUE3R1ksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidWkvbGlzdC1waWNrZXJcIjtcclxuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbi8vIG1vZGVsb1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5tb2RlbCc7XHJcbi8vc2VydmljaW9cclxuaW1wb3J0IHsgVXN1YXJpb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdXN1YXJpby91c3VhcmlvLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYXJyZXJhc1NlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvY2FycmVyYXMvY2FycmVyYXMuc2VydmljZSc7XHJcbi8vTE9BRElOR1xyXG5pbXBvcnQge0xvYWRpbmdJbmRpY2F0b3J9IGZyb20gXCJuYXRpdmVzY3JpcHQtbG9hZGluZy1pbmRpY2F0b3JcIjtcclxuaW1wb3J0IHsgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBhbmltYXRpb25GcmFtZSB9IGZyb20gJy4uLy4uLy4uL3BsYXRmb3Jtcy9hbmRyb2lkL2FwcC9zcmMvbWFpbi9hc3NldHMvYXBwL3Ruc19tb2R1bGVzL3J4anMvc3JjL2ludGVybmFsL3NjaGVkdWxlci9hbmltYXRpb25GcmFtZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAncmVnaXN0cm8nLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Ryby5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vcmVnaXN0cm8uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUmVnaXN0cm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cdFxyXG5cdC8vVkFSSUFCTEVTIEdMT0JBTEVTXHJcblx0cHVibGljIHVzdWFyaW86IFVzdWFyaW87XHJcblx0cHVibGljIGNhcnJlcmFzOiBhbnkgW107XHJcblx0cHVibGljIGl0ZW06IGFueTtcclxuXHRwdWJsaWMgbG9hZGVyID0gbmV3IExvYWRpbmdJbmRpY2F0b3IoKTtcclxuXHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG5cdFx0cHVibGljIFx0dXN1YXJpb1M6IFVzdWFyaW9TZXJ2aWNlLFxyXG5cdFx0cHVibGljIGNhcnJlcmFzUzogQ2FycmVyYXNTZXJ2aWNlXHJcblx0KSB7IFxyXG5cdFx0Ly9JTklDSUFSIENMQVNFIFVTVUFSSU9cclxuXHRcdHRoaXMudXN1YXJpbyA9IG5ldyBVc3VhcmlvKCk7XHJcblxyXG5cdFx0Ly9PQlRFTkVSIExBUyBDQVJSRVJBU1xyXG4gICAgICAgIHRoaXMuY2FycmVyYXNTLm9idGVuZXJDYXJyZXJhcygpLnN1YnNjcmliZSggcmVzdWx0PT57XHJcblx0XHRcdHRoaXMuY2FycmVyYXMgPSByZXN1bHQ7XHJcblx0XHRcdHRoaXMuaXRlbSA9IHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zOiByZXN1bHQsXHJcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHJlc3VsdC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICBnZXRJdGVtOiBmdW5jdGlvbihpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XS5ub21icmU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHQgIGNvbnNvbGUubG9nKFwiY2FycmVyYXNcIiwgdGhpcy5jYXJyZXJhcyk7XHJcblx0XHQgIFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdCB9XHJcbiAgIFxyXG5cdFxyXG5cdHJlZ2lzdHJvKGZvcm06IE5nRm9ybSl7XHJcblx0XHRjb25zb2xlLmxvZyhcImZvcm0gdmFsaWRcIiwgZm9ybS52YWxpZCk7XHJcblx0XHRcclxuXHRcdGlmKCFmb3JtLnZhbGlkKXtcclxuXHRcdFx0Y29uc29sZS5sb2coXCJjb21wbGV0ZSBzdXMgZGF0b3NcIik7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHJcblx0XHR0aGlzLmxvYWRlci5zaG93KCk7XHJcblxyXG5cclxuXHRcdGlmIChmb3JtLnZhbHVlLmNhcnJlcmEgPT09IHVuZGVmaW5lZCl7XHJcblx0XHRcdGZvcm0udmFsdWUuY2FycmVyYSA9IDA7XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHVzdWFyaW86IFVzdWFyaW8gPSB7XHJcblx0XHRcdG1hdHJpY3VsYTogZm9ybS52YWx1ZS5tYXRyaWN1bGEsXHJcblx0XHRcdG5vbWJyZTogZm9ybS52YWx1ZS5ub21icmUsXHJcblx0XHRcdGNvcnJlbzogZm9ybS52YWx1ZS5jb3JyZW8udG9Mb3dlckNhc2UoKSxcclxuXHRcdFx0Y29udHJhc2VuYTogZm9ybS52YWx1ZS5jb250cmFzZW5hLFxyXG5cdFx0XHRpZF9jYXJyZXJhOiB0aGlzLmNhcnJlcmFzW2Zvcm0udmFsdWUuY2FycmVyYV0uaWRfY2FycmVyYSxcclxuXHRcdFx0dGlwbzogMFxyXG5cdFx0fVxyXG5cclxuXHJcblx0XHR0aGlzLnVzdWFyaW9TLnJlZ2lzdGVyKHVzdWFyaW8pLnN1YnNjcmliZSggKGRhdG9zKT0+e1xyXG5cdFx0XHRjb25zb2xlLmxvZyhcInJlZ2lzdGVyIGZ1bmN0aW9uOlwiLCBkYXRvcyk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGlzLmxvYWRlci5oaWRlKCk7XHJcblxyXG5cdFx0XHRpZihkYXRvcy5tZW5zYWplID09IFwiRWwgdXN1YXJpbyB5YSBleGlzdGVcIil7XHJcblx0XHRcdFx0bGV0IG9wdGlvbnMgPSB7XHJcblx0XHRcdFx0XHR0aXRsZTogXCJBbGVydGFcIixcclxuXHRcdFx0XHRcdG1lc3NhZ2U6IFwiRXN0ZSB1c3VhcmlvIHlhIHNlIGVuY3VlbnRyYSByZWdpc3RyYWRvXCIsXHJcblx0XHRcdFx0XHRva0J1dHRvblRleHQ6IFwiT0tcIlxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YWxlcnQob3B0aW9ucyk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoIWRhdG9zLmVycm9yKXtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgY29uZmlybU9wdGlvbnM6IGFueSA9IHtcclxuXHRcdFx0XHRcdHRpdGxlOiBcIlBlcmZlY3RvXCIsXHJcblx0XHRcdFx0XHRtZXNzYWdlOiBcIlN1IHJlZ2lzdHJvIHNlIHJlYWxpem8gY29uIGV4aXRvXCIsXHJcblx0XHRcdFx0XHRva0J1dHRvblRleHQ6IFwiT2tcIixcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHZhciBhbGVydGE6YW55ID0gY29uZmlybShjb25maXJtT3B0aW9ucyk7XHJcblx0XHRcdFx0YWxlcnRhLnRoZW4oKHJlc3VsdDogYW55KSA9PiB7XHJcblx0XHRcdFx0XHR0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2xvZ2luXCJdLCB7XHJcblx0XHRcdFx0XHRcdGNsZWFySGlzdG9yeTogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdFx0XHRcdG5hbWU6IFwiZmFkZVwiXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7IFxyXG5cdFxyXG5cdH1cclxuXHJcblx0aXJBdHJhcygpe1xyXG5cdFx0Ly9TRSBVU0EgUEFSQSBUUkFOU0lDSU9ORVNcclxuXHRcdHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbJyddLCB7XHJcblx0XHRcdGNsZWFySGlzdG9yeTogdHJ1ZSxcclxuXHRcdFx0dHJhbnNpdGlvbjoge1xyXG5cdFx0XHRcdG5hbWU6IFwic2xpZGVSaWdodFwiXHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0Ly8gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLmJhY2soKTtcclxuXHR9XHJcbn0iXX0=