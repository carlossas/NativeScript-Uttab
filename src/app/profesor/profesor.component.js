"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("application");
var router_2 = require("nativescript-angular/router");
//servicio
var usuario_service_1 = require("../shared/usuario/usuario.service");
var ProfesorComponent = /** @class */ (function () {
    //VARIABLES GLOBALES
    function ProfesorComponent(router, routerExtensions, usuarioS) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.usuarioS = usuarioS;
    }
    ProfesorComponent.prototype.ngOnInit = function () {
    };
    ProfesorComponent.prototype.abrirMenu = function () {
        //CONSTANTE DE NAVEGACION
        var navCtrl = app.getRootView();
        navCtrl.showDrawer();
    };
    ProfesorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'profesor',
            templateUrl: './profesor.component.html',
            styleUrls: ['./profesor.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router,
            router_2.RouterExtensions,
            usuario_service_1.UsuarioService])
    ], ProfesorComponent);
    return ProfesorComponent;
}());
exports.ProfesorComponent = ProfesorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzb3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicHJvZmVzb3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDBDQUF3RDtBQUN4RCxpQ0FBbUM7QUFDbkMsc0RBQStEO0FBSS9ELFVBQVU7QUFDVixxRUFBbUU7QUFTbkU7SUFDQyxvQkFBb0I7SUFDcEIsMkJBQ1MsTUFBYyxFQUNkLGdCQUFrQyxFQUNsQyxRQUF3QjtRQUZ4QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QscUJBQWdCLEdBQWhCLGdCQUFnQixDQUFrQjtRQUNsQyxhQUFRLEdBQVIsUUFBUSxDQUFnQjtJQUVqQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFRSxxQ0FBUyxHQUFUO1FBQ0kseUJBQXlCO1FBQ3pCLElBQU0sT0FBTyxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDakQsT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFoQlEsaUJBQWlCO1FBUDdCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLFVBQVU7WUFDcEIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQztTQUN2QyxDQUFDO3lDQUtnQixlQUFNO1lBQ0kseUJBQWdCO1lBQ3hCLGdDQUFjO09BTHJCLGlCQUFpQixDQWtCN0I7SUFBRCx3QkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJhcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XHJcbi8vIG1vZGVsb1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSAnfi9hcHAvc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5tb2RlbCc7XHJcbi8vc2VydmljaW9cclxuaW1wb3J0IHsgVXN1YXJpb1NlcnZpY2UgfSBmcm9tICcuLi9zaGFyZWQvdXN1YXJpby91c3VhcmlvLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuXHRzZWxlY3RvcjogJ3Byb2Zlc29yJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vcHJvZmVzb3IuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL3Byb2Zlc29yLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIFByb2Zlc29yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHQvL1ZBUklBQkxFUyBHTE9CQUxFU1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuXHRcdHB1YmxpYyBcdHVzdWFyaW9TOiBVc3VhcmlvU2VydmljZSxcclxuXHQpIHsgXHRcdFxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG5cclxuICAgIGFicmlyTWVudSgpIHtcclxuICAgICAgICAvL0NPTlNUQU5URSBERSBOQVZFR0FDSU9OXHJcbiAgICAgICAgY29uc3QgbmF2Q3RybCA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIG5hdkN0cmwuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG4gICBcclxufSJdfQ==