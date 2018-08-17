System.register(['@angular/core', './service/authentication.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, authentication_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(authenticationService) {
                    this.authenticationService = authenticationService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.authenticationService.getState().subscribe(function (state) { return _this.isLogin = state; });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n   <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"http://www.saturnringstation.com/portfolio\">\n            <img alt=\"Brand\" width=\"32\" height=\"32\" src=\"http://www.saturnringstation.com/portfolio/images/favicon.png\">\n          </a>\n        </div>\n        <ul class=\"nav navbar-nav\">\n          <li *ngIf=\"isLogin\" role=\"presentation\"><a routerLink=\"/employees\">Employees List</a></li>\n          <li *ngIf=\"isLogin\" role=\"presentation\"><a routerLink=\"/departments\">Departments List</a></li>\n          <li role=\"presentation\"><a routerLink=\"/about\">About</a></li>\n          <li *ngIf=\"!isLogin\" role=\"presentation\"><a routerLink=\"/login\">Login</a></li>\n          <li *ngIf=\"isLogin\" role=\"presentation\"><a routerLink=\"/login\">Logout</a></li>\n        </ul>\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li role=\"presentation\"><a href=\"http://www.saturnringstation.com/portfolio\"> Portfolio</a></li>\n          <li role=\"presentation\"><a href=\"http://www.saturnringstation.com/\"> Blog</a></li>\n        </ul>\n      </div>\n   </nav>\n   <router-outlet></router-outlet>\n  "
                    }), 
                    __metadata('design:paramtypes', [authentication_service_1.AuthenticationService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map