System.register(['@angular/core', '@angular/http', './employee.service', './title.service', './salary.service', './transfer.service', './department.service', './cache.service', './http-client-base.service', 'rxjs/Subject', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, http_1, employee_service_1, title_service_1, salary_service_1, transfer_service_1, department_service_1, cache_service_1, http_client_base_service_1, Subject_1;
    var AuthenticationService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (title_service_1_1) {
                title_service_1 = title_service_1_1;
            },
            function (salary_service_1_1) {
                salary_service_1 = salary_service_1_1;
            },
            function (transfer_service_1_1) {
                transfer_service_1 = transfer_service_1_1;
            },
            function (department_service_1_1) {
                department_service_1 = department_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            },
            function (http_client_base_service_1_1) {
                http_client_base_service_1 = http_client_base_service_1_1;
            },
            function (Subject_1_1) {
                Subject_1 = Subject_1_1;
            },
            function (_1) {}],
        execute: function() {
            AuthenticationService = (function () {
                function AuthenticationService(http, httpClientBaseService, employeeService, titleService, salaryService, transferService, departmentService, cacheService) {
                    this.http = http;
                    this.httpClientBaseService = httpClientBaseService;
                    this.employeeService = employeeService;
                    this.titleService = titleService;
                    this.salaryService = salaryService;
                    this.transferService = transferService;
                    this.departmentService = departmentService;
                    this.cacheService = cacheService;
                    this.authenticationStateSubject = new Subject_1.Subject();
                }
                AuthenticationService.prototype.authentication = function (username, password) {
                    var _this = this;
                    var headers = new http_1.Headers();
                    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
                    headers.append("Content-Type", "application/json;charset=utf-8");
                    this.url = this.httpClientBaseService.getServerUrl() + '/test';
                    return this.http.get(this.url, { headers: headers })
                        .toPromise()
                        .then(function (response) {
                        if (response.status === 200) {
                            _this.username = username;
                            _this.password = password;
                            _this.authenticationStateSubject.next(true);
                            // assign basic auth headers
                            _this.employeeService.notifyAuthHeaderChange(username, password);
                            _this.titleService.notifyAuthHeaderChange(username, password);
                            _this.salaryService.notifyAuthHeaderChange(username, password);
                            _this.transferService.notifyAuthHeaderChange(username, password);
                            _this.departmentService.notifyAuthHeaderChange(username, password);
                            //initialize/re-initialize cache services
                            _this.cacheService.expireMainviewCache();
                            _this.departmentService.getDepartments();
                            return true;
                        }
                        return false;
                    })
                        .catch(this.handleError);
                };
                AuthenticationService.prototype.getState = function () {
                    return this.authenticationStateSubject;
                };
                AuthenticationService.prototype.getUsername = function () {
                    return this.username;
                };
                AuthenticationService.prototype.getPassword = function () {
                    return this.password;
                };
                AuthenticationService.prototype.logout = function () {
                    this.authenticationStateSubject.next(false);
                };
                AuthenticationService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                AuthenticationService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, http_client_base_service_1.HttpClientBaseService, employee_service_1.EmployeeService, title_service_1.TitleService, salary_service_1.SalaryService, transfer_service_1.TransferService, department_service_1.DepartmentService, cache_service_1.CacheService])
                ], AuthenticationService);
                return AuthenticationService;
            }());
            exports_1("AuthenticationService", AuthenticationService);
        }
    }
});
//# sourceMappingURL=authentication.service.js.map