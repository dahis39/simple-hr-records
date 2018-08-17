package com.tom;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.support.SpringBootServletInitializer;

@SpringBootApplication
@MapperScan("com.tom.mappers")
public class ResTfulTestDbApplication extends SpringBootServletInitializer {

//	public static void main(String[] args) {
//		SpringApplication.run(ResTfulTestDbApplication.class, args);
//	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application){
		return application.sources(ResTfulTestDbApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(ResTfulTestDbApplication.class, args);
	}
}
