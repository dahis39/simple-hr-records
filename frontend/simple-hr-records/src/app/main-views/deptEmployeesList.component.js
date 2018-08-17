System.register(['@angular/core', '@angular/router', 'rxjs/add/operator/switchMap', '../service/employee.service', '../service/department.service', '../service/cache.service'], function(exports_1, context_1) {
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
    var core_1, router_1, employee_service_1, department_service_1, cache_service_1;
    var DeptEmployeesList;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (department_service_1_1) {
                department_service_1 = department_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            }],
        execute: function() {
            DeptEmployeesList = (function () {
                function DeptEmployeesList(employeeService, departmentService, route, cacheService) {
                    this.employeeService = employeeService;
                    this.departmentService = departmentService;
                    this.route = route;
                    this.cacheService = cacheService;
                    this.employees = [];
                    this.scrollPageNum = 1;
                    this.isDeleting = false;
                }
                DeptEmployeesList.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params
                        .switchMap(function (params) { return _this.departmentService.getEmployeesByDeptNo(params['id'], _this.scrollPageNum); })
                        .subscribe(function (emps) { return _this.employees = emps; });
                    this.deptNum = this.route.snapshot.params['id'];
                    // get object property name by value( get key by value ).
                    var idNamePairs = this.cacheService.getDepartmentsIdNamePairs();
                    var keys = Object.keys(idNamePairs);
                    for (var i = 0; i < keys.length; i++) {
                        if (idNamePairs[keys[i]] === this.deptNum) {
                            this.deptName = keys[i];
                        }
                    }
                };
                DeptEmployeesList.prototype.onScrollDown = function () {
                    var _this = this;
                    this.scrollPageNum++;
                    this.departmentService.getEmployeesByDeptNo(this.deptNum, this.scrollPageNum)
                        .then(function (emps) { return _this.employees = _this.employees.concat(emps); });
                };
                // Delete event for employee.
                DeptEmployeesList.prototype.onEmployeeDeleting = function (employee) {
                    this.isDeleting = true;
                    this.tempDeleteEmp = employee;
                };
                DeptEmployeesList.prototype.commitDelete = function () {
                    this.onEmployeeDelete(this.tempDeleteEmp);
                    this.isDeleting = false;
                };
                DeptEmployeesList.prototype.cancelDelete = function () {
                    this.isDeleting = false;
                };
                DeptEmployeesList.prototype.onEmployeeDelete = function (employee) {
                    // server delete request
                    this.employeeService.deleteEmployee(employee);
                    // view object delect
                    this.employees = this.employees.filter(function (emp) { return emp.id !== employee.id; });
                };
                DeptEmployeesList.prototype.trackByEmployees = function (index, employee) { return employee.id; };
                DeptEmployeesList = __decorate([
                    core_1.Component({
                        selector: 'my-dept-employees-list',
                        template: require('./deptEmployeesList.component.html'),
                        styles: [require('./deptEmployeesList.component.css')]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, department_service_1.DepartmentService, router_1.ActivatedRoute, cache_service_1.CacheService])
                ], DeptEmployeesList);
                return DeptEmployeesList;
            }());
            exports_1("DeptEmployeesList", DeptEmployeesList);
        }
    }
});
//# sourceMappingURL=deptEmployeesList.component.js.map