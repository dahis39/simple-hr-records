System.register(['@angular/core', '@angular/router', '../domain/employee', '../service/cache.service', '../service/employee.service'], function(exports_1, context_1) {
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
    var core_1, router_1, employee_1, cache_service_1, employee_service_1;
    var EmployeeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            }],
        execute: function() {
            EmployeeComponent = (function () {
                function EmployeeComponent(router, employeeService, cacheService) {
                    this.router = router;
                    this.employeeService = employeeService;
                    this.cacheService = cacheService;
                    this.deleteRequest = new core_1.EventEmitter();
                }
                EmployeeComponent.prototype.ngOnInit = function () {
                    this.fullname = this.employee.firstName + ' ' + this.employee.lastName;
                    this.genderList = this.cacheService.getGenderList();
                };
                EmployeeComponent.prototype.ngOnChanges = function () {
                    this.ngOnInit();
                };
                EmployeeComponent.prototype.reset = function () {
                    this.ngOnInit();
                };
                EmployeeComponent.prototype.onValueChange = function (returnData) {
                    var _this = this;
                    if (returnData.fieldName === 'name') {
                        this.fullname = returnData.data;
                        var nameArray = returnData.data.split(' ');
                        if (nameArray.length === 3) {
                            this.employee.firstName = nameArray[0] + ' ' + nameArray[1];
                            this.employee.lastName = nameArray[2];
                        }
                        if (nameArray.length === 2) {
                            this.employee.firstName = nameArray[0];
                            this.employee.lastName = nameArray[1];
                        }
                    }
                    else {
                        this.employee[returnData.fieldName] = returnData.data;
                    }
                    this.employeeService.updateEmployee(this.employee).then(function (emp) { return _this.employee = emp; });
                };
                EmployeeComponent.prototype.onDelete = function () {
                    this.deleteRequest.emit(this.employee);
                };
                EmployeeComponent.prototype.openEmployeeDetail = function () {
                    this.router.navigate(['/employee-detail/' + this.employee.id]);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', employee_1.Employee)
                ], EmployeeComponent.prototype, "employee", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], EmployeeComponent.prototype, "deleteRequest", void 0);
                EmployeeComponent = __decorate([
                    core_1.Component({
                        selector: 'employee-item',
                        template: require('./employee.component.html'),
                        styles: [require('./employee.component.css')]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, employee_service_1.EmployeeService, cache_service_1.CacheService])
                ], EmployeeComponent);
                return EmployeeComponent;
            }());
            exports_1("EmployeeComponent", EmployeeComponent);
        }
    }
});
//# sourceMappingURL=employee.component.js.map