import { Component, OnInit } from '@angular/core';

import { Department } from '../domain/department';
import { Employee } from '../domain/employee';
import { DepartmentService } from '../service/department.service';
import { EmployeeService } from '../service/employee.service';
import { CacheService } from '../service/cache.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-mainview',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {

  departments: Department[] = [];

  deletingEmp: Employee;
  deleteEmpDepIndex: number;

  constructor(private departmentService: DepartmentService,
              private employeeService: EmployeeService,
              private cacheService: CacheService,
              private router: Router
    ) { }

  ngOnInit(): void {
    this.departmentService.getDepartments().then(deps => this.departments = deps);
  }

  navigateToDeptEmpsList(deptNum: string): void {
    this.router.navigate(['/dept-emps-list/' + deptNum]);
  }

  // Delete event for employee.
  onEmployeeDeleting(employee: Employee, i: number): void {
    this.deletingEmp = employee;
    this.deleteEmpDepIndex = i;
  }
  onCommitDelete(employee: Employee): void {
    if (employee === undefined) {
      this.deletingEmp = undefined;
    } else {
      // server delete request
      this.employeeService.deleteEmployee(employee);
      // view object delect
      this.departments[this.deleteEmpDepIndex].managers = this.departments[this.deleteEmpDepIndex].managers
        .filter(emp => emp.id !== employee.id);
    }
  }
}