package com.tom.service;

import com.tom.domain.Employee;
import com.tom.domain.Salary;
import com.tom.mappers.EmployeeMapper;
import com.tom.mappers.SalaryMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by tom on 1/4/2017.
 */
@Service
public class SalaryService {

    @Autowired
    SalaryMapper salaryMapper;
    @Autowired
    EmployeeMapper employeeMapper;

    public List<Salary> findSalariesForEmployee(Integer emp_no){
        return salaryMapper.selectSalariesForEmployee(emp_no);
    }

    public Boolean insertSalary(Salary salary){
        return salaryMapper.insertSalary(salary);
    }

    public Boolean updateSalary(Salary oldSalary ,Salary newSalary){
        return salaryMapper.updateSalary(oldSalary, newSalary);
    }

    public Boolean saveOrUpdate(Salary salary){
        Salary tempSalary = checkIfSalaryExist(salary);
        if (tempSalary == null){
            return insertSalary(salary);
        }
        return updateSalary(tempSalary,salary);
    }

    public Boolean deleteSalary(Salary salary){
        return salaryMapper.deleteSalary(salary);
    }

    public Salary checkIfSalaryExist(Salary salary){
        List<Salary> salaries = findSalariesForEmployee(salary.getEmp_no());
        if (!salaries.isEmpty()){
            for (Salary each : salaries){
                if (each.isSQLEquals(salary)){
                    return each;
                }
            }
            return null;
        }
        return null;
    }
}
