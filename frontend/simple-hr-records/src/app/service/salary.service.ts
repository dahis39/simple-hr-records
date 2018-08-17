import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { HttpClientBaseService } from './http-client-base.service';
import { Salary } from '../domain/salary';

@Injectable()
export class SalaryService extends HttpClientBaseService {
    private salaryBaseUrl = this.serverUrl + 'employees/';

    constructor(public http: Http) { super(http); }

    getSalariesByEmpId(id: number): Promise<Salary[]> {
        let url = this.salaryBaseUrl + id + '/salaries';
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Salary[])
            .catch(this.handleError);
    }

    updateSalary(salaries: Salary[]): Promise<Salary> {
        let url = this.salaryBaseUrl + salaries[0].emp_no + '/salaries/keysupdate';
        return this.http.post(url, JSON.stringify(salaries), { headers: this.headers })
                    .toPromise()
                    .then(response => response.json() as Salary)
                    .catch(this.handleError);
    }

    addNewSalary(salary: Salary): Promise<Salary> {
        let url = this.salaryBaseUrl + salary.emp_no + '/salaries';
        return this.http.put(url, JSON.stringify(salary), { headers: this.headers })
                    .toPromise()
                    .then(response => response.json() as Salary)
                    .catch(this.handleError);
    }

    deleteSalary(salary: Salary): boolean {
        console.log('No delete request will be send in demo.');
        return true;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}