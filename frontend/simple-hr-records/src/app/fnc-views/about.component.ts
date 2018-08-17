import { Component } from '@angular/core';

@Component({
  selector: 'my-about',
  template: `
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-3">Simple <span class="red-bg">H</span><span class="blue-bg">R</span> Records</h1>
        <p class="lead">My experimental Human Resource app for learning Angualr 2. With a friendly UI emphasizing the approach of "What You See Is What You Can Change",
             every object and its fields in this app can be create, edit and delete on the fly while it's presenting itself. 
             No more hustle digging through menus and pages to find the right forms for the right guy.
        </p>
        <p>Data and schema taken from a <a href="https://github.com/datacharmer/test_db">SQL dump on Github</a>, backend RESTful api powered by Java/Spring Boot.</p>
        <p><a class="btn btn-lg btn-success" routerLink="/login" role="button"> Login & Have Fun </a></p>
      </div>

      <div class="row">
        <h3>Features</h3>
        <div class="col-lg-6">
          <h4>Search</h4>
          <p>By Id, or by firstname/lastname, or by both. OnKey event delayed for reducing loads.</p>

          <h4>Security</h4>
          <p>Basic Authentication and frontend route guard.</p>

          <h4>Frontend Cache</h4>
          <p>Both full employees list and search result list are cached.</p>

          <h4>Mobile Support</h4>
          <p>Easy migration with Ionic 2.</p>
        </div>

        <div class="col-lg-6">
          <h4>Multiple views, Single Page App</h4>
          <p>Employees list view, employee view, departments list view, managers list and employees sub list by departments.</p>

          <h4>Infinite Scrolling</h4>
          <p>All lists and search results are "infinite" scrolled for pagination.</p>

          <h4>Pop-up/Modal/Notification</h4>
          <p>For create form, delete confirm and error codes.</p>
        </div>
      </div>

      <div class="row">
        <h3>Tech Stack</h3>
        <div class="col-lg-6">
            <h4>Front-end:</h4>
            <p>Bootstrap</p>
            <p>FontAwesome</p>
            <p>Angular 2</p>
            <p><a href="https://www.npmjs.com/package/angular2-infinite-scroll">angular2-infinite-scroll</a></p>
        </div>
        <div class="col-lg-6">
            <h4>Back-end:</h4>
            <p>Spring Boot</p>
            <p>MyBatis</p>
            <p>MySQL</p>
        </div>
      </div>

      <hr>
      <footer class="footer">
        <p>&copy; By <a href="http://www.saturnringstation.com/portfolio">Tom H</a> 2017</p>
      </footer>
    </div>
  `,
  styles: [`
    .red-bg {
        color: rgba(255, 13, 0, 0.8);
    }
    .blue-bg {
        color: rgba(0, 86, 254, 0.8);
    }
    h1, h3, h4 { font-family: 'Roboto'; }
  `]
})
export class AboutComponent {

}