package com.tom.mappers;

import com.tom.domain.Employee;
import com.tom.domain.EmployeeDetail;
import com.tom.domain.Title;
import org.apache.ibatis.annotations.Param;

import java.util.List;


/**
 * Created by tom on 12/8/2016.
 */

public interface EmployeeMapper {

    Employee findEmployeeById(Integer id);

    List<Employee> employeeListFor20();

    List<Employee> searchEmployeeByKeyword(String keyword);

    Boolean insertEmployee(Employee employee);

    Boolean updateEmployee(Employee employee);

    Boolean deleteEmployee(Integer id);

}
