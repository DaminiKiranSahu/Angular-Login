import { Component, OnInit } from '@angular/core';
import { InternStatus } from '../data.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-intern-status',
  templateUrl: './intern-status.component.html',
  styleUrls: ['./intern-status.component.css']
})
export class InternStatusComponent implements OnInit {

  statusId:number|null=null;
  internId:number|null=null;
  internStatus: string='';


  Status:any;


  constructor(public service:SharedService) { }

  ngOnInit(): void {
    this.get()

  }
  get(){
    return this.service.getAllStatus().subscribe(g=> {
      this.Status= g;
      console.log(g);
    })
  }
  edit(form:InternStatus){
    this.service.SData=form;
  }
  deleterecord(item:any){

    return this.service.deleteStatus(item.statusId).subscribe(g=> {
      this.Status = g;
  this.get();
    })

  }
  onedit(item:any){
// console.log(item);
   this.statusId= item.statusId;
   this.internId=item.internId;
   this.internStatus=item.internStatus;

  }

  submit(item:any){
    alert("Are you sure for Adding this Data");
    console.log(item);
    this.service.postStatus(item).subscribe(res=>{
         alert("Deatils added succesfully");
         this.get();
    })
  }
  update(){
    alert("clicked");
   var StatusData = {
    "statusId": this.statusId,
    "internId": this.internId,
    "internStatus":  this.internStatus,
   }



    this.service.putRecord(StatusData,this.internId).subscribe(res=>{
         alert("Intern update succesfully");
         this.get();
    })
   }
   Add(){
    // console.log(item);
       this.statusId = null;
       this.internId= null;
       this.internStatus ='';
      }
  }
