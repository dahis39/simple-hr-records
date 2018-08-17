System.register(['@angular/core', '@angular/platform-browser', '@angular/http', 'angular2-fontawesome/angular2-fontawesome', 'angular2-infinite-scroll/angular2-infinite-scroll', '@angular/forms', './app.component', './main-views/mainview.component', './main-views/departments.component', './sub-views/employee.component', './main-views/employeeDetail.component', './main-views/deptEmployeesList.component', './sub-views/inputField.component', './fnc-views/pagenotfound.component', './fnc-views/login.component', './sub-views/initialImage.component', './sub-views/newEmployee.component', './sub-views/deleteEmployeeModal.component', './fnc-views/about.component', './service/employee.service', './service/title.service', './service/salary.service', './service/transfer.service', './service/department.service', './service/cache.service', './service/http-client-base.service', './service/authentication.service', './service/auth-guard.service', '@angular/router'], function(exports_1, context_1) {
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
    var core_1, platform_browser_1, http_1, angular2_fontawesome_1, angular2_infinite_scroll_1, forms_1, app_component_1, mainview_component_1, departments_component_1, employee_component_1, employeeDetail_component_1, deptEmployeesList_component_1, inputField_component_1, pagenotfound_component_1, login_component_1, initialImage_component_1, newEmployee_component_1, deleteEmployeeModal_component_1, about_component_1, employee_service_1, title_service_1, salary_service_1, transfer_service_1, department_service_1, cache_service_1, http_client_base_service_1, authentication_service_1, auth_guard_service_1, router_1;
    var appRoutes, AppModule;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (angular2_fontawesome_1_1) {
                angular2_fontawesome_1 = angular2_fontawesome_1_1;
            },
            function (angular2_infinite_scroll_1_1) {
                angular2_infinite_scroll_1 = angular2_infinite_scroll_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (mainview_component_1_1) {
                mainview_component_1 = mainview_component_1_1;
            },
            function (departments_component_1_1) {
                departments_component_1 = departments_component_1_1;
            },
            function (employee_component_1_1) {
                employee_component_1 = employee_component_1_1;
            },
            function (employeeDetail_component_1_1) {
                employeeDetail_component_1 = employeeDetail_component_1_1;
            },
            function (deptEmployeesList_component_1_1) {
                deptEmployeesList_component_1 = deptEmployeesList_component_1_1;
            },
            function (inputField_component_1_1) {
                inputField_component_1 = inputField_component_1_1;
            },
            function (pagenotfound_component_1_1) {
                pagenotfound_component_1 = pagenotfound_component_1_1;
            },
            function (login_component_1_1) {
                login_component_1 = login_component_1_1;
            },
            function (initialImage_component_1_1) {
                initialImage_component_1 = initialImage_component_1_1;
            },
            function (newEmployee_component_1_1) {
                newEmployee_component_1 = newEmployee_component_1_1;
            },
            function (deleteEmployeeModal_component_1_1) {
                deleteEmployeeModal_component_1 = deleteEmployeeModal_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
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
            function (department_service_1_1) {
                department_service_1 = department_service_1_1;
            },
            function (cache_service_1_1) {
                cache_service_1 = cache_service_1_1;
            },
            function (http_client_base_service_1_1) {
                http_client_base_service_1 = http_client_base_service_1_1;
            },
            function (authentication_service_1_1) {
                authentication_service_1 = authentication_service_1_1;
            },
            function (auth_guard_service_1_1) {
                auth_guard_service_1 = auth_guard_service_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            }],
        execute: function() {
            appRoutes = [
                {
                    path: '',
                    redirectTo: '/login',
                    pathMatch: 'full'
                },
                { path: 'employees', component: mainview_component_1.MainviewComponent, canActivate: [auth_guard_service_1.AuthGuard] },
                { path: 'new-employee', component: newEmployee_component_1.NewEmployee, canActivate: [auth_guard_service_1.AuthGuard] },
                { path: 'departments', component: departments_component_1.DepartmentsComponent, canActivate: [auth_guard_service_1.AuthGuard] },
                { path: 'employee-detail/:id', component: employeeDetail_component_1.EmployeeDetailComponent, canActivate: [auth_guard_service_1.AuthGuard] },
                { path: 'dept-emps-list/:id', component: deptEmployeesList_component_1.DeptEmployeesList, canActivate: [auth_guard_service_1.AuthGuard] },
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: '**', component: pagenotfound_component_1.PageNotFoundComponent }
            ];
            AppModule = (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, angular2_fontawesome_1.Angular2FontawesomeModule, angular2_infinite_scroll_1.InfiniteScrollModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(appRoutes, { useHash: true })],
                        declarations: [app_component_1.AppComponent, mainview_component_1.MainviewComponent, departments_component_1.DepartmentsComponent, employee_component_1.EmployeeComponent,
                            employeeDetail_component_1.EmployeeDetailComponent, deptEmployeesList_component_1.DeptEmployeesList, inputField_component_1.InputFieldComponent, pagenotfound_component_1.PageNotFoundComponent, login_component_1.LoginComponent,
                            initialImage_component_1.InitialImageComponent, newEmployee_component_1.NewEmployee, deleteEmployeeModal_component_1.DeleteEmployeeModal, about_component_1.AboutComponent],
                        providers: [http_client_base_service_1.HttpClientBaseService, employee_service_1.EmployeeService, title_service_1.TitleService, salary_service_1.SalaryService, transfer_service_1.TransferService, department_service_1.DepartmentService, authentication_service_1.AuthenticationService, cache_service_1.CacheService, auth_guard_service_1.AuthGuard],
                        bootstrap: [app_component_1.AppComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    }
});
//# sourceMappingURL=app.module.js.map