import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Employee } from '../domain/employee';
import { EmployeeService } from '../service/employee.service';
import { CacheService } from '../service/cache.service';

@Component({
    selector: 'new-employee-modal',
    templateUrl: './newEmployee.component.html',
    styles: [`
        .modal { display:block; margin-top: 200px;}
        h2 { color: #369; }
        .overlay {
            display: block;
            height: 100%;
            width: 100%;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            background-color: rgb(0,0,0);
            background-color: rgba(0,0,0, 0.8);
            overflow-x: hidden;
            transition: 0.5s;
        }
    `]
})
export class NewEmployee implements OnInit {

    @Input()
    onNew: boolean;
    @Output()
    newEmployee = new EventEmitter<Employee>();

    employee: Employee;
    genderList: string[] = [];

    constructor(private employeeService: EmployeeService, private cacheService: CacheService) { }

    ngOnInit(): void {
        this.onNew = false;
        this.employee = {
            firstName: '',
            lastName: '',
            gender: '',
            birthDate: '',
            hireDate: '',
            version: 0
        } as Employee;
        this.genderList = this.cacheService.getGenderList();
    }

    submit() {
        this.employeeService.addEmployee(this.employee)
            .then(emp => {
                this.cacheService.expireMainviewCache();
                this.newEmployee.emit(emp);
                this.ngOnInit();
            });
    }

    cancel() {
        this.newEmployee.emit(undefined);
        this.ngOnInit();
    }
}