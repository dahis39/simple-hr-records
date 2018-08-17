System.register(['@angular/core', '../service/employee.service', '../service/authentication.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, employee_service_1, authentication_service_1, router_1;
    var LoginComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            LoginComponent = (function () {
                function LoginComponent(employeeService, authenticationService, router) {
                    this.employeeService = employeeService;
                    this.authenticationService = authenticationService;
                    this.router = router;
                    this.username = '';
                    this.password = '';
                    this.hasError = false;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.authenticationService.logout();
                };
                LoginComponent.prototype.onLogin = function () {
                    var _this = this;
                    // activate AuthGuard's AuthenticationService state subscribetion. Subscribes first, then next will cascade.
                    this.router.navigate(['/employees']);
                    this.authenticationService.authentication(this.username, this.password)
                        .then(function (pass) {
                        if (pass) {
                            _this.hasError = false;
                            _this.router.navigate(['/employees']);
                        }
                        else {
                            throw "Authentication failed. Wrong username or password.";
                        }
                    })
                        .catch(function (error) {
                        _this.hasError = true;
                        if (error.status === 0) {
                            _this.errorMsg = 'Connection to the server failed.';
                        }
                        else if (error.status === 401) {
                            _this.errorMsg = 'Authentication failed. Wrong username or password.';
                        }
                        else {
                            _this.errorMsg = error;
                        }
                    });
                };
                LoginComponent.prototype.onDemoLogin = function () {
                    this.username = 'admin';
                    this.password = 'abc123';
                    this.onLogin();
                };
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'my-login',
                        template: "\n   <div class=\"col-md-12 margin-top\">\n    <div class=\"modal-dialog\" style=\"margin-bottom:0\">\n        <div class=\"modal-content\">\n                    <div class=\"panel-heading\">\n                        <h2 class=\"panel-title\">Sign In</h2>\n                    </div>\n                    <div class=\"panel-body\">\n                        <form role=\"form\">\n                            <fieldset>\n                                <div class=\"form-group\">\n                                    <input [(ngModel)]=\"username\" class=\"form-control input-lg\" placeholder=\"username\" name=\"email\" type=\"text\" autofocus=\"\" required>\n                                </div>\n                                <div class=\"form-group\">\n                                    <input [(ngModel)]=\"password\" class=\"form-control input-lg\" placeholder=\"Password\" name=\"password\" type=\"password\" value=\"\" required>\n                                </div>\n                                <h5 *ngIf = \"hasError\" class=\"red\"> {{errorMsg}} </h5>\n                                <button (click)=\"onLogin()\" class=\"btn btn-primary\">Login</button>\n                                <button (click)=\"onDemoLogin()\" class=\"btn btn-success\">(DEMO only) Quick Admin Login</button>\n                                username: admin  ,password: abc123\n                            </fieldset>\n                        </form>\n                    </div>\n                </div>\n        </div>\n    </div>\n\n  ",
                        styles: ["\n    .margin-top {\n      margin-top: 200px;\n    }\n    .red {\n        color:red;\n    }\n\n  "]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, authentication_service_1.AuthenticationService, router_1.Router])
                ], LoginComponent);
                return LoginComponent;
            }());
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login.component.js.map