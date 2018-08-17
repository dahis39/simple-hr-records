package com.tom.DAOs;

import com.tom.domain.Employee;
import com.tom.domain.SearchKeywordsTDO;
import org.apache.ibatis.session.RowBounds;
import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by tom on 1/10/2017.
 */
@Service
public class EmployeeDAO {

    private final SqlSession sqlSession;

    public EmployeeDAO(SqlSession sqlSession){
        this.sqlSession = sqlSession;
    }

    public List<Employee> selectPaginationEmployees( int offset, int limit) {
        return sqlSession.selectList("com.tom.mappers.EmployeeMapper.employeeList", null, new RowBounds(offset, limit));
    }

    public List<Employee> searchPaginationEmployees(String keyword, int offset, int limit) {
        return sqlSession.selectList("com.tom.mappers.EmployeeMapper.searchEmployeeByKeyword", keyword, new RowBounds(offset, limit));
    }

    public List<Employee> searchPaginationEmployeesByNum(String num, int offset, int limit) {
        return sqlSession.selectList("com.tom.mappers.EmployeeMapper.searchEmployeeByNum", num, new RowBounds(offset, limit));
    }

    public List<Employee> searchPaginationEmployeesByTwoKeywords(String firstname, String lastname, int offset, int limit) {
        return sqlSession.selectList("searchEmployeeByTwoKeywords", new SearchKeywordsTDO("%" + firstname + "%","%" + lastname + "%",offset,limit));
    }
}
