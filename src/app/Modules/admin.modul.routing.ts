
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './admin/component/about/about.component';
import { AdminDashbordComponent } from './admin/component/admin-dashbord/admin-dashbord.component';
import { DesignationDetailsComponent } from './admin/component/designation-details/designation-details.component';


import { HomeComponent } from './admin/component/home/home.component';

import { InternDetailsComponent } from './admin/component/intern-details/intern-details.component';
import { InternLeaveRecordsComponent } from './admin/component/intern-leave-records/intern-leave-records.component';
import { InternStatusComponent } from './admin/component/intern-status/intern-status.component';
import { WorkingHourComponent } from './admin/component/working-hour/working-hour.component';


const routes: Routes = [
  {
    path: '',
    component: AdminDashbordComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'about', component: AboutComponent },
      { path: 'intern', component:InternDetailsComponent},
      { path: 'designation', component:DesignationDetailsComponent },
      { path: 'status', component:InternStatusComponent },
      { path: 'leave', component:InternLeaveRecordsComponent },
      { path: 'working', component:WorkingHourComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
