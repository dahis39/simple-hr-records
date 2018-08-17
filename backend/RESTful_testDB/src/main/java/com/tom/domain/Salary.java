package com.tom.domain;

import javax.validation.constraints.NotNull;

/**
 * Created by tom on 12/22/2016.
 */
public class Salary {
    @NotNull
    private Integer emp_no;
    private Integer salary;
    @NotNull
    private String fromDate;
    private String toDate;

    public Integer getEmp_no() {
        return emp_no;
    }

    public void setEmp_no(Integer emp_no) {
        this.emp_no = emp_no;
    }

    public Integer getSalary() {
        return salary;
    }

    public void setSalary(Integer salary) {
        this.salary = salary;
    }

    public String getFromDate() {
        return fromDate;
    }

    public void setFromDate(String fromDate) {
        this.fromDate = fromDate;
    }

    public String getToDate() {
        return toDate;
    }

    public void setToDate(String toDate) {
        this.toDate = toDate;
    }

    public Boolean isSQLEquals(Salary salary){
        return this.getEmp_no().intValue() == salary.emp_no.intValue() && this.getFromDate().equals(salary.getFromDate());
    }
}
