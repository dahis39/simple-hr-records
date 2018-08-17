System.register(['@angular/core', '@angular/forms', '@angular/router', 'rxjs/add/operator/debounceTime', '../service/employee.service', '../service/cache.service'], function(exports_1, context_1) {
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
    var core_1, forms_1, router_1, employee_service_1, cache_service_1;
    var MainviewComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            }],
        execute: function() {
            MainviewComponent = (function () {
                function MainviewComponent(router, employeeService, cacheService) {
                    this.router = router;
                    this.employeeService = employeeService;
                    this.cacheService = cacheService;
                    this.employeesFullList = [];
                    this.employeesSearchList = [];
                    this.onNew = false;
                    this.scrollPageFullList = 1;
                    this.scrollPageSearchList = 1;
                    this.isSearching = false;
                    this.hasSearchError = false;
                    this.searchControl = new forms_1.FormControl();
                }
                MainviewComponent.prototype.ngOnInit = function () {
                    if (this.cacheService.getCacheState()) {
                        this.reloadState();
                    }
                    else {
                        this.populateFullList();
                    }
                    this.subscribeSearchControl();
                };
                MainviewComponent.prototype.ngOnDestroy = function () {
                    this.cacheService.setFullEmpList(this.employeesFullList);
                    this.cacheService.setSearchEmpList(this.employeesSearchList);
                    this.cacheService.setSearchKeyword(this.searchKey);
                };
                MainviewComponent.prototype.populateFullList = function () {
                    var _this = this;
                    this.employeeService.getEmployees(1).then(function (employees) {
                        _this.employeesFullList = employees;
                    });
                };
                MainviewComponent.prototype.reloadState = function () {
                    this.employeesFullList = this.cacheService.getFullEmpList();
                    this.employeesSearchList = this.cacheService.getSearchEmpList();
                    this.scrollPageFullList = this.cacheService.getFullListScrollPageCount();
                    this.scrollPageSearchList = this.cacheService.getSearchListScrollPageCount();
                    this.searchControl.setValue(this.cacheService.getSearchKeyword());
                    this.searchKey = this.cacheService.getSearchKeyword();
                };
                MainviewComponent.prototype.subscribeSearchControl = function () {
                    var _this = this;
                    this.searchControl.valueChanges
                        .debounceTime(400)
                        .subscribe(function (searchControlValue) {
                        var value = searchControlValue;
                        if (value.length === 0) {
                            _this.hasSearchError = false;
                            _this.employeesSearchList = [];
                        }
                        else if (value.length < 3) {
                            _this.hasSearchError = true;
                            _this.searchError = 'Keyword is too short.';
                            _this.employeesSearchList = [];
                        }
                        else {
                            _this.hasSearchError = false;
                            _this.employeesSearchList = [];
                            _this.employeeService.searchEmployees(value, _this.scrollPageSearchList).then(function (employees) {
                                return _this.employeesSearchList = _this.employeesSearchList.concat(employees);
                            });
                        }
                        _this.searchKey = value;
                    });
                };
                // Scrolling event.
                MainviewComponent.prototype.getMoreEmployees = function (pageNum) {
                    var _this = this;
                    if (this.isSearching) {
                        this.employeeService.searchEmployees(this.searchKey, pageNum).then(function (employees) {
                            return _this.employeesSearchList = _this.employeesSearchList.concat(employees);
                        });
                    }
                    else {
                        this.employeeService.getEmployees(pageNum).then(function (employees) {
                            return _this.employeesFullList = _this.employeesFullList.concat(employees);
                        });
                    }
                };
                MainviewComponent.prototype.onScrollDown = function () {
                    if (this.isSearching) {
                        this.scrollPageSearchList++;
                        this.getMoreEmployees(this.scrollPageSearchList);
                    }
                    else {
                        this.scrollPageFullList++;
                        this.getMoreEmployees(this.scrollPageFullList);
                    }
                };
                // Switching between two views.
                MainviewComponent.prototype.onSearch = function () {
                    this.isSearching = true;
                };
                MainviewComponent.prototype.onFullList = function () {
                    this.isSearching = false;
                };
                // Delete event for employee.
                MainviewComponent.prototype.onEmployeeDeleting = function (employee) {
                    this.deletingEmp = employee;
                };
                MainviewComponent.prototype.onCommitDelete = function (employee) {
                    if (employee === undefined) {
                        this.deletingEmp = undefined;
                    }
                    else {
                        this.employeeService.deleteEmployee(employee);
                        this.employeesFullList = this.employeesFullList.filter(function (emp) { return emp.id !== employee.id; });
                        this.employeesSearchList = this.employeesSearchList.filter(function (emp) { return emp.id !== employee.id; });
                    }
                };
                // Add new employee event.
                MainviewComponent.prototype.createEmployee = function () {
                    this.onNew = true;
                };
                MainviewComponent.prototype.addNewEmployee = function (employee) {
                    if (employee !== undefined) {
                        this.employeesFullList.unshift(employee);
                    }
                    this.onNew = false;
                };
                // Eliminate same employees by checking id.
                MainviewComponent.prototype.trackByEmployees = function (index, employee) { return employee.id; };
                MainviewComponent = __decorate([
                    core_1.Component({
                        selector: 'my-mainview',
                        template: require('./mainview.component.html'),
                        styles: [require('./mainview.component.css')]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, employee_service_1.EmployeeService, cache_service_1.CacheService])
                ], MainviewComponent);
                return MainviewComponent;
            }());
            exports_1("MainviewComponent", MainviewComponent);
        }
    }
});
//# sourceMappingURL=mainview.component.js.map