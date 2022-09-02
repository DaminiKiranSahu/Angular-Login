import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Service/auth.service';


@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})


  export class LoginComponent implements OnInit {

    loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });
    constructor(private auth: AuthService, private router: Router) {}
    image:string='../../../assets/login.jpg';
    ngOnInit(): void {
      if (this.auth.isLoggedIn()) {
        this.router.navigate(['admin']);
      }
    }
    onSubmit(): void {
      if (this.loginForm.valid) {
        this.auth.login(this.loginForm.value).subscribe(
          (result) => {
            console.log(result);
            this.router.navigate(['/admin']);
          },
          (err: Error) => {
            alert(err.message);
          }
        );
      }
    }
  }
