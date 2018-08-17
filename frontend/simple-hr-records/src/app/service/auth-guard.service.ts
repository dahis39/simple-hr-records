import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

    isLogin: boolean;

    constructor(private authenticationService: AuthenticationService, private router: Router) { 
        this.authenticationService.getState().subscribe(state => this.isLogin = state);
     }

    canActivate() {
        if (this.isLogin) {
            return true;
        }
        this.router.navigate(['/login']); 
        return false;
    }
}