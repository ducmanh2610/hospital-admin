import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route, Routes } from '@angular/router';
import { DashboardComponent, EmployeeListComponent, EmployeeDetailComponent, LevelListComponent, RecordListComponent, ToolkitDetailComponent, ToolkitListComponent, UserListComponent, PatientListComponent, LogComponent } from 'src/pages';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { AuthLayoutComponent, DefaultLayoutComponent } from 'src/layouts';
import { RegisterComponent } from 'src/auth/register/register/register.component';
import { AuthorizeService } from 'src/services/authorize/authorize.service';

const routes: Routes = [
  {
    path: 'auth',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent, title: 'Login' },
      { path: 'register', component: RegisterComponent, title: 'Register' }
    ]
  },
  {
    path: '',
    component: DefaultLayoutComponent, canActivate: [AuthorizeService],
    children: [
      { path: '', component: DashboardComponent, title: 'Dashboard' },
      { path: 'users', component: UserListComponent, title: 'Users List' },
      { path: 'employees', component: EmployeeListComponent, title: 'Employee List' },
      { path: 'levels', component: LevelListComponent, title: 'Level List' },
    ]
  },
  {
    path: 'error',
    component: DefaultLayoutComponent, canActivate: [AuthorizeService],
    children: [
      { path: '404', component: DashboardComponent, title: 'Page Not Found' },
      { path: '403', component: UserListComponent, title: 'Forbidden' },
      { path: '500', component: UserListComponent, title: 'Internal Server Error' },
    ]
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
