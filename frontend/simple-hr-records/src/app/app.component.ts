import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from './service/authentication.service';

@Component({
  selector: 'app-root',
  template: `
   <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="http://www.saturnringstation.com/portfolio">
            <img alt="Brand" width="32" height="32" src="http://www.saturnringstation.com/portfolio/images/favicon.png">
          </a>
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-target"> 
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span><span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse" id="navbar-collapse-target">
          <ul class="nav navbar-nav">
            <li *ngIf="isLogin" role="presentation"><a routerLink="/employees">Employees List</a></li>
            <li *ngIf="isLogin" role="presentation"><a routerLink="/departments">Departments List</a></li>
            <li role="presentation"><a routerLink="/about">About</a></li>
            <li *ngIf="!isLogin" role="presentation"><a routerLink="/login">Login</a></li>
            <li *ngIf="isLogin" role="presentation"><a routerLink="/login">Logout</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li role="presentation"><a href="http://www.saturnringstation.com/portfolio"> Portfolio</a></li>
            <li role="presentation"><a href="http://www.saturnringstation.com/"> Blog</a></li>
          </ul>        
        </div>
      </div>
   </nav>
   <router-outlet></router-outlet>
  `
})
export class AppComponent implements OnInit {
  isLogin: boolean = false;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.authenticationService.getState().subscribe(state => this.isLogin = state);
  }
  
}