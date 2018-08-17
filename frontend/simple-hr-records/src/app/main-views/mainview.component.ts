import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from  'rxjs/operators';

import { Employee } from '../domain/employee';
import { EmployeeService } from '../service/employee.service';
import { CacheService } from '../service/cache.service';

@Component({
  selector: 'my-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.css']
})
export class MainviewComponent implements OnInit, OnDestroy {

  employeesFullList: Employee[] = [];
  employeesSearchList: Employee[] = [];

  deletingEmp: Employee;

  onNew:boolean = false;

  scrollPageFullList: number = 1;
  scrollPageSearchList: number = 1;

  isSearching: boolean = false;
  searchKey: string;

  hasSearchError: boolean = false;
  searchError: string;

  searchControl = new FormControl();

  constructor(private router: Router, private employeeService: EmployeeService, private cacheService: CacheService) { }

  ngOnInit(): void {
    if (this.cacheService.getCacheState()) {
      this.reloadState();
    } else {
      this.populateFullList();
    }
    this.subscribeSearchControl();
  }

  ngOnDestroy(): void {
    this.cacheService.setFullEmpList(this.employeesFullList);
    this.cacheService.setSearchEmpList(this.employeesSearchList);
    this.cacheService.setSearchKeyword(this.searchKey);
  }

  populateFullList(): void {
    this.employeeService.getEmployees(1).then(employees => {
      this.employeesFullList = employees;
    });
  }

  reloadState(): void {
    this.employeesFullList = this.cacheService.getFullEmpList();
    this.employeesSearchList = this.cacheService.getSearchEmpList();
    this.scrollPageFullList = this.cacheService.getFullListScrollPageCount();
    this.scrollPageSearchList = this.cacheService.getSearchListScrollPageCount();
    this.searchControl.setValue(this.cacheService.getSearchKeyword());
    this.searchKey = this.cacheService.getSearchKeyword();
  }

  subscribeSearchControl(): void {
    this.searchControl.valueChanges
      .pipe(debounceTime(400))
      .subscribe(searchControlValue => {                   // search input changes tracking
        let value: string = searchControlValue;

        if (value.length === 0) {
          this.hasSearchError = false;
          this.employeesSearchList = [];
        } else if (value.length < 3) {
          this.hasSearchError = true;
          this.searchError = 'Keyword is too short.';
          this.employeesSearchList = [];
        } else {

          this.hasSearchError = false;
          this.employeesSearchList = [];

          this.employeeService.searchEmployees(value, this.scrollPageSearchList).then(employees =>
            this.employeesSearchList = this.employeesSearchList.concat(employees));
        }
        this.searchKey = value;
      });
  }

  // Scrolling event.
  getMoreEmployees(pageNum: number): void {
    if (this.isSearching) {
      this.employeeService.searchEmployees(this.searchKey, pageNum).then(employees =>
        this.employeesSearchList = this.employeesSearchList.concat(employees));

    } else {
      this.employeeService.getEmployees(pageNum).then(employees =>
        this.employeesFullList = this.employeesFullList.concat(employees));
    }
  }
  onScrollDown() {
    if (this.isSearching) {
      this.scrollPageSearchList++;
      this.getMoreEmployees(this.scrollPageSearchList);
    } else {
      this.scrollPageFullList++;
      this.getMoreEmployees(this.scrollPageFullList);
    }
  }

  // Switching between two views.
  onSearch() {
    this.isSearching = true;
  }
  onFullList() {
    this.isSearching = false;
  }

  // Delete event for employee.
  onEmployeeDeleting(employee: Employee): void {
    this.deletingEmp = employee;
  }
  onCommitDelete(employee: Employee): void {
    if (employee === undefined) {
      this.deletingEmp = undefined;
    } else {
      this.employeeService.deleteEmployee(employee);
    
      this.employeesFullList = this.employeesFullList.filter(emp => emp.id !== employee.id);
      this.employeesSearchList = this.employeesSearchList.filter(emp => emp.id !== employee.id);
    }
  }

  // Add new employee event.
  createEmployee() {
    this.onNew = true;
  }
  addNewEmployee(employee: Employee) {
    if (employee !== undefined) {
      this.employeesFullList.unshift(employee);
    }
    this.onNew = false;
  }

  // Eliminate same employees by checking id.
  trackByEmployees(index: number, employee: Employee) { return employee.id; }
}