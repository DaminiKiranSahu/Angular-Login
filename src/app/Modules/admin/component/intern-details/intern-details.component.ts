import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, NgForm } from '@angular/forms';
import { Observable } from 'rxjs/internal/Observable';
import { InternRecord } from '../data.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-intern-details',
  templateUrl: './intern-details.component.html',
  styleUrls: ['./intern-details.component.css']
})
export class InternDetailsComponent implements OnInit {
  internName:string="";
  phoneNo:string='';
  email:string='';
  gender:string='';
  address:string='';
  company_Working_Hour:number|null=null;
  intern_Working_Hour:number|null=null;
  internId:number|null=null;
  password:string='';


  record:any;


  constructor(public service:SharedService) { }

  ngOnInit(): void {
    this.get()

  }
  get(){
    return this.service.getAllRecord().subscribe(g=> {
      this.record= g;
      console.log(g);
    })
  }
  edit(form:InternRecord){
    this.service.Rdata=form;
  }
  deleterecord(item:any){
    alert("are you sure for delete this item")
    return this.service.deleteRecord(item.internId).subscribe(g=> {
      this.record = g;
  this.get();
    })

  }
  onedit(item:any){
// console.log(item);
   this.internId= item.internId;
   this.internName=item.internName;
   this.phoneNo=item.phoneNo;
   this.address=item.address;
   this.intern_Working_Hour=item.intern_Working_Hour;
   this.company_Working_Hour=item.company_Working_Hour;
   this.gender=item.gender;
   this.email=item.email;
  }

  submit(item:any){
    alert("Are you sure for Adding this Data");
    console.log(item);
    this.service.postRecord(item).subscribe(res=>{
         alert("Intern added succesfully");
         this.get();
    })
  }
  update(){
    alert("clicked");
   var InternData = {
    "internId": this.internId,
    "internName": this.internName,
    "phoneNo": this.phoneNo,
    "email": this.email,
    "gender": this.gender,
    "address": this.address,
    "company_Working_Hour": this.company_Working_Hour,
    "intern_Working_Hour": this.intern_Working_Hour
   }



    this.service.putRecord(InternData,this.internId).subscribe(res=>{
         alert("Intern update succesfully");
         this.get();
    })
   }
   Add(){
    // console.log(item);
       this.internId =null;
       this.internName='';
       this.phoneNo='';
       this.address='';
       this.intern_Working_Hour =null;
       this.company_Working_Hour=null ;
       this.gender='';
       this.email='';
      }
  }


