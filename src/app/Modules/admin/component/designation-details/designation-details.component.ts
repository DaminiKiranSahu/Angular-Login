import { Component, OnInit } from '@angular/core';
import { InternDesignation } from '../data.model';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-designation-details',
  templateUrl: './designation-details.component.html',
  styleUrls: ['./designation-details.component.css']
})
export class DesignationDetailsComponent implements OnInit {
  designationId: number|null=null;
  designationName: string='';
  departmentName: string='';
  roleName: string='';


  desi:any;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.get()
  }
  get(){
    return this.service.getAlldesi().subscribe(g=> {
      this.desi= g;
      console.log(g);
    })
  }
  edit(form:InternDesignation){
    this.service.DesiData=form;
  }
  deleterecord(item:any){
    alert("are you sure for delete this item")
    return this.service.deletedesi(item.designationId).subscribe(g=> {
      this.desi== g;
    this.get();
    })

  }
  onedit(item:any){
    alert("cliked")
console.log(item);
  this.designationId = item.designationId;
   this.designationName=item.designationName;
   this.departmentName=item.departmentName;
   this.roleName=item.roleName;

  }

  submit(item:any){
    alert("Are you sure for Adding this Data");
    console.log(item);
    this.service.postDesi(item).subscribe(res=>{
         alert("Intern added succesfully");
         this.get();
    })
  }

    update(){
      alert("clicked");
     var DesiData = {
      "designationId": this.designationId,
      "designationName": this.designationName,
      "departmentName": this.departmentName,
      "roleName": this.roleName,

     }



      this.service.putDesi(DesiData,this.designationId).subscribe(res=>{
           alert("Intern update succesfully");
           this.get();
      })
     }
     Add(){
      // console.log(item);
         this.designationId =null;
         this.designationName='';
         this.departmentName='';
         this.roleName='';

        }


  }
