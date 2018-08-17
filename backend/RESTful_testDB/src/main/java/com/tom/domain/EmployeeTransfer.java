package com.tom.domain;

import java.sql.Date;
import java.util.List;

/**
 * Created by tom on 12/24/2016.
 */
public class EmployeeTransfer extends Employee {
    private List<Transfer> transfers;

    public List<Transfer> getTransfers() {
        return transfers;
    }

    public void setTransfers(List<Transfer> transfers) {
        this.transfers = transfers;
    }
}
