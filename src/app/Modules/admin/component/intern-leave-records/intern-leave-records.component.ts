import { Component, OnInit } from '@angular/core';
import { InternRecord } from '../data.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-intern-leave-records',
  templateUrl: './intern-leave-records.component.html',
  styleUrls: ['./intern-leave-records.component.css']
})
export class InternLeaveRecordsComponent implements OnInit {

  leaveId: number|null=null;
  internId: number|null=null;
  leaveType: string='';
  leaveReson:string='';
  leavedays:number|null=null;


  leave:any;


  constructor(public service:SharedService) { }

  ngOnInit(): void {
    this.get()

  }
  get(){
    return this.service.getAllLeave().subscribe(g=> {
      this.leave= g;
      console.log(g);
    })
  }
  edit(form:InternRecord){
    this.service.leaveData=form;
  }
  deleterecord(item:any){

    return this.service.deleteLeave(item.leaveId).subscribe(g=> {
      this.leave = g;
  this.get();
    })

  }
  onedit(item:any){
  console.log(item);
   this.leaveId= item.leaveId;
   this.internId=item.internId;
   this.leaveType=item.leaveType;
   this.leaveReson=item.leaveReson;
   this.leavedays=item.leavedays;
  }

  submit(item:any){
    alert("Are you sure for Adding this Data");
    console.log(item);
    this.service.postLeave(item).subscribe(res=>{
         alert("Intern added succesfully");
         this.get();
    })
  }
  update(item:any){
    alert("clicked");
   alert(item);
  }
  }

