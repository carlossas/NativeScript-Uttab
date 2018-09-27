"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("application");
var router_2 = require("nativescript-angular/router");
//servicio
var usuario_service_1 = require("../shared/usuario/usuario.service");
var UsuarioComponent = /** @class */ (function () {
    function UsuarioComponent(router, routerExtensions, usuarioS) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.usuarioS = usuarioS;
        //VARIABLES GLOBALES
        this.isLoading = false;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
    };
    UsuarioComponent.prototype.navegar = function (ruta) {
        this.routerExtensions.navigate([ruta], {
            transition: {
                name: "fade"
            }
        });
    };
    UsuarioComponent.prototype.abrirMenu = function () {
        //CONSTANTE DE NAVEGACION
        var navCtrl = app.getRootView();
        navCtrl.showDrawer();
    };
    UsuarioComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'usuario',
            templateUrl: './usuario.component.html',
            styleUrls: ['./usuario.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            usuario_service_1.UsuarioService])
    ], UsuarioComponent);
    return UsuarioComponent;
}());
exports.UsuarioComponent = UsuarioComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBd0Q7QUFDeEQsaUNBQW1DO0FBQ25DLHNEQUErRDtBQVEvRCxVQUFVO0FBQ1YscUVBQW1FO0FBU25FO0lBSUMsMEJBQ1MsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxRQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQU5qQyxvQkFBb0I7UUFDYixjQUFTLEdBQVksS0FBSyxDQUFDO0lBUWxDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSx5QkFBeUI7UUFDekIsSUFBTSxPQUFPLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQTNCUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3RDLENBQUM7eUNBT2dCLGVBQU07WUFDSSx5QkFBZ0I7WUFDeEIsZ0NBQWM7T0FQckIsZ0JBQWdCLENBNkI1QjtJQUFELHVCQUFDO0NBQUEsQUE3QkQsSUE2QkM7QUE3QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5cbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IGFjdGlvbiB9IGZyb20gXCJ1aS9kaWFsb2dzXCI7XG5cbi8vIG1vZGVsb1xuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gJ34vYXBwL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8ubW9kZWwnO1xuLy9zZXJ2aWNpb1xuaW1wb3J0IHsgVXN1YXJpb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdXN1YXJpby91c3VhcmlvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcblx0c2VsZWN0b3I6ICd1c3VhcmlvJyxcblx0dGVtcGxhdGVVcmw6ICcuL3VzdWFyaW8uY29tcG9uZW50Lmh0bWwnLFxuXHRzdHlsZVVybHM6IFsnLi91c3VhcmlvLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIFVzdWFyaW9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXHQvL1ZBUklBQkxFUyBHTE9CQUxFU1xuXHRwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG5cdHB1YmxpYyB1c3VhcmlvOiBVc3VhcmlvO1xuXHRjb25zdHJ1Y3Rvcihcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcblx0XHRwdWJsaWMgXHR1c3VhcmlvUzogVXN1YXJpb1NlcnZpY2UsXG5cdCkgeyBcblxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cdH1cblxuXHRuYXZlZ2FyKHJ1dGE6IHN0cmluZyl7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbcnV0YV0sIHtcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcImZhZGVcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhYnJpck1lbnUoKSB7XG4gICAgICAgIC8vQ09OU1RBTlRFIERFIE5BVkVHQUNJT05cbiAgICAgICAgY29uc3QgbmF2Q3RybCA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBuYXZDdHJsLnNob3dEcmF3ZXIoKTtcbiAgICB9XG4gICBcbn0iXX0=