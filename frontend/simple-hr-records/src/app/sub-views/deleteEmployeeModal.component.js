System.register(['@angular/core', '../domain/employee'], function(exports_1, context_1) {
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
    var core_1, employee_1;
    var DeleteEmployeeModal;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (employee_1_1) {
                employee_1 = employee_1_1;
            }],
        execute: function() {
            DeleteEmployeeModal = (function () {
                function DeleteEmployeeModal() {
                    this.deleteRequest = new core_1.EventEmitter();
                }
                DeleteEmployeeModal.prototype.cancelDelete = function () {
                    this.employee = undefined;
                    this.deleteRequest.emit(this.employee);
                };
                DeleteEmployeeModal.prototype.commitDelete = function () {
                    this.deleteRequest.emit(this.employee);
                    this.employee = undefined;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', employee_1.Employee)
                ], DeleteEmployeeModal.prototype, "employee", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], DeleteEmployeeModal.prototype, "deleteRequest", void 0);
                DeleteEmployeeModal = __decorate([
                    core_1.Component({
                        selector: 'delete-employee-modal',
                        template: require('./deleteEmployeeModal.component.html'),
                        styles: [require('./deleteEmployeeModal.component.css')]
                    }), 
                    __metadata('design:paramtypes', [])
                ], DeleteEmployeeModal);
                return DeleteEmployeeModal;
            }());
            exports_1("DeleteEmployeeModal", DeleteEmployeeModal);
        }
    }
});
//# sourceMappingURL=deleteEmployeeModal.component.js.map