import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';

import { AuthLayoutComponent, DefaultLayoutComponent, NavbarComponent } from 'src/layouts';
import { EmployeeDetailComponent, EmployeeListComponent, LevelListComponent, RecordListComponent, ToolkitDetailComponent, ToolkitListComponent } from 'src/pages';
import { ConfirmDialogComponent, DateRangePickerComponent, DialogComponent, FitlerComponent, LevelDialogComponent, SelectFilterComponent } from 'src/components';
import { AppRoutingModule } from './app-routing.module';
import { MessagesComponent } from 'src/components/messages/messages.component';
import { MatListModule } from '@angular/material/list';
import { QuillModule } from 'ngx-quill';
import { LoginComponent } from 'src/auth/login/login/login.component';
import { CommonModule } from '@angular/common';
import { AuthInterceptor } from 'src/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AuthLayoutComponent,
    DefaultLayoutComponent,

    EmployeeListComponent,
    DialogComponent,
    LevelDialogComponent,
    FitlerComponent,
    SelectFilterComponent,
    DateRangePickerComponent,
    MessagesComponent,
    ConfirmDialogComponent,

    EmployeeDetailComponent,
    ToolkitListComponent,
    ToolkitDetailComponent,
    RecordListComponent,
    LevelListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,

    MatTableModule,
    MatProgressBarModule,
    MatSortModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatCheckboxModule,
    MatDividerModule,
    MatListModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonToggleModule,
    MatMenuModule,
    QuillModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
