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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZmVzb3Itcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwcm9mZXNvci1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFDdkUsMkRBQXlEO0FBQ3pELDZFQUEyRTtBQUczRSxJQUFNLE1BQU0sR0FBVztJQUNuQjtRQUNJLElBQUksRUFBRSxFQUFFO1FBQ1IsU0FBUyxFQUFFLHNDQUFpQjtRQUM1QixRQUFRLEVBQUU7WUFDTixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLDRDQUFvQixFQUFFO1lBQzdDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxTQUFTLEVBQUUsNENBQW9CLEVBQUU7U0FDM0Q7S0FDSjtDQUNKLENBQUM7QUFNRjtJQUFBO0lBQXFDLENBQUM7SUFBekIscUJBQXFCO1FBSmpDLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1cscUJBQXFCLENBQUk7SUFBRCw0QkFBQztDQUFBLEFBQXRDLElBQXNDO0FBQXpCLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFByb2Zlc29yQ29tcG9uZW50IH0gZnJvbSBcIi4vcHJvZmVzb3IuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDcmVhcmV4YW1lbkNvbXBvbmVudCB9IGZyb20gXCIuL2NyZWFyZXhhbWVuL2NyZWFyZXhhbWVuLmNvbXBvbmVudFwiO1xuXG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgXG4gICAgICAgIHBhdGg6IFwiXCIsIFxuICAgICAgICBjb21wb25lbnQ6IFByb2Zlc29yQ29tcG9uZW50LFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgeyBwYXRoOiBcIlwiLCBjb21wb25lbnQ6IENyZWFyZXhhbWVuQ29tcG9uZW50IH0sXG4gICAgICAgICAgICB7IHBhdGg6IFwiY3JlYXJleGFtZW5cIiwgY29tcG9uZW50OiBDcmVhcmV4YW1lbkNvbXBvbmVudCB9LFxuICAgICAgICBdXG4gICAgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBQcm9mZXNvclJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=