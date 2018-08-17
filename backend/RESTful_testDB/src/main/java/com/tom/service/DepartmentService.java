package com.tom.service;

import com.tom.domain.Department;
import com.tom.domain.DepartmentTransfer;
import com.tom.domain.Employee;
import com.tom.mappers.DepartmentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

/**
 * Created by tom on 1/13/2017.
 */
@Service
public class DepartmentService {

    @Autowired
    DepartmentMapper departmentMapper;

    public List<Department> listAllDepartments() { return departmentMapper.listAll(); }

    public String getDeptNameById(String id) { return departmentMapper.getDeptNameById(id); }

    public List<Employee> getEmployeesByDeptNo(String dept_no, int offset, int limit){
        return departmentMapper.selectCurrentEmployeesByDeptNo(dept_no, offset, limit);
    }
}
