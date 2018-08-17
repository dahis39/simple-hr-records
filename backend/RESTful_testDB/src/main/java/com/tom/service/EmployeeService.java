package com.tom.service;

import com.tom.DAOs.EmployeeDAO;
import com.tom.domain.Employee;
import com.tom.domain.EmployeeDetail;
import com.tom.domain.Title;
import com.tom.mappers.EmployeeMapper;
import com.tom.mappers.TitleMapper;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.List;

/**
 * Created by tom on 12/24/2016.
 */

@Service
public class EmployeeService {

    @Autowired
    EmployeeMapper employeeMapper;
    @Autowired
    TitleMapper titleMapper;
    @Autowired
    EmployeeDAO employeeDAO;

    public Employee findEmployeeById(Integer id) {
        return employeeMapper.findEmployeeById(id);
    }

    public List<Employee> paginationEmployees(Integer offset, Integer limit) {
        return employeeDAO.selectPaginationEmployees(offset, limit);
    }

    public List<Employee> searchEmployeesByKeyword(String keyword, Integer offset, Integer limit) {
        String[] keywords = keyword.split("\\s+");
        if (keywords.length < 1)
            return Collections.emptyList();
        if (keywords.length == 1) {
            if (keywords[0].matches("[0-9]+") && keywords[0].length() > 2 )
                return employeeDAO.searchPaginationEmployeesByNum(keyword, offset, limit);
            return employeeDAO.searchPaginationEmployees(keyword, offset, limit);
        }
        if (keywords.length == 2) {
            List<Employee> list = new ArrayList<Employee>();
            return employeeDAO.searchPaginationEmployeesByTwoKeywords(keywords[0], keywords[1], offset, limit);
        }
        return Collections.emptyList();
    }

    public Boolean insertEmployee(Employee employee){
        return employeeMapper.insertEmployee(employee);
    }

    public boolean updateEmployee(Employee employee){
        return employeeMapper.updateEmployee(employee);
    }

    public boolean deleteEmployeeById(Integer id){
        return employeeMapper.deleteEmployee(id);
    }

}
