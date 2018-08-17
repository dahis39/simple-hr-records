package com.tom.service;

import com.sun.org.apache.xpath.internal.operations.Bool;
import com.tom.domain.Employee;
import com.tom.domain.Title;
import com.tom.mappers.EmployeeMapper;
import com.tom.mappers.TitleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by tom on 12/29/2016.
 */
@Service
public class TitleService {

    @Autowired
    TitleMapper titleMapper;
    @Autowired
    EmployeeMapper employeeMapper;

    public List<Title> findTitlesForEmployee(Integer emp_no){
        return titleMapper.selectTitlesForEmployee(emp_no);
    }

    public Boolean insertTitle(Title title){
        return titleMapper.insertTile(title);
    }

    public Boolean updateTitle(Title oldTitle, Title newTitle){
        return titleMapper.updateTile(oldTitle, newTitle);
    }

    public Boolean saveOrUpdate(Title title){
        Title tempTitle = checkIfTitleExist(title);
        if (tempTitle == null){
            return insertTitle(title);
        }
        return updateTitle(tempTitle, title);
    }

    public Boolean deleteTile(Title title){
        return titleMapper.deleteTile(title);
    }

    public Title checkIfTitleExist(Title title){
        List<Title> titles = findTitlesForEmployee(title.getEmp_no());
        if (!titles.isEmpty()){
            for (Title each : titles) {
                if (each.isSQLEquals(title)){
                    return each;
                }
            }
            return null;
        }
        return null;
    }
}
