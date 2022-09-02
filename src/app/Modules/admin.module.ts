import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './admin/component/about/about.component';


import { FooterComponent } from './admin/component/Footer/Footer.component';
import { HeaderComponent } from './admin/component/Header/Header.component';
import { HomeComponent } from './admin/component/home/home.component';
import { AdminRoutingModule } from './admin.modul.routing';
import { AdminDashbordComponent } from './admin/component/admin-dashbord/admin-dashbord.component';
import { DesignationDetailsComponent } from './admin/component/designation-details/designation-details.component';
import { InternDetailsComponent } from './admin/component/intern-details/intern-details.component';
import { InternLeaveRecordsComponent } from './admin/component/intern-leave-records/intern-leave-records.component';
import { InternStatusComponent } from './admin/component/intern-status/intern-status.component';
import { WorkingHourComponent } from './admin/component/working-hour/working-hour.component';
import { HttpClient } from '@angular/common/http';
import { WorkingAddComponent } from './admin/component/working-add/working-add.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations:[
    AdminDashbordComponent,
    DesignationDetailsComponent,
    InternLeaveRecordsComponent,
    InternDetailsComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    InternStatusComponent,
    WorkingHourComponent,
    WorkingAddComponent,



        ],
     imports: [CommonModule,
       AdminRoutingModule,
       FormsModule ,
      ReactiveFormsModule ],
     exports: [FormsModule,NgForm]
})
export class AdminModule { }
