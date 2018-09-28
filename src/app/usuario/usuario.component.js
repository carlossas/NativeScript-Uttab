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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBd0Q7QUFDeEQsaUNBQW1DO0FBQ25DLHNEQUErRDtBQU8vRCxVQUFVO0FBQ1YscUVBQW1FO0FBU25FO0lBSUMsMEJBQ1MsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxRQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtRQU5qQyxvQkFBb0I7UUFDYixjQUFTLEdBQVksS0FBSyxDQUFDO0lBT2xDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELGtDQUFPLEdBQVAsVUFBUSxJQUFZO1FBQ2IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ25DLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsTUFBTTthQUNmO1NBQ0osQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9DQUFTLEdBQVQ7UUFDSSx5QkFBeUI7UUFDekIsSUFBTSxPQUFPLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNqRCxPQUFPLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQTFCUSxnQkFBZ0I7UUFQNUIsZ0JBQVMsQ0FBQztZQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsU0FBUztZQUNuQixXQUFXLEVBQUUsMEJBQTBCO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1NBQ3RDLENBQUM7eUNBT2dCLGVBQU07WUFDSSx5QkFBZ0I7WUFDeEIsZ0NBQWM7T0FQckIsZ0JBQWdCLENBNEI1QjtJQUFELHVCQUFDO0NBQUEsQUE1QkQsSUE0QkM7QUE1QlksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF2aWdhdGlvbkVuZCwgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcImFwcGxpY2F0aW9uXCI7XHJcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcclxuXHJcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgYWN0aW9uIH0gZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuLy8gbW9kZWxvXHJcbmltcG9ydCB7IFVzdWFyaW8gfSBmcm9tICd+L2FwcC9zaGFyZWQvdXN1YXJpby91c3VhcmlvLm1vZGVsJztcclxuLy9zZXJ2aWNpb1xyXG5pbXBvcnQgeyBVc3VhcmlvU2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8uc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxyXG5cdHNlbGVjdG9yOiAndXN1YXJpbycsXHJcblx0dGVtcGxhdGVVcmw6ICcuL3VzdWFyaW8uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3VzdWFyaW8uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVXN1YXJpb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0Ly9WQVJJQUJMRVMgR0xPQkFMRVNcclxuXHRwdWJsaWMgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblx0cHVibGljIHVzdWFyaW86IFVzdWFyaW87XHJcblx0Y29uc3RydWN0b3IoXHJcblx0XHRwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxyXG5cdFx0cHVibGljIFx0dXN1YXJpb1M6IFVzdWFyaW9TZXJ2aWNlLFxyXG5cdCkgeyBcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdH1cclxuXHJcblx0bmF2ZWdhcihydXRhOiBzdHJpbmcpe1xyXG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbcnV0YV0sIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFicmlyTWVudSgpIHtcclxuICAgICAgICAvL0NPTlNUQU5URSBERSBOQVZFR0FDSU9OXHJcbiAgICAgICAgY29uc3QgbmF2Q3RybCA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIG5hdkN0cmwuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG4gICBcclxufSJdfQ==