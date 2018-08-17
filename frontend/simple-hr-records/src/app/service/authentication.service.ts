import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { EmployeeService } from './employee.service';
import { TitleService } from './title.service';
import { SalaryService } from './salary.service';
import { TransferService } from './transfer.service';
import { DepartmentService } from './department.service';
import { CacheService } from './cache.service';
import { HttpClientBaseService } from './http-client-base.service';

import { Subject } from 'rxjs/index';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {
    private url: string;
    private username: string;
    private password: string;
    private authenticationStateSubject = new Subject<boolean>();

    constructor(
        private http: Http,
        private httpClientBaseService: HttpClientBaseService,
        private employeeService: EmployeeService,
        private titleService: TitleService,
        private salaryService: SalaryService,
        private transferService: TransferService,
        private departmentService: DepartmentService,
        private cacheService: CacheService
    ) { }

    authentication(username: string, password: string): Promise<boolean> {

        let headers = new Headers();

        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers.append("Content-Type","application/json;charset=utf-8");

        this.url = this.httpClientBaseService.getServerUrl() + 'test';

        return this.http.get(this.url, { headers: headers })
            .toPromise()
            .then(response => {
                if(response.status === 200) {
                    this.username = username;
                    this.password = password;
                    this.authenticationStateSubject.next(true);

                    // assign basic auth headers
                    this.employeeService.notifyAuthHeaderChange(username, password);
                    this.titleService.notifyAuthHeaderChange(username, password);
                    this.salaryService.notifyAuthHeaderChange(username, password);
                    this.transferService.notifyAuthHeaderChange(username, password);
                    this.departmentService.notifyAuthHeaderChange(username, password);
                    
                    //initialize/re-initialize cache services
                    this.cacheService.expireMainviewCache();
                    this.departmentService.getDepartments();
                    
                    return true as Boolean;
                }
                return false as Boolean;
            })
            .catch(this.handleError);
    }

    getState(): Subject<boolean> {
        return this.authenticationStateSubject;
    }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }

    logout() {
        this.authenticationStateSubject.next(false);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}