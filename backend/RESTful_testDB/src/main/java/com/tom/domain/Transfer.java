package com.tom.domain;

import javax.validation.constraints.NotNull;
import java.sql.Date;

/**
 * Created by tom on 12/24/2016.
 */
public class Transfer {
    private String departmentName;
    @NotNull
    private Integer emp_no;
    @NotNull
    private String dept_no;
    private String fromDate;
    private String toDate;

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public Integer getEmp_no() {
        return emp_no;
    }

    public void setEmp_no(Integer emp_no) {
        this.emp_no = emp_no;
    }

    public String getDept_no() {
        return dept_no;
    }

    public void setDept_no(String dept_no) {
        this.dept_no = dept_no;
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

    public Boolean isSQLEquals(Transfer transfer){
        return this.getEmp_no().intValue() == transfer.emp_no.intValue() || this.getDept_no().equals(transfer.getDept_no());
    }

    @Override
    public String toString() {
        return "Transfer{" +
                "departmentName='" + departmentName + '\'' +
                ", emp_no=" + emp_no +
                ", dept_no='" + dept_no + '\'' +
                ", fromDate='" + fromDate + '\'' +
                ", toDate='" + toDate + '\'' +
                '}';
    }
}
