package com.tom.domain;

import java.util.List;

/**
 * Created by tom on 12/24/2016.
 */
public class DepartmentTransfer extends Department {
    private List<Employee> employees;

    public List<Employee> getEmployees() {
        return employees;
    }

    public void setEmployees(List<Employee> employees) {
        this.employees = employees;
    }
}
