import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { HttpClientBaseService } from './http-client-base.service';
import { Employee } from '../domain/Employee';

@Injectable()
export class EmployeeService extends HttpClientBaseService {

    private employeesBaseUrl = this.serverUrl + 'employees';

    private emptyEmps: Employee[] = [];

    constructor(public http: Http) { super(http); }

    getEmployees(page: number): Promise<Employee[]> {
        let offset = (page - 1) * 30 + (page - 1);          // always 30 employees per page.
        let limit = page * 30 + (page -1);
        let url = this.employeesBaseUrl + '?offset=' + offset + '&limit=' + limit;

        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => {
                if (response.status === 200) {
                    return response.json() as Employee[]
                } 
                return this.emptyEmps;
            })
            .catch(this.handleError);
    }

    searchEmployees(key: string, page: number): Promise<Employee[]> {
        let offset = (page - 1) * 30 + (page - 1);
        let limit = page * 30 + (page -1);        
        let url = this.employeesBaseUrl + '/search/' + key + '?offset=' + offset + '&limit=' + limit;

        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => {
                if (response.status === 200) {
                    return response.json() as Employee[]
                } 
                return this.emptyEmps;
            })
            .catch(this.handleError);
    }

    getEmployeeById(id: number): Promise<Employee> {
        let url = this.employeesBaseUrl + '/' + id;

        return this.http.get(url, { headers: this.headers })
                        .toPromise()
                        .then(response => response.json() as Employee)
                        .catch(this.handleError);
    }

    updateEmployee(employee: Employee): Promise<Employee> {
        let url = this.employeesBaseUrl + '/' + employee.id;
        
        return this.http.post(url, JSON.stringify(employee), { headers: this.headers })
                    .toPromise()
                    .then(response => response.json() as Employee)
                    .catch(this.handleError);
    }

    addEmployee(employee : Employee): Promise<Employee> {
        return this.http.put(this.employeesBaseUrl, JSON.stringify(employee), { headers: this.headers })
                        .toPromise()
                        .then(response => response.json() as Employee)
                        .catch(this.handleError);
    }

    deleteEmployee(employee: Employee): boolean {
        // console.log('No delete request will be send in demo.');
        let url = this.employeesBaseUrl + '/' + employee.id;
        this.http.delete(url, { headers: this.headers })
                .toPromise()
                .then(res => console.log("Delete successed." + res))
                .catch(this.handleError)
        return true;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}