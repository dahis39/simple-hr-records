import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { switchMap } from  'rxjs/operators';

import { Employee } from '../domain/employee';
import { Title } from '../domain/title';
import { Salary } from '../domain/salary';
import { Transfer } from '../domain/transfer';
import { EmployeeService } from '../service/employee.service';
import { TitleService } from '../service/title.service';
import { SalaryService } from '../service/salary.service';
import { TransferService } from '../service/transfer.service';
import { CacheService } from '../service/cache.service';

@Component({
    selector: 'my-employee-detail',
    templateUrl: './employeeDetail.component.html',
    styleUrls: ['./employeeDetail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

    employee: Employee;
    titles: Title[] = [];
    salaries: Salary[] = [];
    transfers: Transfer[] = [];

    departmentsIdNamePairs: any;
    deptNameList: string[] = [];
    deptNumList: string[] = [];

    deletingEmp: Employee;

    hasError: boolean = false;
    errMassage: string;

    constructor(
        private employeeService: EmployeeService,
        private titleService: TitleService,
        private salaryService: SalaryService,
        private transferService: TransferService,
        private cacheService: CacheService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit(): void {
        this.route.params
            .pipe(switchMap((params: Params) => this.employeeService.getEmployeeById(+params['id'])))
            .subscribe((employee: Employee) => this.employee = employee);

        this.route.params
            .pipe(switchMap((params: Params) => this.titleService.getTitlesByEmpId(+params['id'])))
            .subscribe((titles: Title[]) => this.titles = titles);

        this.route.params
            .pipe(switchMap((params: Params) => this.salaryService.getSalariesByEmpId(+params['id'])))
            .subscribe((salaries: Salary[]) => this.salaries = salaries);

        this.route.params
            .pipe(switchMap((params: Params) => this.transferService.getTransfersByEmpId(+params['id'])))
            .subscribe((transfers: Transfer[]) => this.transfers = transfers);

        this.departmentsIdNamePairs = this.cacheService.getDepartmentsIdNamePairs();
        for (let k in this.departmentsIdNamePairs) {
            if (this.departmentsIdNamePairs.hasOwnProperty(k)) {
                this.deptNameList.push(k);
                this.deptNumList.push(this.departmentsIdNamePairs[k]);
            }
        }
    }

    onEmployeeDeleting(employee: Employee) {
        this.deletingEmp = employee;
    }
    onCommitDelete(employee: Employee): void {
        if (employee === undefined) {
            this.deletingEmp = undefined;
        } else {
            // request delete on server
            this.employeeService.deleteEmployee(this.employee);
            // delelte on view.
            this.employee = undefined;
            // cache expired.
            this.cacheService.expireMainviewCache();
            this.router.navigate(['/employees']);
        }
    }

    // Title
    onTitleDelete(i: number): void {
        // request delete on server
        this.titleService.deleteTitle(this.titles[i]);

        // delelte on view.
        this.titles.splice(i, 1);
    }
    onTitleValueChange(returnValue: any, i: number): void {
        let oldTitle = Object.assign(new Title(), this.titles[i]);
        let tempTitle = Object.assign(new Title(), this.titles[i]);
        tempTitle[returnValue.fieldName] = returnValue.data;

        let submitTitles: Title[] = [oldTitle, tempTitle];
        this.titleService.updateTitle(submitTitles)
            .then(title => this.titles[i] = title);
    }
    newTitle() {
        let newTitle = {
            emp_no: this.employee.id,
            titleName: 'New Title',
            toDate: '9999-01-01',
            fromDate: this.getCurrentDate()
        } as Title;
        this.titleService.addNewTitle(newTitle)
            .then(returnTitle => this.titles.push(returnTitle))
            .catch(err => {
                if (err.status === 409) {
                    this.duplicationError();
                }
            });
    }

    // Salary
    onSalaryDelete(i: number): void {
        // request delete on server
        this.salaryService.deleteSalary(this.salaries[i]);

        // delelte on view.
        this.salaries.splice(i, 1);
    }
    onSalaryValueChange(returnValue: any, i: number): void {
        let oldSalary = Object.assign(new Salary(), this.salaries[i]);
        let tempSalary = Object.assign(new Salary(), this.salaries[i]);
        tempSalary[returnValue.fieldName] = returnValue.data;

        let submitSalaries: Salary[] = [oldSalary, tempSalary];
        this.salaryService.updateSalary(submitSalaries)
            .then(salary => this.salaries[i] = salary);
    }
    newSalary() {
        let newSalary = {
            emp_no: this.employee.id,
            salary: 1,
            toDate: '9999-01-01',
            fromDate: this.getCurrentDate()
        } as Salary;
        this.salaryService.addNewSalary(newSalary)
            .then(returnSalary => this.salaries.push(returnSalary))
            .catch(err => {
                if (err.status === 409) {
                    this.duplicationError();
                }
            });
    }

    // Transfer
    onTransferValueChange(returnValue: any, i: number): void {
        let oldTransfer = Object.assign(new Transfer(), this.transfers[i]);
        let tempTransfer = Object.assign(new Transfer(), this.transfers[i]);

        if (returnValue.fieldName === 'departmentName') {
            tempTransfer.dept_no = this.departmentsIdNamePairs[returnValue.data];
            tempTransfer.departmentName = returnValue.data;
        } else {
            tempTransfer[returnValue.fieldName] = returnValue.data;
        }

        let submitTransfers: Transfer[] = [oldTransfer, tempTransfer];
        this.transferService.updateTransfer(submitTransfers).then(
            transfer => this.transfers[i] = transfer);
    }
    onTransferDelete(i: number): void {
        // request delete on server
        this.transferService.deleteTransfer(this.transfers[i]);

        // delelte on view.
        this.transfers.splice(i, 1);
    }
    newTransfer() {
        let newTransfer = {
            departmentName: 'Marketing',
            emp_no: this.employee.id,
            dept_no: 'd001',
            toDate: '9999-01-01',
            fromDate: this.getCurrentDate()
        } as Transfer;
        this.transferService.addNewTransfer(newTransfer)
            .then(returnTransfer => this.transfers.push(returnTransfer))
            .catch(err => {
                if (err.status === 409) {
                    this.duplicationError();
                }
            });
    }

    // Error notification
    duplicationError() {
        this.hasError = true;
        this.errMassage = "Server error code: 409. Duplicated object with the same primary key(s) already exist. Please edit first."
    }
    dismissError() {
        this.hasError = false;
    }

    getCurrentDate(): string {
        let date = new Date();
        return date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-' + ("0" + date.getDate()).slice(-2);
    }
}