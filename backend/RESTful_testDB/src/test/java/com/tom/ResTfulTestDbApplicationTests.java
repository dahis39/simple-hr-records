package com.tom;

import com.tom.domain.Employee;
import com.tom.service.EmployeeService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.assertEquals;


@RunWith(SpringRunner.class)
@SpringBootTest
public class ResTfulTestDbApplicationTests {

	@Autowired
	EmployeeService employeeService;

	@Test
	public void optimisticLockingTest() throws Exception{
		Integer id = 499999;
		String name1 = "BananaEmp1";
		String name2 = "AppleEmp2";

		Employee employee1 = employeeService.findEmployeeById(id);
		Employee employee2 = employeeService.findEmployeeById(id);

		System.out.println(employee1);
		System.out.println(employee2);

		employee1.setFirstName(name1);
		if (employeeService.updateEmployee(employee1)){
			System.out.println("Banana update succeeded.");
		} else {
			System.out.println("Banana update failed");
		}

		employee2.setFirstName(name2);
		if (employeeService.updateEmployee(employee2)){    // 	Will be updated if without optimistic locking,
			System.out.println("Apple update succeeded."); // 	since it's put after employee1.
		} else {
			System.out.println("Apple update failed.");
		}

		Employee employee3 = employeeService.findEmployeeById(id);
		System.out.println(employee3);
		assertEquals(employee3.getFirstName(), name1);
	}
}
