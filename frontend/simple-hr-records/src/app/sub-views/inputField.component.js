System.register(['@angular/core'], function(exports_1, context_1) {
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
    var core_1;
    var InputFieldComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            InputFieldComponent = (function () {
                function InputFieldComponent() {
                    this.submitEvent = new core_1.EventEmitter();
                    this.model = this.data;
                }
                InputFieldComponent.prototype.ngOnInit = function () {
                    this.isEdit = false;
                    this.isChanged = false;
                    this.isValidated = true;
                    this.model = this.data;
                };
                InputFieldComponent.prototype.onSubmit = function () {
                    this.validate();
                    if (this.isValidated === true) {
                        var returnDate = { fieldName: this.fieldName, data: this.model };
                        this.submitEvent.emit(returnDate);
                    }
                };
                InputFieldComponent.prototype.onReset = function () {
                    this.ngOnInit();
                };
                InputFieldComponent.prototype.onEditSwitch = function () {
                    if (this.isEdit === true) {
                        this.isEdit = false;
                    }
                    else {
                        this.isEdit = true;
                    }
                };
                InputFieldComponent.prototype.validate = function () {
                    this.isValidated = true;
                    var errors = new Array();
                    var str = this.model;
                    if (this.fieldName === 'name') {
                        var nameArray = str.split(' ');
                        if (!str.replace(/\s/g, '').length) {
                            errors.push('Your name only cotains spaces.');
                        }
                        if (nameArray.length > 3) {
                            errors.push('More than 3 composive names is not supported.');
                        }
                        if (nameArray.length === 3) {
                            if (nameArray[0].length + nameArray[1].length > 14) {
                                errors.push('Firstname can not be longer than 14 charaters.');
                            }
                            if (nameArray[2].length > 16) {
                                errors.push('Lastname can not be longer than 16 charaters.');
                            }
                        }
                        if (nameArray.length === 2) {
                            if (nameArray[0].length > 14) {
                                errors.push('Firstname can not be longer than 14 charaters.');
                            }
                            if (nameArray[1].length > 16) {
                                errors.push('Lastname can not be longer than 16 charaters.');
                            }
                        }
                        if (nameArray.length <= 1) {
                            errors.push('A valid name should contain a firstname and a lastname split by a space.');
                        }
                    }
                    if (this.type === 'date') {
                        var strArray = str.split("-");
                        if (strArray[0].length !== 4) {
                            errors.push('Please provide a valid year. Date format: yyyy-mm-dd.');
                        }
                        if (strArray[1].length !== 2 || parseInt(strArray[1]) > 12) {
                            errors.push('Please provide a valid month. Date format: yyyy-mm-dd.');
                        }
                        if (strArray[2].length !== 2 || parseInt(strArray[2]) > 31) {
                            errors.push('Please provide a valid day. Date format: yyyy-mm-dd.');
                        }
                    }
                    if (this.type === 'number') {
                    }
                    if (this.fieldName === 'titleName') {
                        if (this.data.length >= 15) {
                            errors.push('A title should not be longer than 15 charaters.');
                        }
                    }
                    if (errors.length === 0) {
                        this.isValidated = true;
                        this.onEditSwitch();
                    }
                    else {
                        this.isValidated = false;
                    }
                    this.errors = errors;
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InputFieldComponent.prototype, "type", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InputFieldComponent.prototype, "data", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], InputFieldComponent.prototype, "fieldName", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Array)
                ], InputFieldComponent.prototype, "selectList", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], InputFieldComponent.prototype, "submitEvent", void 0);
                InputFieldComponent = __decorate([
                    core_1.Component({
                        selector: 'inline-edit',
                        template: require('./inputField.component.html'),
                        styles: [require('./inputField.component.css')]
                    }), 
                    __metadata('design:paramtypes', [])
                ], InputFieldComponent);
                return InputFieldComponent;
            }());
            exports_1("InputFieldComponent", InputFieldComponent);
        }
    }
});
//# sourceMappingURL=inputField.component.js.map