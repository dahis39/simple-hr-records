# Simple HR Record
---
Human Resource dashboard app for learning Angualr 2. It has Trello style quick edit for majority of data fields.

Data and schema taken from a [SQL dump](https://github.com/datacharmer/test_db) on Github, backend RESTful api powered by Spring Boot, MyBatis as ORM.

## Live Site: [Simple HR Record](http://www.saturnringstation.com/simple-hr-records)

### Features
---
* Search  
    By Id, or by firstname/lastname, or by both. OnKey event delayed for reducing loads.
* Security  
    Basic Authentication and frontend route guard.

* Frontend Cache  
    Both full employees list and search result list are cached.

* Mobile Support  
    Easy migration with Ionic 2.

* Multiple views, Single Page App  
    Employees list view, employee view, departments list view, managers list and employees sub list by departments.

* Infinite Scrolling  
    All lists and search results are "infinite" scrolled for pagination.

* Pop-up/Modal/Notification  
    For create form, delete confirm and error codes.

### Tech Stack
---
* Front-end  
    Bootstrap  
    FontAwesome  
    Angular 2  
    angular2-infinite-scroll  

* Back-end  
Spring Boot  
MyBatis  
MySQL  

Note: App was built when Angular 2 and TyptScript 1 came out, and it's migrated to Angular 6 and new CLI with minimal twisted.