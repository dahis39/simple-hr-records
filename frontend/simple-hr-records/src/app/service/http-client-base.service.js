System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise'], function(exports_1, context_1) {
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
    var core_1, http_1;
    var HttpClientBaseService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {}],
        execute: function() {
            HttpClientBaseService = (function () {
                function HttpClientBaseService(http) {
                    this.http = http;
                    this.serverUrl = 'http://localhost:8080/api/';
                    this.headers = new http_1.Headers({
                        'Content-Type': 'application/json;charset=utf-8'
                    });
                }
                HttpClientBaseService.prototype.notifyAuthHeaderChange = function (username, password) {
                    if (!(username === undefined || '') || !(password === undefined || '')) {
                        if (this.headers.has("Authorization")) {
                            this.headers.set("Authorization", "Basic " + btoa(username + ":" + password)); //reset the header
                        }
                        else {
                            this.headers.append("Authorization", "Basic " + btoa(username + ":" + password));
                        }
                    }
                };
                HttpClientBaseService.prototype.getServerUrl = function () {
                    return this.serverUrl;
                };
                HttpClientBaseService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HttpClientBaseService);
                return HttpClientBaseService;
            }());
            exports_1("HttpClientBaseService", HttpClientBaseService);
        }
    }
});
//# sourceMappingURL=http-client-base.service.js.map