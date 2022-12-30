import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent, EmployeeListComponent, EmployeeDetailComponent, LevelListComponent, RecordListComponent, ToolkitDetailComponent, ToolkitListComponent, UserListComponent, PatientListComponent, LogComponent } from 'src/pages';

const routes: Routes = [
  { path: "", component: DashboardComponent, title: 'Dashboard' },
  { path: "level-list", component: LevelListComponent, title: 'Employee Level List' },

  { path: "employee-list", component: EmployeeListComponent, title: "Employee List" },
  { path: "employee/:employeeId", component: EmployeeDetailComponent, title: "Employee Detail" },

  { path: "toolkit-list", component: ToolkitListComponent, title: 'Toolkit List' },
  { path: "toolkit-detail/:toolTypeId", component: ToolkitDetailComponent, title: `Type List` },

  { path: "user-list", component: UserListComponent, title: 'User List' },
  { path: "record-list", component: RecordListComponent, title: 'Record List' },
  { path: "patient-list", component: PatientListComponent, title: 'Patient List' },
  { path: "log", component: LogComponent, title: 'System Log' },

  { path: "report", component: RecordListComponent, title: 'Overview' },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
