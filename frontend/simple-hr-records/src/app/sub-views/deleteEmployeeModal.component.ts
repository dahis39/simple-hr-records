import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Employee } from '../domain/employee';

import { CacheService } from '../service/cache.service';

@Component({
    selector: 'delete-employee-modal',
    templateUrl: './deleteEmployeeModal.component.html',
    styleUrls: ['./deleteEmployeeModal.component.css']
})
export class DeleteEmployeeModal {

    @Input()
    employee: Employee;
    @Output()
    deleteRequest = new EventEmitter<Employee>();

    cancelDelete() {
        this.employee = undefined;
        this.deleteRequest.emit(this.employee);
    }

    commitDelete() {
        this.deleteRequest.emit(this.employee);
        this.employee = undefined;
    }
}