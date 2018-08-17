System.register(['@angular/core', '@angular/http', 'rxjs/add/operator/toPromise', './http-client-base.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, http_client_base_service_1;
    var TransferService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {},
            function (http_client_base_service_1_1) {
                http_client_base_service_1 = http_client_base_service_1_1;
            }],
        execute: function() {
            TransferService = (function (_super) {
                __extends(TransferService, _super);
                function TransferService(http) {
                    _super.call(this, http);
                    this.http = http;
                    this.baseUrl = this.serverUrl + 'employees/';
                }
                TransferService.prototype.getTransfersByEmpId = function (id) {
                    var url = this.baseUrl + id + '/transfers';
                    return this.http.get(url, { headers: this.headers })
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                TransferService.prototype.updateTransfer = function (transfers) {
                    var url = this.baseUrl + transfers[0].emp_no + '/transfers';
                    return this.http.post(url, JSON.stringify(transfers), { headers: this.headers })
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                TransferService.prototype.addNewTransfer = function (transfer) {
                    var url = this.baseUrl + transfer.emp_no + '/transfers';
                    return this.http.put(url, JSON.stringify(transfer), { headers: this.headers })
                        .toPromise()
                        .then(function (response) { return response.json(); })
                        .catch(this.handleError);
                };
                TransferService.prototype.deleteTransfer = function (transfer) {
                    console.log('No delete request will be send in demo.');
                    return true;
                };
                TransferService.prototype.handleError = function (error) {
                    console.error('An error occurred', error); // for demo purposes only
                    return Promise.reject(error.message || error);
                };
                TransferService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], TransferService);
                return TransferService;
            }(http_client_base_service_1.HttpClientBaseService));
            exports_1("TransferService", TransferService);
        }
    }
});
//# sourceMappingURL=transfer.service.js.map