import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { HttpClientBaseService } from './http-client-base.service';
import { Transfer } from '../domain/transfer';

@Injectable()
export class TransferService extends HttpClientBaseService {
    private baseUrl = this.serverUrl + 'employees/';

    constructor(public http: Http) { super(http); }

    getTransfersByEmpId(id: number): Promise<Transfer[]> {
        let url = this.baseUrl + id + '/transfers';
        return this.http.get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Transfer[])
            .catch(this.handleError);
    }

    updateTransfer(transfers: Transfer[]): Promise<Transfer> {
        let url = this.baseUrl + transfers[0].emp_no + '/transfers';
        return this.http.post(url, JSON.stringify(transfers), { headers: this.headers })
                    .toPromise()
                    .then(response => response.json() as Transfer)
                    .catch(this.handleError);
    }

    addNewTransfer(transfer: Transfer): Promise<Transfer> {
        let url = this.baseUrl + transfer.emp_no + '/transfers';
        return this.http.put(url, JSON.stringify(transfer), { headers: this.headers })
                    .toPromise()
                    .then(response => response.json() as Transfer)
                    .catch(this.handleError);
    }

    deleteTransfer(transfer: Transfer): boolean {
        console.log('No delete request will be send in demo.');
        return true;
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}