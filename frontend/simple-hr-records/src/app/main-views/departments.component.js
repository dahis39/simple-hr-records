System.register(['@angular/core', '../service/department.service', '../service/employee.service', '../service/cache.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, department_service_1, employee_service_1, cache_service_1, router_1;
    var DepartmentsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (department_service_1_1) {
                department_service_1 = department_service_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            DepartmentsComponent = (function () {
                function DepartmentsComponent(departmentService, employeeService, cacheService, router) {
                    this.departmentService = departmentService;
                    this.employeeService = employeeService;
                    this.cacheService = cacheService;
                    this.router = router;
                    this.departments = [];
                }
                DepartmentsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.departmentService.getDepartments().then(function (deps) { return _this.departments = deps; });
                };
                DepartmentsComponent.prototype.navigateToDeptEmpsList = function (deptNum) {
                    this.router.navigate(['/dept-emps-list/' + deptNum]);
                };
                // Delete event for employee.
                DepartmentsComponent.prototype.onEmployeeDeleting = function (employee, i) {
                    this.deletingEmp = employee;
                    this.deleteEmpDepIndex = i;
                };
                DepartmentsComponent.prototype.onCommitDelete = function (employee) {
                    if (employee === undefined) {
                        this.deletingEmp = undefined;
                    }
                    else {
                        // server delete request
                        this.employeeService.deleteEmployee(employee);
                        // view object delect
                        this.departments[this.deleteEmpDepIndex].managers = this.departments[this.deleteEmpDepIndex].managers
                            .filter(function (emp) { return emp.id !== employee.id; });
                    }
                };
                DepartmentsComponent = __decorate([
                    core_1.Component({
                        selector: 'my-mainview',
                        template: require('./departments.component.html'),
                        styles: [require('./departments.component.css')]
                    }), 
                    __metadata('design:paramtypes', [department_service_1.DepartmentService, employee_service_1.EmployeeService, cache_service_1.CacheService, router_1.Router])
                ], DepartmentsComponent);
                return DepartmentsComponent;
            }());
            exports_1("DepartmentsComponent", DepartmentsComponent);
        }
    }
});
//# sourceMappingURL=departments.component.js.map