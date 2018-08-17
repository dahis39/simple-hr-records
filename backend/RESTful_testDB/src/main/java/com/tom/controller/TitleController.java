package com.tom.controller;

import com.tom.domain.Employee;
import com.tom.domain.Title;
import com.tom.service.EmployeeService;
import com.tom.service.TitleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

/**
 * Created by tom on 1/4/2017.
 */
@RestController
@CrossOrigin
@RequestMapping(value = "/api/employees/{id}/titles")
public class TitleController {

    @Autowired
    private EmployeeService employeeService;
    @Autowired
    private TitleService titleService;

    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<?> getEmployeeTitles(@PathVariable Integer id){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<List<Title>>(titleService.findTitlesForEmployee(id), HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<?> addEmployeeTitle(@PathVariable Integer id, @Valid @RequestBody Title newTitle){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (titleService.checkIfTitleExist(newTitle) != null){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (titleService.insertTitle(newTitle)){
            return new ResponseEntity<Title>(newTitle, HttpStatus.CREATED);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<?> saveOrUpdateEmployeeTitle(@PathVariable Integer id, @Valid @RequestBody Title newTitle){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (newTitle.getEmp_no().intValue() != id.intValue()){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (titleService.saveOrUpdate(newTitle)){
            return new ResponseEntity<Title>(newTitle, HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/keysupdate", method = RequestMethod.POST)
    public ResponseEntity<?> updateEmployeeTitleKeys(@PathVariable Integer id, @Valid @RequestBody List<Title> titles){
        if (titles.size() != 2){
            return new ResponseEntity<Void>(HttpStatus.BAD_REQUEST);
        }
        if (titles.get(0).getEmp_no().intValue() != id && titles.get(1).getEmp_no().intValue() != id){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (titleService.checkIfTitleExist(titles.get(0)) != null){
            if (titleService.updateTitle(titles.get(0), titles.get(1))){
                return new ResponseEntity<Title>(titles.get(1), HttpStatus.OK);
            }
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @RequestMapping(value = "/delete", method = RequestMethod.POST)
    public ResponseEntity<Void> deleteEmployeeTitle(@PathVariable Integer id, @Valid @RequestBody Title targetTitle){
        if (employeeService.findEmployeeById(id) == null){
            return new ResponseEntity<Void>(HttpStatus.NOT_FOUND);
        }
        if (targetTitle.getEmp_no().intValue() != id.intValue()){
            return new ResponseEntity<Void>(HttpStatus.CONFLICT);
        }
        if (titleService.deleteTile(targetTitle)){
            return new ResponseEntity<Void>(HttpStatus.OK);
        }
        return new ResponseEntity<Void>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
