import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
    selector: 'my-login',
    template: `
<div class="container">
   <div class="jumbotron">
        <h1 class="display-3">Simple <span class="red-bg">H</span><span class="blue-bg">R</span> Records</h1>
        <p class="lead">My experimental Human Resource app for learning Angualr 2. With a friendly UI emphasizing the approach of "What You See Is What You Can Change",
             every object and its fields in this app can be create, edit and delete on the fly while it's presenting itself. 
             No more hustle digging through menus and pages to find the right forms for the right guy.
        </p>
        <p>Data and schema taken from a <a href="https://github.com/datacharmer/test_db">SQL dump on Github</a>, backend RESTful api powered by Java/Spring Boot.</p>
        <p><a class="btn btn-lg btn-default" routerLink="/about" role="button"> Features and Tech Stack </a></p>
   </div>
   <div class="row">
        <div class="margins col-md-8 col-md-offset-2">
            <div class="modal-dialog">
                <div class="modal-content">
                        <div class="panel-heading">
                            <h1 class="panel-title">Sign in here.</h1>
                        </div>
                        <div class="panel-body">
                            <form role="form">
                                <fieldset>
                                    <div class="form-group">
                                        <input [(ngModel)]="username" class="form-control input-lg" placeholder="username" name="email" type="text" autofocus="" required>
                                    </div>
                                    <div class="form-group">
                                        <input [(ngModel)]="password" class="form-control input-lg" placeholder="Password" name="password" type="password" value="" required>
                                    </div>
                                    <h5 *ngIf = "hasError" class="red"> {{errorMsg}} </h5>
                                    <button (click)="onLogin()" class="btn btn-primary">Login</button>
                                    <button (click)="onDemoLogin()" class="btn btn-success">(DEMO only) Auto Admin Login</button>
                                    username: admin  ,password: abc123
                                </fieldset>
                            </form>
                        </div>
                  </div>
            </div>
        </div>
    </div>
    <hr>
    <footer class="footer">
        <p>&copy; By <a href="http://www.saturnringstation.com/portfolio">Tom H</a> 2017</p>
    </footer>
</div>
  `,
    styles: [`
    .margins {
      margin-bottom: 10vh;
    }
    .red {
        color:red;
    }
    .red-bg {
        color: rgba(255, 13, 0, 0.8);
    }
    .blue-bg {
        color: rgba(0, 86, 254, 0.8);
    }
    h1 { font-family: 'Roboto'; }
  `]
})
export class LoginComponent implements OnInit {
    username: string = '';
    password: string = '';
    hasError: boolean = false;
    errorMsg: string;

    constructor(private employeeService: EmployeeService, private authenticationService: AuthenticationService, private router: Router) { }

    ngOnInit() {
        this.authenticationService.logout();
    }

    onLogin(): void {
        // activate AuthGuard's AuthenticationService state subscribetion. Subscribes first, then next will cascade.
        this.router.navigate(['/employees']);
        
        this.authenticationService.authentication(this.username, this.password)
            .then(pass => {
                if (pass) {
                    this.hasError = false;
                    this.router.navigate(['/employees']);
                } else {
                    throw "Authentication failed. Wrong username or password.";
                }
            })
            .catch(error => {
                this.hasError = true;
                if (error.status === 0) {
                    this.errorMsg = 'Connection to the server failed.'
                } else if (error.status === 401) {
                    this.errorMsg = 'Authentication failed. Wrong username or password.'
                } else {
                    this.errorMsg = error;
                }
            });
    }

    onDemoLogin(): void {
        this.username = 'admin'
        this.password = 'abc123'
        this.onLogin();
    }

}