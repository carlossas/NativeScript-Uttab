"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var profesor_component_1 = require("./profesor.component");
var crearexamen_component_1 = require("./crearexamen/crearexamen.component");
var routes = [
    {
        path: "",
        component: profesor_component_1.ProfesorComponent,
        children: [
            { path: "", component: crearexamen_component_1.CrearexamenComponent },
            { path: "crearexamen", component: crearexamen_component_1.CrearexamenComponent },
        ]
    },
];
var ProfesorRoutingModule = /** @class */ (function () {
    function ProfesorRoutingModule() {
    }
    ProfesorRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ProfesorRoutingModule);
    return ProfesorRoutingModule;
}());
exports.ProfesorRoutingModule = ProfesorRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzb3Itcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9mZXNvci1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFDdkUsMkRBQXlEO0FBQ3pELDZFQUEyRTtBQUczRSxJQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNDQUFpQjtRQUM1QixRQUFRLEVBQUU7WUFDTixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7U0FDM0Q7S0FDSjtDQUNKLENBQUM7QUFNRjtJQUFBO0lBQXFDLENBQUM7SUFBekIscUJBQXFCO1FBSmpDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1cscUJBQXFCLENBQUk7SUFBRCw0QkFBQztDQUFBLEFBQXRDLElBQXNDO0FBQXpCLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xyXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7IFByb2Zlc29yQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmVzb3IuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7IENyZWFyZXhhbWVuQ29tcG9uZW50IH0gZnJvbSBcIi4vY3JlYXJleGFtZW4vY3JlYXJleGFtZW4uY29tcG9uZW50XCI7XHJcblxyXG5cclxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXHJcbiAgICB7IFxyXG4gICAgICAgIHBhdGg6IFwiXCIsIFxyXG4gICAgICAgIGNvbXBvbmVudDogUHJvZmVzb3JDb21wb25lbnQsXHJcbiAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IENyZWFyZXhhbWVuQ29tcG9uZW50IH0sXHJcbiAgICAgICAgICAgIHsgcGF0aDogXCJjcmVhcmV4YW1lblwiLCBjb21wb25lbnQ6IENyZWFyZXhhbWVuQ29tcG9uZW50IH0sXHJcbiAgICAgICAgXVxyXG4gICAgfSxcclxuXTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgICBpbXBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFByb2Zlc29yUm91dGluZ01vZHVsZSB7IH1cclxuIl19