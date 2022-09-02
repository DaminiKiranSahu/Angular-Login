import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs/internal/observable/of';
import { throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';
import { SharedService } from '../Modules/admin/component/shared.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router, private service: SharedService) {}

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return this.getToken() !== null;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login({ email, password }: any): Observable<any> {
        if (email === 'admin@gmail.com' && password === 'admin123'|| email === 'Damini@gmail.com' && password==='Damini@123') {
      this.setToken('abcdefghijklmnopqrstuvwxyz');
      return of({ name: 'Damini Sahu', email: 'admin@gmail.com' });
    }
    return throwError(new Error('Failed to login'));
  }
}
