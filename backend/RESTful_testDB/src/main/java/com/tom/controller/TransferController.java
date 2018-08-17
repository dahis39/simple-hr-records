package com.tom.controller;

import com.tom.domain.Transfer;
import com.tom.service.EmployeeService;
import com.tom.service.TransferService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by tom on 1/10/2017.
 */

@RestController
@CrossOrigin
@RequestMapping(value = "/api/employees/{id}/transfers")
public class TransferController {

    @Autowired
    EmployeeService employeeService;
    @Autowired
    TransferService transferService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getEmployeeTransfers(@PathVariable Integer id){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        List<Transfer> transfers = transferService.findTransfersForEmployee(id);
        return new ResponseEntity<List<Transfer>>(transfers, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> addEmployeeTransfers(@PathVariable Integer id, @Valid @RequestBody Transfer transfer) {
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (transferService.checkIfTransferExist(transfer) != null){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (transferService.insertEmpTransfer(transfer)){
            return new ResponseEntity<Transfer>(transfer, HttpStatus.CREATED);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/manager", method = RequestMethod.PUT)
    public ResponseEntity<?> addManagerTransfers(@PathVariable Integer id, @Valid @RequestBody Transfer transfer) {
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (transfer.getEmp_no().intValue() != id.intValue()){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (transferService.insertMngTransfer(transfer)){
            return new ResponseEntity<Transfer>(transfer, HttpStatus.CREATED);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> updateEmployeeTransfer(@PathVariable Integer id, @Valid @RequestBody List<Transfer> transfers){
        if (transfers.size() != 2){
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
        if (transfers.get(0).getEmp_no().intValue() != id && transfers.get(1).getEmp_no().intValue() != id){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (transferService.updateEmpTransfer(transfers.get(0),transfers.get(1))){
            return new ResponseEntity<Transfer>(transfers.get(1), HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/manager", method = RequestMethod.POST)
    public ResponseEntity<?> updateManagerTransfer(@PathVariable Integer id, @Valid @RequestBody Transfer transfer){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (transfer.getEmp_no().intValue() != id.intValue()){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (transferService.updateMngTransfer(transfer)){
            return new ResponseEntity<Transfer>(transfer, HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteEmployerTransfer(@PathVariable Integer id, @Valid @RequestBody Transfer transfer) {
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (transfer.getEmp_no().intValue() != id.intValue()){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (transferService.deleteEmpTransfer(transfer)){
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/manager", method = RequestMethod.DELETE)
    public ResponseEntity<?> deleteManagerTransfer(@PathVariable Integer id, @Valid @RequestBody Transfer transfer) {
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (transfer.getEmp_no().intValue() != id.intValue()){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (transferService.deleteMngTransfer(transfer)){
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
