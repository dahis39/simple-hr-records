import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Employee } from '../domain/employee';
import { EmployeeService } from '../service/employee.service';
import { DepartmentService } from '../service/department.service';
import { CacheService } from '../service/cache.service';

@Component({
    selector: 'my-dept-employees-list',
    templateUrl: './deptEmployeesList.component.html',
    styleUrls: ['./deptEmployeesList.component.css']
})
export class DeptEmployeesList implements OnInit {

    employees: Employee[] = [];
    scrollPageNum: number = 1;
    deptNum: string;
    deptName: string;

    isDeleting: boolean = false;
    tempDeleteEmp: Employee;

    constructor(private employeeService: EmployeeService,
        private departmentService: DepartmentService,
        private route: ActivatedRoute,
        private cacheService: CacheService) { }

    ngOnInit(): void {
        this.route.params
            .pipe(switchMap((params: Params) => this.departmentService.getEmployeesByDeptNo(params['id'], this.scrollPageNum)))
            .subscribe((emps: Employee[]) => this.employees = emps);

        this.deptNum = this.route.snapshot.params['id'];

        // get object property name by value( get key by value ).
        let idNamePairs: any = this.cacheService.getDepartmentsIdNamePairs();
        let keys = Object.keys(idNamePairs);
        for (let i = 0; i < keys.length; i++) {
            if (idNamePairs[keys[i]] === this.deptNum) {
                this.deptName = keys[i];
            }
        }
    }

    onScrollDown(): void {
        this.scrollPageNum++;
        this.departmentService.getEmployeesByDeptNo(this.deptNum, this.scrollPageNum)
            .then(emps => this.employees = this.employees.concat(emps));
    }

    // Delete event for employee.
    onEmployeeDeleting(employee: Employee): void {
        this.isDeleting = true;
        this.tempDeleteEmp = employee;
    }
    commitDelete(): void {
        this.onEmployeeDelete(this.tempDeleteEmp);
        this.isDeleting = false;
    }
    cancelDelete(): void {
        this.isDeleting = false;
    }
    onEmployeeDelete(employee: Employee): void {
        // server delete request
        this.employeeService.deleteEmployee(employee);
        // view object delect
        this.employees = this.employees.filter(emp => emp.id !== employee.id);
    }

    trackByEmployees(index: number, employee: Employee) { return employee.id; }
}