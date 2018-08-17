package com.tom.controller;

import com.tom.domain.Salary;
import com.tom.service.EmployeeService;
import com.tom.service.SalaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by tom on 1/8/2017.
 */
@RestController
@CrossOrigin
@RequestMapping(value = "/api/employees/{id}/salaries")
public class SalaryController {

    @Autowired
    SalaryService salaryService;
    @Autowired
    EmployeeService employeeService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getEmployeeSalaries(@PathVariable Integer id){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Salary>>(salaryService.findSalariesForEmployee(id), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> addEmployeeSalary(@PathVariable Integer id, @Valid @RequestBody Salary salary){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (salaryService.checkIfSalaryExist(salary) != null){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (salaryService.insertSalary(salary)){
            return new ResponseEntity<Salary>(salary, HttpStatus.CREATED);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> saveOrUpdateEmployeeSalary(@PathVariable Integer id, @Valid @RequestBody Salary salary){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (id.intValue() != salary.getEmp_no().intValue()){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (salaryService.saveOrUpdate(salary)){
            return new ResponseEntity<Salary>(salary, HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/keysupdate", method = RequestMethod.POST)
    public ResponseEntity<?> updateEmployeeTitleKeys(@PathVariable Integer id, @Valid @RequestBody List<Salary> salaries){
        if (salaries.size() != 2){
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
        if (salaries.get(0).getEmp_no().intValue() != id && salaries.get(1).getEmp_no().intValue() != id){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (salaryService.checkIfSalaryExist(salaries.get(0)) != null){
            if (salaryService.updateSalary(salaries.get(0), salaries.get(1))){
                return new ResponseEntity<Salary>(salaries.get(1), HttpStatus.OK);
            }
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<Void> deleteEmployeeTitle(@PathVariable Integer id, @Valid @RequestBody Salary salary){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (salary.getEmp_no().intValue() != id.intValue()){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (salaryService.deleteSalary(salary)){
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
