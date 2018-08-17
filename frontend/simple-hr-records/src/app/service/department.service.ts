import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { CacheService } from './cache.service';

import { HttpClientBaseService } from './http-client-base.service';
import { Employee } from '../domain/employee';
import { Department } from '../domain/department';

@Injectable()
export class DepartmentService extends HttpClientBaseService {
    private baseUrl = this.serverUrl + 'departments/';

    constructor(public http: Http, private cacheService: CacheService) { 
        super(http);
     }

    getDepartments(): Promise<Department[]> {
        let url = this.baseUrl;
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => {
                let deps = response.json() as Department[];
                this.cacheService.setDepartments(deps);
                return deps;
            })
            .catch(this.handleError);
    }

    getEmployeesByDeptNo(id: string, page: number): Promise<Employee[]> {
        let offset = (page - 1) * 30 + (page - 1);          // always 30 employees per page.
        let limit = page * 30 + (page -1);
        let url = this.baseUrl + id + '?offset=' + offset + '&limit=' + limit;

        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}