package com.tom.service;

import com.tom.domain.Employee;
import com.tom.domain.Transfer;
import com.tom.mappers.DepartmentMapper;
import com.tom.mappers.EmployeeMapper;
import com.tom.mappers.TransferMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by tom on 1/9/2017.
 */
@Service
public class TransferService {

    @Autowired
    TransferMapper transferMapper;
    @Autowired
    DepartmentMapper departmentMapper;

    public List<Transfer> findTransfersForEmployee(Integer emp_no){
        List<Transfer> transfers = transferMapper.selectTransfersForEmployee(emp_no);
        transfers.forEach(transfer -> transfer.setDepartmentName(departmentMapper.getDeptNameById(transfer.getDept_no())));
        return transfers;
    }

    public Transfer checkIfTransferExist(Transfer transfer) {
        List<Transfer> transfers = findTransfersForEmployee(transfer.getEmp_no());
        if (!transfers.isEmpty()) {
            for (Transfer each: transfers) {
                if (each.isSQLEquals(transfer))
                    return each;
            }
            return null;
        }
        return null;
    }

    public boolean insertEmpTransfer(Transfer transfer) {
        return transferMapper.insertEmpTransfer(transfer);
    }

    public boolean insertMngTransfer(Transfer transfer) {
        return transferMapper.insertMngTransfer(transfer);
    }

    public boolean updateEmpTransfer(Transfer oldTransfer, Transfer newTransfer) {
        return transferMapper.updateEmpTransfer(oldTransfer, newTransfer);
    }

    public boolean updateMngTransfer(Transfer transfer) {
        return transferMapper.updateMngTransfer(transfer);
    }

    public boolean deleteEmpTransfer(Transfer transfer){
        return transferMapper.deleteEmpTransfer(transfer);
    }

    public boolean deleteMngTransfer(Transfer transfer){
        return transferMapper.deleteMngTransfer(transfer);
    }
}
