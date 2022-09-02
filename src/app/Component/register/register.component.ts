import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/Modules/admin/component/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    internName:new FormControl(''),
    phoneNo: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    password: new FormControl(''),
    address: new FormControl(''),
    company_Working_Hour: new FormControl(''),
    intern_Working_Hour: new FormControl(''),



  });
  constructor(private shared: SharedService, private router: Router) {}

  ngOnInit(): void {
  }
onSubmit(){
  console.log(this.registerForm.value)
    console.log(this.registerForm.value);
    this.shared.postRecord(this.registerForm.value).subscribe(res=>{
         alert("Register succesfully");
         this.router.navigate(['/login']);

    })
}
}
