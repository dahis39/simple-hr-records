import { Component, Input, Output, EventEmitter, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../domain/employee';

import { CacheService } from '../service/cache.service';
import { EmployeeService } from '../service/employee.service';

@Component({
    selector: 'employee-item',
    templateUrl: './employee.component.html',
    styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit, OnChanges {
    @Input()
    employee: Employee;

    @Output()
    deleteRequest = new EventEmitter<Employee>();

    private fullname: string;
    private genderList: string[];
    eventObject: Event;

    constructor(private router: Router, private employeeService: EmployeeService, private cacheService: CacheService) { }

    ngOnInit() {
        this.fullname = this.employee.firstName + ' ' + this.employee.lastName;
        this.genderList = this.cacheService.getGenderList();
    }

    ngOnChanges() {
        this.ngOnInit();
    }

    reset() {
        this.ngOnInit();
    }

    onValueChange(returnData: any): void {
        if (returnData.fieldName === 'name') {
            this.fullname = returnData.data;

            let nameArray = returnData.data.split(' ');
            if (nameArray.length === 3) {
                this.employee.firstName = nameArray[0] + ' ' + nameArray[1];
                this.employee.lastName = nameArray[2];
            }
            if (nameArray.length === 2) {
                this.employee.firstName = nameArray[0];
                this.employee.lastName = nameArray[1];
            }
        }
        else {
            this.employee[returnData.fieldName] = returnData.data;
        }
        this.employeeService.updateEmployee(this.employee).then(emp => this.employee = emp);
    }

    onDelete(): void {
        this.deleteRequest.emit(this.employee);
    }

    openEmployeeDetail(): void {
        this.router.navigate(['/employee-detail/' + this.employee.id]);
    }
}