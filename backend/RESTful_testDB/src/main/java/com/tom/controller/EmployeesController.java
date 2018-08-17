package com.tom.controller;

import com.tom.domain.*;
import com.tom.mappers.DepartmentMapper;
import com.tom.mappers.EmployeeMapper;
import com.tom.service.EmployeeService;
import com.tom.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.sql.Date;
import java.util.Calendar;
import java.util.List;

/**
 * Created by tom on 12/8/2016.
 */

@RestController
@CrossOrigin
@RequestMapping(value = "/api/employees")
public class EmployeesController {

    @Autowired
    private EmployeeService employeeService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> paginationEmployees(@RequestParam Integer offset, @RequestParam Integer limit){
        if (limit - offset >= 101) {
            return new ResponseEntity<Void>(HttpStatus.PAYLOAD_TOO_LARGE);
        }
        List<Employee> employees = employeeService.paginationEmployees(offset, limit);
        if (employees.isEmpty()){
            return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
    }

    @RequestMapping(value = "/search/{keyword}", method = RequestMethod.GET)
    public ResponseEntity<?> searchEmployees(@PathVariable("keyword") String keyword, @RequestParam Integer offset, @RequestParam Integer limit) {
        if (limit - offset >= 101) {
            return new ResponseEntity<Void>(HttpStatus.PAYLOAD_TOO_LARGE);
        }
        List<Employee> employees = employeeService.searchEmployeesByKeyword(keyword, offset, limit);
        if (employees.isEmpty()){
            return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<List<Employee>>(employees, HttpStatus.OK);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> findEmployeeById(@PathVariable Integer id) {
        Employee emp = employeeService.findEmployeeById(id);
        if (emp == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Employee>(emp, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> addEmployee(@Valid @RequestBody Employee recieveEmp){
        if (employeeService.insertEmployee(recieveEmp)){
            return new ResponseEntity<Employee>(employeeService.findEmployeeById(recieveEmp.getId()) ,HttpStatus.CREATED);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.POST)
    public ResponseEntity<?> updateEmployee(@PathVariable Integer id, @Valid @RequestBody Employee receiveEmp){
        Employee emp = employeeService.findEmployeeById(id);
        if (emp == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (emp.getId().intValue() != receiveEmp.getId().intValue() || emp.getVersion().intValue() != receiveEmp.getVersion().intValue()) {
            return new ResponseEntity<Void>(HttpStatus.PRECONDITION_FAILED);
        }
        if (employeeService.updateEmployee(receiveEmp)){
            return new ResponseEntity<Employee>(employeeService.findEmployeeById(id) ,HttpStatus.ACCEPTED);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Void> deleteEmployee(@PathVariable Integer id){
        if (employeeService.deleteEmployeeById(id)){
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
    }
}
