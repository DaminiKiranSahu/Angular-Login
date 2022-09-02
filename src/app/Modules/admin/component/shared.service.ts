import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InternDesignation, InternLeave, InternRecord, InternStatus, Working,  } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
url = 'https://localhost:44300/api';
  constructor(public http:HttpClient) { }
  Rdata:InternRecord = new InternRecord()
  DesiData:InternDesignation = new InternDesignation()
  leaveData:InternLeave = new InternLeave()
  SData:InternStatus = new InternStatus()
  WData:Working = new Working()



  //Intern Records

  getAllRecord(){
    return this.http.get(this.url+'/Record');
  }
  postRecord(Rdata:any[] | any){
    return this.http.post(this.url+'/Record',Rdata);
  }
  putRecord(Rdata:any,id:number|null) {
    return this.http.put(this.url+`/Record/${id}`,Rdata);
  }
  deleteRecord(id:any){
    return this.http.delete(this.url+`/Record/${id}`);
  }

  //designation
  getAlldesi(){
    return this.http.get(this.url + '/InternDesignation');
  }
  postDesi(DesiData:any[]){
    return this.http.post(this.url+'/InternDesignation',DesiData);
  }
  putDesi(DesiData:any,id:number|null){
    return this.http.put(this.url+`/InternDesignation/${id}`,DesiData);
  }
  deletedesi(id:any){
    return this.http.delete(this.url+`/InternDesignation/${id}`);
  }


  //Leave

  getAllLeave(){
    return this.http.get(this.url + '/Leave');
  }
  postLeave(DesiData:any[]){
    return this.http.post(this.url+'/Leave',DesiData);
  }
  putLeave(DesiData:any,id:number|null){
    return this.http.put(this.url+`/Leave/${id}`,DesiData);
  }
  deleteLeave(id:any){
    return this.http.delete(this.url+`/Leave/${id}`);
  }


  //Status
  getAllStatus(){
    return this.http.get(this.url + '/Status');
  }
  postStatus(DesiData:any[]){
    return this.http.post(this.url+'/Status',DesiData);
  }
  putStatus(DesiData:any,id:number|null){
    return this.http.put(this.url+`/Status/${id}`,DesiData);
  }
  deleteStatus(id:any){
    return this.http.delete(this.url+`/Status/${id}`);
  }

}
