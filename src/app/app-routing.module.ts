import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent, DoctorListComponent, EmployeeDetailComponent, LevelListComponent, ToolkitDetailComponent, ToolkitListComponent } from 'src/pages';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "level-list", component: LevelListComponent },

  { path: "employee-list", component: DoctorListComponent },
  { path: "employee/:employeeId", component: EmployeeDetailComponent },

  { path: "toolkit-list", component: ToolkitListComponent, title: 'Toolkit List' },
  { path: "toolkit-detail/:toolTypeId", component: ToolkitDetailComponent, title: `Toolkit Detail` },

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
