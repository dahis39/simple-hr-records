import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable() 
export class HttpClientBaseService {
    public serverUrl: string = 'http://216.200.116.172:8080/RESTful_testDB/api/';

    protected headers = new Headers({
        'Content-Type': 'application/json;charset=utf-8'
    });

    constructor(public http: Http) { }

    notifyAuthHeaderChange(username: string, password: string): void {
        if (!(username === undefined || '') || !(password === undefined || '')) {   // if any param = undefined or null, don't append.
            if (this.headers.has("Authorization")) {
                this.headers.set("Authorization", "Basic " + btoa(username + ":" + password));   //reset the header
            } else {
                this.headers.append("Authorization", "Basic " + btoa(username + ":" + password));
            }
        }
    }

    getServerUrl(): string {
        return this.serverUrl;
    }
}