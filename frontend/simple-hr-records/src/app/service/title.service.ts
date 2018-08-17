import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { HttpClientBaseService } from './http-client-base.service';
import { Title } from '../domain/title';

@Injectable()
export class TitleService extends HttpClientBaseService {
    private titleBaseUrl = this.serverUrl + 'employees/';

    constructor(public http: Http) { super(http); }

    getTitlesByEmpId(id: number): Promise<Title[]> {
        let url = this.titleBaseUrl + id + '/titles';
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Title[])
            .catch(this.handleError);
    }

    updateTitle(titles: Title[]): Promise<Title> {
        let url = this.titleBaseUrl + titles[0].emp_no + '/titles/keysupdate';
        return this.http.post(url, JSON.stringify(titles), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Title)
            .catch(this.handleError);
    }

    addNewTitle(title: Title): Promise<Title> {
        let url = this.titleBaseUrl + title.emp_no + '/titles';
        return this.http.put(url, JSON.stringify(title), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Title)
            .catch(this.handleError);
    }

    deleteTitle(title: Title): boolean {
        console.log('No delete request will be send in demo.');
        return true;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}