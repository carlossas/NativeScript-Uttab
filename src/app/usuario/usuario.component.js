"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app = require("application");
var router_2 = require("nativescript-angular/router");
//servicio
var usuario_service_1 = require("../shared/usuario/usuario.service");
var UsuarioComponent = /** @class */ (function () {
    //VARIABLES GLOBALES
    function UsuarioComponent(router, routerExtensions, usuarioS) {
        this.router = router;
        this.routerExtensions = routerExtensions;
        this.usuarioS = usuarioS;
    }
    UsuarioComponent.prototype.ngOnInit = function () {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ1c3VhcmlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCwwQ0FBd0Q7QUFDeEQsaUNBQW1DO0FBQ25DLHNEQUErRDtBQUkvRCxVQUFVO0FBQ1YscUVBQW1FO0FBU25FO0lBQ0Msb0JBQW9CO0lBQ3BCLDBCQUNTLE1BQWMsRUFDZCxnQkFBa0MsRUFDbEMsUUFBd0I7UUFGeEIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsYUFBUSxHQUFSLFFBQVEsQ0FBZ0I7SUFFakMsQ0FBQztJQUVELG1DQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUUsb0NBQVMsR0FBVDtRQUNJLHlCQUF5QjtRQUN6QixJQUFNLE9BQU8sR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ2pELE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBaEJRLGdCQUFnQjtRQVA1QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSwwQkFBMEI7WUFDdkMsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7U0FDdEMsQ0FBQzt5Q0FLZ0IsZUFBTTtZQUNJLHlCQUFnQjtZQUN4QixnQ0FBYztPQUxyQixnQkFBZ0IsQ0FrQjVCO0lBQUQsdUJBQUM7Q0FBQSxBQWxCRCxJQWtCQztBQWxCWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOYXZpZ2F0aW9uRW5kLCBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuaW1wb3J0IHsgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xyXG4vLyBtb2RlbG9cclxuaW1wb3J0IHsgVXN1YXJpbyB9IGZyb20gJ34vYXBwL3NoYXJlZC91c3VhcmlvL3VzdWFyaW8ubW9kZWwnO1xyXG4vL3NlcnZpY2lvXHJcbmltcG9ydCB7IFVzdWFyaW9TZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL3VzdWFyaW8vdXN1YXJpby5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcblx0c2VsZWN0b3I6ICd1c3VhcmlvJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vdXN1YXJpby5jb21wb25lbnQuaHRtbCcsXHJcblx0c3R5bGVVcmxzOiBbJy4vdXN1YXJpby5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc3VhcmlvQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHQvL1ZBUklBQkxFUyBHTE9CQUxFU1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcclxuXHRcdHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcclxuXHRcdHB1YmxpYyBcdHVzdWFyaW9TOiBVc3VhcmlvU2VydmljZSxcclxuXHQpIHsgXHRcdFxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0fVxyXG5cclxuICAgIGFicmlyTWVudSgpIHtcclxuICAgICAgICAvL0NPTlNUQU5URSBERSBOQVZFR0FDSU9OXHJcbiAgICAgICAgY29uc3QgbmF2Q3RybCA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xyXG4gICAgICAgIG5hdkN0cmwuc2hvd0RyYXdlcigpO1xyXG4gICAgfVxyXG4gICBcclxufSJdfQ==