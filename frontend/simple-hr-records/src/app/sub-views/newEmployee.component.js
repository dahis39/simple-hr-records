System.register(['@angular/core', '../service/employee.service', '../service/cache.service'], function(exports_1, context_1) {
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
    var core_1, employee_service_1, cache_service_1;
    var NewEmployee;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_service_1_1) {
                employee_service_1 = employee_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            }],
        execute: function() {
            NewEmployee = (function () {
                function NewEmployee(employeeService, cacheService) {
                    this.employeeService = employeeService;
                    this.cacheService = cacheService;
                    this.newEmployee = new core_1.EventEmitter();
                    this.genderList = [];
                }
                NewEmployee.prototype.ngOnInit = function () {
                    this.onNew = false;
                    this.employee = {
                        firstName: '',
                        lastName: '',
                        gender: '',
                        birthDate: '',
                        hireDate: '',
                        version: 0
                    };
                    this.genderList = this.cacheService.getGenderList();
                };
                NewEmployee.prototype.submit = function () {
                    var _this = this;
                    this.employeeService.addEmployee(this.employee)
                        .then(function (emp) {
                        _this.cacheService.expireMainviewCache();
                        _this.newEmployee.emit(emp);
                        _this.ngOnInit();
                    });
                };
                NewEmployee.prototype.cancel = function () {
                    this.newEmployee.emit(undefined);
                    this.ngOnInit();
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Boolean)
                ], NewEmployee.prototype, "onNew", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], NewEmployee.prototype, "newEmployee", void 0);
                NewEmployee = __decorate([
                    core_1.Component({
                        selector: 'new-employee-modal',
                        template: require('./newEmployee.component.html'),
                        styles: ["\n        .modal { display:block; margin-top: 200px;}\n        h2 { color: #369; }\n        .overlay {\n            display: block;\n            height: 100%;\n            width: 100%;\n            position: fixed;\n            z-index: 1;\n            left: 0;\n            top: 0;\n            background-color: rgb(0,0,0);\n            background-color: rgba(0,0,0, 0.8);\n            overflow-x: hidden;\n            transition: 0.5s;\n        }\n    "]
                    }), 
                    __metadata('design:paramtypes', [employee_service_1.EmployeeService, cache_service_1.CacheService])
                ], NewEmployee);
                return NewEmployee;
            }());
            exports_1("NewEmployee", NewEmployee);
        }
    }
});
//# sourceMappingURL=newEmployee.component.js.map