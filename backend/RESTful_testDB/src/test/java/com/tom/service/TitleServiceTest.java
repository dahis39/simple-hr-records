package com.tom.service;

import com.tom.domain.Title;
import org.junit.AfterClass;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Date;
import java.text.SimpleDateFormat;
import java.util.Calendar;

import static org.junit.Assert.*;
import static org.junit.Assert.assertNotNull;

/**
 * Created by tom on 12/29/2016.
 */
@RunWith(SpringRunner.class)
@SpringBootTest
public class TitleServiceTest {

    @Autowired
    TitleService titleService;

    String currentDate;
    String setupDate;

    Integer testEmp_no;
    Title originalTitle;
    Title newTitle;
    Title originalTitleDiffDates;
    Title originalTitleDiffToDate;

    @Before
    public void setUp() throws Exception {

        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");

        testEmp_no = 500006;
        setupDate = "2016-12-25";
        currentDate = "2017-01-05";

        originalTitle = new Title();
        originalTitle.setEmp_no(testEmp_no);
        originalTitle.setTitleName("Boy Scout");
        originalTitle.setFromDate(setupDate);
        originalTitle.setToDate(setupDate);

        newTitle = new Title();
        newTitle.setEmp_no(testEmp_no);
        newTitle.setTitleName("Med Doctor");
        newTitle.setFromDate(currentDate);
        newTitle.setToDate(currentDate);
    }

    @Test
    public void checkTitleIfExist() throws Exception {
        Title ifExistTitle = titleService.checkIfTitleExist(originalTitle);

        assertNotNull(ifExistTitle);
        assertEquals(testEmp_no, ifExistTitle.getEmp_no());
        assertEquals("Boy Scout", ifExistTitle.getTitleName());
        assertEquals(setupDate, ifExistTitle.getFromDate());
    }

    @Test
    public void checkTitleIfExistFail() throws Exception {
        originalTitleDiffDates = new Title();
        originalTitleDiffDates.setEmp_no(testEmp_no);
        originalTitleDiffDates.setTitleName("Boy Scout");
        originalTitleDiffDates.setFromDate(currentDate);  // fromDate is different
        originalTitleDiffDates.setToDate(currentDate);

        assertNull(titleService.checkIfTitleExist(originalTitleDiffDates));
    }

    @Test
    public void updateTitle() throws Exception {
        assertTrue(titleService.updateTitle(originalTitle, newTitle));

        Title ifExistTitle = titleService.checkIfTitleExist(newTitle);
        assertNotNull(ifExistTitle);
        assertEquals(testEmp_no, ifExistTitle.getEmp_no());
        assertEquals("Med Doctor", ifExistTitle.getTitleName());
        assertEquals(currentDate, ifExistTitle.getFromDate());

        assertTrue(titleService.updateTitle(newTitle, originalTitle));
    }

    @Test
    public void insertAndDeleteTitle() throws Exception {
        assertNull(titleService.checkIfTitleExist(newTitle));
        assertTrue(titleService.insertTitle(newTitle));
        assertNotNull(titleService.checkIfTitleExist(newTitle));
        assertTrue(titleService.deleteTile(newTitle));
        assertNull(titleService.checkIfTitleExist(newTitle));
    }

    @Test
    public void saveOrUpdate() throws Exception {
        originalTitleDiffToDate = new Title();
        originalTitleDiffToDate.setEmp_no(testEmp_no);
        originalTitleDiffToDate.setTitleName("Boy Scout");
        originalTitleDiffToDate.setFromDate(setupDate);
        originalTitleDiffToDate.setToDate(currentDate);     // toDate is different

        titleService.saveOrUpdate(originalTitleDiffToDate);

        Title tempTitle = titleService.checkIfTitleExist(originalTitleDiffToDate);
        assertNotNull(tempTitle);
        assertEquals(currentDate, tempTitle.getToDate());
        assertEquals(setupDate, tempTitle.getFromDate());

        titleService.saveOrUpdate(originalTitle);
    }
}