"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var operators_1 = require("rxjs/operators");
//URL API
var url_api_1 = require("../url_api");
var UsuarioService = /** @class */ (function () {
    function UsuarioService(http) {
        this.http = http;
    }
    UsuarioService.prototype.register = function (usuario) {
        var url = url_api_1.URL_API + '/usuario/registrar/';
        return this.http.post(url, usuario).pipe(operators_1.map(function (res) {
            console.log("register function:", res);
        }));
    };
    UsuarioService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXN1YXJpby5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXN1YXJpby5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLHNDQUF3RDtBQUV4RCw0Q0FBc0Q7QUFJdEQsU0FBUztBQUNULHNDQUFxQztBQUdyQztJQUNJLHdCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUFJLENBQUM7SUFJbkMsaUNBQVEsR0FBUixVQUFTLE9BQWdCO1FBQ3JCLElBQUksR0FBRyxHQUFHLGlCQUFPLEdBQUcscUJBQXFCLENBQUM7UUFDdEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQ3RDLGVBQUcsQ0FBQyxVQUFDLEdBQVE7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFDYixDQUFDO0lBWFEsY0FBYztRQUQxQixpQkFBVSxFQUFFO3lDQUVpQixXQUFJO09BRHJCLGNBQWMsQ0FhMUI7SUFBRCxxQkFBQztDQUFBLEFBYkQsSUFhQztBQWJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJyeGpzXCI7XHJcbmltcG9ydCB7IGNhdGNoRXJyb3IsIG1hcCwgdGFwIH0gZnJvbSBcInJ4anMvb3BlcmF0b3JzXCI7XHJcblxyXG4vL01PREVMT1xyXG5pbXBvcnQgeyBVc3VhcmlvIH0gZnJvbSBcIi4vdXN1YXJpby5tb2RlbFwiO1xyXG4vL1VSTCBBUElcclxuaW1wb3J0IHsgVVJMX0FQSSB9IGZyb20gXCIuLi91cmxfYXBpXCI7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBVc3VhcmlvU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHApIHsgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIHJlZ2lzdGVyKHVzdWFyaW86IFVzdWFyaW8pIHtcclxuICAgICAgICBsZXQgdXJsID0gVVJMX0FQSSArICcvdXN1YXJpby9yZWdpc3RyYXIvJztcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KHVybCwgdXN1YXJpbykucGlwZShcclxuICAgICAgICAgICAgICBtYXAoKHJlczogYW55KSA9PntcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVnaXN0ZXIgZnVuY3Rpb246XCIsIHJlcyk7XHJcbiAgICAgICAgICAgICAgfSkpXHJcbiAgICB9XHJcblxyXG59Il19