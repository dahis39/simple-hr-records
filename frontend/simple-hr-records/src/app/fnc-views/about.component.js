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
    var AboutComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AboutComponent = (function () {
                function AboutComponent() {
                }
                AboutComponent = __decorate([
                    core_1.Component({
                        selector: 'my-about',
                        template: "\n    <div class=\"container\">\n      <div class=\"jumbotron\">\n        <h1 class=\"display-3\">Simple HR Records</h1>\n        <p class=\"lead\">My experimental Human Resource app for learning Angualr 2. With a friendly UI emphasizing the approach of \"What You See Is What You Can Change\",\n             objects and fields in this app can be create, edit and delete on the fly while it's presenting itself. \n             No more digging through menus and pages to find the right forms for the right guy is needed.\n        </p>\n        <p>Data based on a SQL dump on Github, backend RESTful api powered by Java/Spring Boot.</p>\n        <p><a class=\"btn btn-lg btn-success\" routerLink=\"/login\" role=\"button\"> Login & Have Fun </a></p>\n      </div>\n\n      <div class=\"row\">\n        <h3>Features</h3>\n        <div class=\"col-lg-6\">\n          <h4>Search</h4>\n          <p>By Id or by names, onKey delayed for reducing loads.</p>\n\n          <h4>Security</h4>\n          <p>Basic Authentication and frontend route guard.</p>\n\n          <h4>Frontend Cache</h4>\n          <p>Both full employees list and search result list are cached.</p>\n\n          <h4>Mobile Support</h4>\n          <p>Easy migration with Ionic 2.</p>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <h4>Multiple Listing</h4>\n          <p>Employees list, departments list, managers list and employees sub list by departments.</p>\n\n          <h4>Infinite Scrolling</h4>\n          <p>All lists and search results are \"infinite\" scrolled for pagination.</p>\n\n          <h4>Pop-up/Modal/Notification</h4>\n          <p>For create form, delete confirm and error codes.</p>\n        </div>\n      </div>\n\n      <div class=\"row\">\n        <h3>Tech Stack</h3>\n        <div class=\"col-lg-6\">\n            <h4>Front-end</h4>\n            <p>Bootstrap</p>\n            <p>FontAwesome</p>\n            <p>Angular 2</p>\n            <p><a href=\"https://www.npmjs.com/package/angular2-infinite-scroll\">angular2-infinite-scroll</a></p>\n        </div>\n        <div class=\"col-lg-6\">\n            <h4>Back-end</h4>\n            <p>Spring Boot</p>\n            <p>MyBatis</p>\n            <p>MySQL</p>\n        </div>\n      </div>\n\n      <hr>\n      <footer class=\"footer\">\n        <p>&copy; By <a href=\"http://www.saturnringstation.com/portfolio\">Tom H</a> 2017</p>\n      </footer>\n    </div>\n  "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AboutComponent);
                return AboutComponent;
            }());
            exports_1("AboutComponent", AboutComponent);
        }
    }
});
//# sourceMappingURL=about.component.js.map