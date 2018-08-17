package com.tom.controller;

import com.tom.domain.Department;
import com.tom.domain.DepartmentTransfer;
import com.tom.domain.Employee;
import com.tom.mappers.DepartmentMapper;
import com.tom.service.DepartmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by tom on 1/3/2017.
 */
@RestController
@CrossOrigin
public class DepartmentsController {

    @Autowired
    private DepartmentService departmentService;

    @RequestMapping(value = "/api/departments", method = RequestMethod.GET)
    public List<Department> listAllDepts() {
        return departmentService.listAllDepartments();
    }

    @RequestMapping(value = "/api/departments/{dept_no}", method = RequestMethod.GET)
    public List<Employee> findDepartmentById(@PathVariable String dept_no, @RequestParam Integer offset, @RequestParam Integer limit) {
        return departmentService.getEmployeesByDeptNo(dept_no, offset, limit);
    }
}
