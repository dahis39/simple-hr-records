package com.tom.domain;

import java.util.List;

/**
 * Created by tom on 12/22/2016.
 */
public class EmployeeDetail extends EmployeeTransfer {
    private List<Title> titles;
    private List<Salary> salaries;

    public List<Title> getTitles() {
        return titles;
    }

    public void setTitles(List<Title> titles) {
        this.titles = titles;
    }

    public List<Salary> getSalaries() {
        return salaries;
    }

    public void setSalaries(List<Salary> salaries) {
        this.salaries = salaries;
    }
}
