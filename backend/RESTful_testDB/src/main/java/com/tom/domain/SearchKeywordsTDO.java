package com.tom.domain;

/**
 * Created by tom on 3/6/2017.
 */
public class SearchKeywordsTDO {
    private String firstName;
    private String lastName;
    private int offset;
    private int limit;

    public SearchKeywordsTDO(String firstname, String lastname, int offset, int limit) {
        this.firstName = firstname;
        this.lastName = lastname;
        this.offset = offset;
        this.limit = limit;
    }

    public String getFirstname() {
        return firstName;
    }

    public void setFirstname(String firstname) {
        this.firstName = firstname;
    }

    public String getLastname() {
        return lastName;
    }

    public void setLastname(String lastname) {
        this.lastName = lastname;
    }

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }
}
