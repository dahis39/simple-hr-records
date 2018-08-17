import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { AppComponent } from './app.component';
import { MainviewComponent } from './main-views/mainview.component';
import { DepartmentsComponent } from './main-views/departments.component';
import { EmployeeComponent } from './sub-views/employee.component';
import { EmployeeDetailComponent } from './main-views/employeeDetail.component';
import { DeptEmployeesList } from './main-views/deptEmployeesList.component';
import { InputFieldComponent } from './sub-views/inputField.component';
import { PageNotFoundComponent } from './fnc-views/pagenotfound.component';
import { LoginComponent } from './fnc-views/login.component';
import { InitialImageComponent } from './sub-views/initialImage.component';
import { NewEmployee } from './sub-views/newEmployee.component';
import { DeleteEmployeeModal } from './sub-views/deleteEmployeeModal.component';
import { AboutComponent } from './fnc-views/about.component';

import { EmployeeService } from './service/employee.service';
import { TitleService } from './service/title.service';
import { SalaryService } from './service/salary.service';
import { TransferService } from './service/transfer.service';
import { DepartmentService } from './service/department.service';
import { CacheService } from './service/cache.service';

import { HttpClientBaseService } from './service/http-client-base.service';
import { AuthenticationService } from './service/authentication.service';
import { AuthGuard } from './service/auth-guard.service';


import { RouterModule, Routes, Router, CanActivate, ActivatedRoute, Params} from '@angular/router';
 
const appRoutes: Routes = [
  {
  path: '',
  redirectTo: '/login',
  pathMatch: 'full'
  },
  { path: 'employees', component: MainviewComponent, canActivate: [AuthGuard]},
  { path: 'new-employee', component: NewEmployee, canActivate: [AuthGuard]},
  { path: 'departments', component: DepartmentsComponent, canActivate: [AuthGuard]},
  { path: 'employee-detail/:id', component: EmployeeDetailComponent, canActivate: [AuthGuard]},
  { path: 'dept-emps-list/:id', component: DeptEmployeesList, canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [BrowserModule, HttpModule, InfiniteScrollModule,
     FormsModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes, { useHash: true })],
  declarations: [AppComponent, MainviewComponent, DepartmentsComponent, EmployeeComponent, 
                  EmployeeDetailComponent, DeptEmployeesList, InputFieldComponent, PageNotFoundComponent, LoginComponent, 
                  InitialImageComponent, NewEmployee, DeleteEmployeeModal, AboutComponent],
  providers: [HttpClientBaseService, EmployeeService, TitleService, SalaryService, TransferService, DepartmentService, AuthenticationService, CacheService, AuthGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
