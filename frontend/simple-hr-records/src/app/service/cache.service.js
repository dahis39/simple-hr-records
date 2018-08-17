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
    var CacheService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CacheService = (function () {
                function CacheService() {
                    this.fullEmpList = [];
                    this.searchEmpList = [];
                    this.genderList = ["M", "F"];
                    this.isMainviewCache = false;
                }
                CacheService.prototype.getCacheState = function () {
                    return this.isMainviewCache;
                };
                CacheService.prototype.expireMainviewCache = function () {
                    this.isMainviewCache = false;
                };
                CacheService.prototype.getGenderList = function () {
                    return this.genderList;
                };
                // TODO: splite to two cache services. These methods and fields are for a global cache name pair object, and the rest are for presistence of mainview page.
                CacheService.prototype.setDepartments = function (dep) {
                    this.departmentsList = dep;
                    this.departmentsIdNamePairs = {};
                    for (var i = 0; i < this.departmentsList.length; i++) {
                        this.departmentsIdNamePairs[this.departmentsList[i].dept_name] = this.departmentsList[i].dept_no; // dept_name is key, dept_no is value.
                    }
                };
                CacheService.prototype.getDepartments = function () {
                    return this.departmentsList;
                };
                CacheService.prototype.getDepartmentsIdNamePairs = function () {
                    return this.departmentsIdNamePairs;
                };
                CacheService.prototype.getFullEmpList = function () {
                    return this.fullEmpList;
                };
                CacheService.prototype.setFullEmpList = function (list) {
                    this.fullEmpList = list;
                    this.isMainviewCache = true;
                };
                CacheService.prototype.getFullListScrollPageCount = function () {
                    var lenght = this.fullEmpList.length;
                    if (length !== 0 && lenght >= 60) {
                        return Math.floor(length / 30);
                    }
                    return 1;
                };
                CacheService.prototype.getSearchEmpList = function () {
                    return this.searchEmpList;
                };
                CacheService.prototype.setSearchEmpList = function (list) {
                    this.searchEmpList = list;
                    this.isMainviewCache = true;
                };
                CacheService.prototype.getSearchListScrollPageCount = function () {
                    var lenght = this.fullEmpList.length;
                    if (length !== 0 && lenght >= 60) {
                        return Math.floor(length / 30);
                    }
                    return 1;
                };
                CacheService.prototype.getSearchKeyword = function () {
                    return this.searchKeyword;
                };
                CacheService.prototype.setSearchKeyword = function (str) {
                    this.searchKeyword = str;
                    this.isMainviewCache = true;
                };
                CacheService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], CacheService);
                return CacheService;
            }());
            exports_1("CacheService", CacheService);
        }
    }
});
//# sourceMappingURL=cache.service.js.map