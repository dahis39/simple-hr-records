package com.tom.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by tom on 3/3/2017.
 */
@RestController
@CrossOrigin
public class UtilityController {

    @RequestMapping(value = "/api/test" ,method = RequestMethod.GET)
    public ResponseEntity<Void> basicAuthCheck(){
        return new ResponseEntity<Void>( HttpStatus.OK);
    }
}
