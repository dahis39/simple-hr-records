package com.tom.mappers;

import com.tom.domain.Salary;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by tom on 1/4/2017.
 */
public interface SalaryMapper {

    List<Salary> selectSalariesForEmployee(Integer emp_no);

    Boolean insertSalary(Salary salary);

    Boolean updateSalary(@Param("oldSalary") Salary oldSalary, @Param("newSalary") Salary newSalary);

    Boolean deleteSalary(Salary salary);
}
