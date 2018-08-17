package com.tom.domain;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.validation.constraints.NotNull;
import java.util.Date;

/**
 * Created by tom on 12/21/2016.
 */
public class Title {

    @NotNull
    private Integer emp_no;
    @NotNull
    private String titleName;
    @NotNull
    private String fromDate;
    private String toDate;

    public Integer getEmp_no() {
        return emp_no;
    }

    public void setEmp_no(Integer emp_no) {
        this.emp_no = emp_no;
    }

    public String getTitleName() {
        return titleName;
    }

    public void setTitleName(String titleName) {
        this.titleName = titleName;
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

    public Boolean isSQLEquals(Title title){
        return (this.getEmp_no().intValue() == title.getEmp_no().intValue())
                && (this.getTitleName().equals(title.getTitleName()))
                && (this.getFromDate().equals(title.getFromDate()));
    }

    @Override
    public String toString() {
        return "Title{" +
                "emp_no=" + emp_no +
                ", titleName='" + titleName + '\'' +
                ", fromDate='" + fromDate + '\'' +
                ", toDate='" + toDate + '\'' +
                '}';
    }
}