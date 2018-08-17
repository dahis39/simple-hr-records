System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise', './http-client-base.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_client_base_service_1;
    var EmployeeService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (http_client_base_service_1_1) {
                http_client_base_service_1 = http_client_base_service_1_1;
            }],
        execute: function() {
            EmployeeService = (function (_super) {
                __extends(EmployeeService, _super);
                function EmployeeService(http) {
                    _super.call(this, http);
                    this.http = http;
                    this.employeesBaseUrl = this.serverUrl + 'employees';
                    this.emptyEmps = [];
                }
                EmployeeService.prototype.getEmployees = function (page) {
                    var _this = this;
                    var offset = (page - 1) * 30 + (page - 1); // always 30 employees per page.
                    var limit = page * 30 + (page - 1);
                    var url = this.employeesBaseUrl + '?offset=' + offset + '&limit=' + limit;
                    return this.http.get(url, { headers: this.headers })
                        .toPromise()
                        .then(function (response) {
                        if (response.status === 200) {
                            return response.json();
                        }
                        return _this.emptyEmps;
                    })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.searchEmployees = function (key, page) {
                    var _this = this;
                    var offset = (page - 1) * 30 + (page - 1);
                    var limit = page * 30 + (page - 1);
                    var url = this.employeesBaseUrl + '/search/' + key + '?offset=' + offset + '&limit=' + limit;
                    return this.http.get(url, { headers: this.headers })
                        .toPromise()
                        .then(function (response) {
                        if (response.status === 200) {
                            return response.json();
                        }
                        return _this.emptyEmps;
                    })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.getEmployeeById = function (id) {
                    var url = this.employeesBaseUrl + '/' + id;
                    return this.http.get(url, { headers: this.headers })
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.updateEmployee = function (employee) {
                    var url = this.employeesBaseUrl + '/' + employee.id;
                    return this.http.post(url, JSON.stringify(employee), { headers: this.headers })
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.addEmployee = function (employee) {
                    return this.http.put(this.employeesBaseUrl, JSON.stringify(employee), { headers: this.headers })
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                EmployeeService.prototype.deleteEmployee = function (employee) {
                    // console.log('No delete request will be send in demo.');
                    var url = this.employeesBaseUrl + '/' + employee.id;
                    this.http.delete(url, { headers: this.headers })
                        .toPromise()
                        .then(function (res) { return console.log("Delete successed." + res); })
                        .catch(this.handleError);
                    return true;
                };
                EmployeeService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                EmployeeService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], EmployeeService);
                return EmployeeService;
            }(http_client_base_service_1.HttpClientBaseService));
            exports_1("EmployeeService", EmployeeService);
        }
    }
});
//# sourceMappingURL=employee.service.js.map