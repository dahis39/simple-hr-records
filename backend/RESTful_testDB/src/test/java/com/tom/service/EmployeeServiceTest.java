package com.tom.service;

import com.tom.domain.Employee;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.Assert.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

import static org.junit.Assert.*;

/**
 * Created by tom on 1/17/2017.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class EmployeeServiceTest {

    @Autowired
    private EmployeeService employeeService;

    @Test
    public void searchEmployeesByKeyword() throws Exception {
        List<Employee> employees = employeeService.searchEmployeesByKeyword("tom", 0, 20);
        assertEquals(20, employees.size());
    }

    @Test
    public void searchEmployeesByTwoKeywords() throws Exception {
        List<Employee> employees = employeeService.searchEmployeesByKeyword("tom huang", 0, 20);
        assertEquals(1, employees.size());
    }

    @Test
    public void updateEmployee() throws Exception {
        String tempDate = "1000-01-01";
        char tempGender = 'F';

        Employee employee = employeeService.findEmployeeById(500006);
        Employee employee1 = employeeService.findEmployeeById(500006);

        assertNotEquals(tempGender, employee.getGender());
        assertNotEquals(tempDate, employee.getHireDate());

        employee1.setGender(tempGender);
        employee1.setHireDate(tempDate);

        assertTrue(employeeService.updateEmployee(employee1));

        Employee employee2 = employeeService.findEmployeeById(500006);
        assertEquals(tempGender, employee2.getGender());
        assertEquals(tempDate, employee2.getHireDate());

        System.out.println(employee.getGender());
        System.out.println(employee.getHireDate());

        employee.setVersion(employee2.getVersion()); // get a newer version to void Optimistic Locking.
        assertTrue(employeeService.updateEmployee(employee));

        Employee employee3 = employeeService.findEmployeeById(500006);
        assertEquals(employee3.getGender(), employee.getGender());
        assertEquals(employee3.getHireDate(), employee.getHireDate());
    }
}