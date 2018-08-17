package com.tom.mappers;

import com.tom.domain.Title;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * Created by tom on 12/24/2016.
 */
public interface TitleMapper {

    List<Title> selectTitlesForEmployee(Integer emp_no);

    Boolean insertTile(Title title);

    Boolean updateTile(@Param("oldTitle") Title oldTitle, @Param("newTitle") Title newTitle);

    Boolean deleteTile(Title title);
}
