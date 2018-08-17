import { Injectable } from '@angular/core';
import { Employee } from '../domain/employee';
import { Department } from '../domain/department';

@Injectable()
export class CacheService {

    private fullEmpList: Employee[] = [];
    private searchEmpList: Employee[] = [];

    private genderList: string[] = ["M", "F"];

    private departmentsList: Department[];
    private departmentsIdNamePairs: any;

    private searchKeyword: string;
    private isMainviewCache: boolean = false;

    getCacheState(): boolean {
        return this.isMainviewCache;
    }

    expireMainviewCache(): void {
        this.isMainviewCache = false;
    }

    getGenderList(): string[] {
        return this.genderList;
    }

    // TODO: splite to two cache services. These methods and fields are for a global cache name pair object, and the rest are for presistence of mainview page.
    setDepartments(dep: Department[]): void {
        this.departmentsList = dep;
        this.departmentsIdNamePairs = {};
        for (let i = 0; i < this.departmentsList.length; i++) {
            this.departmentsIdNamePairs[this.departmentsList[i].dept_name] = this.departmentsList[i].dept_no;  // dept_name is key, dept_no is value.
        }
    }
    getDepartments(): Department[] {
        return this.departmentsList;
    }
    getDepartmentsIdNamePairs(): any {
        return this.departmentsIdNamePairs;
    }

    getFullEmpList(): Employee[] {
        return this.fullEmpList;
    }

    setFullEmpList(list: Employee[]): void {
        this.fullEmpList = list;
        this.isMainviewCache = true;
    }

    getFullListScrollPageCount(): number {
        let lenght = this.fullEmpList.length;
        if (length !== 0 && lenght >= 60) {
            return Math.floor(length / 30);
        }
        return 1;
    }

    getSearchEmpList(): Employee[] {
        return this.searchEmpList;
    }

    setSearchEmpList(list: Employee[]): void {
        this.searchEmpList = list;
        this.isMainviewCache = true;
    }

    getSearchListScrollPageCount(): number {
        let lenght = this.fullEmpList.length;
        if (length !== 0 && lenght >= 60) {
            return Math.floor(length / 30);
        }
        return 1;
    }

    getSearchKeyword(): string {
        return this.searchKeyword;
    }

    setSearchKeyword(str: string): void {
        this.searchKeyword = str;
        this.isMainviewCache = true;
    }
}