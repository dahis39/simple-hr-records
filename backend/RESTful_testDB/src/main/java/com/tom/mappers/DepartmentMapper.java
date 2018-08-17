package com.tom.mappers;

import com.tom.domain.Department;
import com.tom.domain.DepartmentTransfer;
import com.tom.domain.Employee;
import org.apache.ibatis.annotations.Param;

import java.util.Date;
import java.util.List;

/**
 * Created by tom on 12/22/2016.
 */
public interface DepartmentMapper {
    List<Department> listAll();

    DepartmentTransfer findById(String dept_no);

    String getDeptNameById(String dept_no);

    List<Employee> selectCurrentEmployeesByDeptNo(@Param("dept_no") String dept_no, @Param("offset") int offset, @Param("limit") int limit );
}
