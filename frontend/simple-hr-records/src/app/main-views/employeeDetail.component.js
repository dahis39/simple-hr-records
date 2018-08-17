System.register(['@angular/core', '@angular/router', 'rxjs/add/operator/switchMap', '../domain/title', '../domain/salary', '../domain/transfer', '../service/employee.service', '../service/title.service', '../service/salary.service', '../service/transfer.service', '../service/cache.service'], function(exports_1, context_1) {
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
    var core_1, router_1, title_1, salary_1, transfer_1, employee_service_1, title_service_1, salary_service_1, transfer_service_1, cache_service_1;
    var EmployeeDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (title_1_1) {
                title_1 = title_1_1;
            },
            function (salary_1_1) {
                salary_1 = salary_1_1;
            },
            function (transfer_1_1) {
                transfer_1 = transfer_1_1;
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
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            }],
        execute: function() {
            EmployeeDetailComponent = (function () {
                function EmployeeDetailComponent(employeeService, titleService, salaryService, transferService, cacheService, route, router) {
                    this.employeeService = employeeService;
                    this.titleService = titleService;
                    this.salaryService = salaryService;
                    this.transferService = transferService;
                    this.cacheService = cacheService;
                    this.route = route;
                    this.router = router;
                    this.titles = [];
                    this.salaries = [];
                    this.transfers = [];
                    this.deptNameList = [];
                    this.deptNumList = [];
                    this.hasError = false;
                }
                EmployeeDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params
                        .switchMap(function (params) { return _this.employeeService.getEmployeeById(+params['id']); })
                        .subscribe(function (employee) { return _this.employee = employee; });
                    this.route.params
                        .switchMap(function (params) { return _this.titleService.getTitlesByEmpId(+params['id']); })
                        .subscribe(function (titles) { return _this.titles = titles; });
                    this.route.params
                        .switchMap(function (params) { return _this.salaryService.getSalariesByEmpId(+params['id']); })
                        .subscribe(function (salaries) { return _this.salaries = salaries; });
                    this.route.params
                        .switchMap(function (params) { return _this.transferService.getTransfersByEmpId(+params['id']); })
                        .subscribe(function (transfers) { return _this.transfers = transfers; });
                    this.departmentsIdNamePairs = this.cacheService.getDepartmentsIdNamePairs();
                    for (var k in this.departmentsIdNamePairs) {
                        if (this.departmentsIdNamePairs.hasOwnProperty(k)) {
                            this.deptNameList.push(k);
                            this.deptNumList.push(this.departmentsIdNamePairs[k]);
                        }
                    }
                };
                EmployeeDetailComponent.prototype.onEmployeeDeleting = function (employee) {
                    this.deletingEmp = employee;
                };
                EmployeeDetailComponent.prototype.onCommitDelete = function (employee) {
                    if (employee === undefined) {
                        this.deletingEmp = undefined;
                    }
                    else {
                        // request delete on server
                        this.employeeService.deleteEmployee(this.employee);
                        // delelte on view.
                        this.employee = undefined;
                        // cache expired.
                        this.cacheService.expireMainviewCache();
                        this.router.navigate(['/employees']);
                    }
                };
                // Title
                EmployeeDetailComponent.prototype.onTitleDelete = function (i) {
                    // request delete on server
                    this.titleService.deleteTitle(this.titles[i]);
                    // delelte on view.
                    this.titles.splice(i, 1);
                };
                EmployeeDetailComponent.prototype.onTitleValueChange = function (returnValue, i) {
                    var _this = this;
                    var oldTitle = Object.assign(new title_1.Title(), this.titles[i]);
                    var tempTitle = Object.assign(new title_1.Title(), this.titles[i]);
                    tempTitle[returnValue.fieldName] = returnValue.data;
                    var submitTitles = [oldTitle, tempTitle];
                    this.titleService.updateTitle(submitTitles)
                        .then(function (title) { return _this.titles[i] = title; });
                };
                EmployeeDetailComponent.prototype.newTitle = function () {
                    var _this = this;
                    var newTitle = {
                        emp_no: this.employee.id,
                        titleName: 'New Title',
                        toDate: '9999-01-01',
                        fromDate: this.getCurrentDate()
                    };
                    this.titleService.addNewTitle(newTitle)
                        .then(function (returnTitle) { return _this.titles.push(returnTitle); })
                        .catch(function (err) {
                        if (err.status === 409) {
                            _this.duplicationError();
                        }
                    });
                };
                // Salary
                EmployeeDetailComponent.prototype.onSalaryDelete = function (i) {
                    // request delete on server
                    this.salaryService.deleteSalary(this.salaries[i]);
                    // delelte on view.
                    this.salaries.splice(i, 1);
                };
                EmployeeDetailComponent.prototype.onSalaryValueChange = function (returnValue, i) {
                    var _this = this;
                    var oldSalary = Object.assign(new salary_1.Salary(), this.salaries[i]);
                    var tempSalary = Object.assign(new salary_1.Salary(), this.salaries[i]);
                    tempSalary[returnValue.fieldName] = returnValue.data;
                    var submitSalaries = [oldSalary, tempSalary];
                    this.salaryService.updateSalary(submitSalaries)
                        .then(function (salary) { return _this.salaries[i] = salary; });
                };
                EmployeeDetailComponent.prototype.newSalary = function () {
                    var _this = this;
                    var newSalary = {
                        emp_no: this.employee.id,
                        salary: 1,
                        toDate: '9999-01-01',
                        fromDate: this.getCurrentDate()
                    };
                    this.salaryService.addNewSalary(newSalary)
                        .then(function (returnSalary) { return _this.salaries.push(returnSalary); })
                        .catch(function (err) {
                        if (err.status === 409) {
                            _this.duplicationError();
                        }
                    });
                };
                // Transfer
                EmployeeDetailComponent.prototype.onTransferValueChange = function (returnValue, i) {
                    var _this = this;
                    var oldTransfer = Object.assign(new transfer_1.Transfer(), this.transfers[i]);
                    var tempTransfer = Object.assign(new transfer_1.Transfer(), this.transfers[i]);
                    if (returnValue.fieldName === 'departmentName') {
                        tempTransfer.dept_no = this.departmentsIdNamePairs[returnValue.data];
                        tempTransfer.departmentName = returnValue.data;
                    }
                    else {
                        tempTransfer[returnValue.fieldName] = returnValue.data;
                    }
                    var submitTransfers = [oldTransfer, tempTransfer];
                    this.transferService.updateTransfer(submitTransfers).then(function (transfer) { return _this.transfers[i] = transfer; });
                };
                EmployeeDetailComponent.prototype.onTransferDelete = function (i) {
                    // request delete on server
                    this.transferService.deleteTransfer(this.transfers[i]);
                    // delelte on view.
                    this.transfers.splice(i, 1);
                };
                EmployeeDetailComponent.prototype.newTransfer = function () {
                    var _this = this;
                    var newTransfer = {
                        departmentName: 'Marketing',
                        emp_no: this.employee.id,
                        dept_no: 'd001',
                        toDate: '9999-01-01',
                        fromDate: this.getCurrentDate()
                    };
                    this.transferService.addNewTransfer(newTransfer)
                        .then(function (returnTransfer) { return _this.transfers.push(returnTransfer); })
                        .catch(function (err) {
                        if (err.status === 409) {
                            _this.duplicationError();
                        }
                    });
                };
                // Error notification
                EmployeeDetailComponent.prototype.duplicationError = function () {
                    this.hasError = true;
                    this.errMassage = "Server error code: 409. Duplicated object with the same primary key(s) already exist. Please edit first.";
                };
                EmployeeDetailComponent.prototype.dismissError = function () {
                    this.hasError = false;
                };
                EmployeeDetailComponent.prototype.getCurrentDate = function () {
                    var date = new Date();
                    return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2);
                };
                EmployeeDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'my-employee-detail',
                        template: require('./employeeDetail.component.html'),
                        styles: [require('./employeeDetail.component.css')]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, title_service_1.TitleService, salary_service_1.SalaryService, transfer_service_1.TransferService, cache_service_1.CacheService, router_1.ActivatedRoute, router_1.Router])
                ], EmployeeDetailComponent);
                return EmployeeDetailComponent;
            }());
            exports_1("EmployeeDetailComponent", EmployeeDetailComponent);
        }
    }
});
//# sourceMappingURL=employeeDetail.component.js.map