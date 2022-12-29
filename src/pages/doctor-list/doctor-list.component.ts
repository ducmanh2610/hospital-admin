import {
  ViewChild,
  ViewContainerRef, AfterViewInit, Component, ComponentRef, OnChanges, OnInit
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DateRangePickerComponent, DialogComponent, FitlerComponent, SelectFilterComponent } from 'src/components';

import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { Employee } from 'src/models/employee';
import { EmployeeService, MessagesService } from 'src/services';
import { MatPaginator } from '@angular/material/paginator';


interface Filter {
  value: string;
  viewValue: string;
  component: any
}


@Component({
  selector: 'search-filter',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})

export class DoctorListComponent implements AfterViewInit, OnInit {
  @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ref!: ComponentRef<FitlerComponent>
  selection = new SelectionModel<Employee>(true, []);
  displayedColumns: string[] = ['select', 'employeeId', 'name', 'levelId', 'email', 'description', 'isAvailable', 'address', 'actions'];
  dataSource: any;
  employeeList: Employee[] = [];
  filters: Filter[] = [
    { value: 'date-joined', viewValue: 'Date Joined', component: DateRangePickerComponent },
    { value: 'department', viewValue: 'Department', component: SelectFilterComponent },
    { value: 'email', viewValue: 'Email', component: FitlerComponent },
  ];

  selectedValue: string;
  selectedCar: string;


  constructor(public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private employeeService: EmployeeService,
    // private messagesService: MessagesService
  ) {

  }

  ngOnInit(): void {
    this.employeeService.getEmployee().subscribe(employees => this.employeeList = employees);
    this.dataSource = new MatTableDataSource(this.employeeList);
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  clearFilter() {
    this.vcr.clear();
    this.filters = [
      { value: 'date-joined', viewValue: 'Date Joined', component: DateRangePickerComponent },
      { value: 'department', viewValue: 'Department', component: SelectFilterComponent },
      { value: 'email', viewValue: 'Email', component: FitlerComponent },
    ];
  }

  selectFilter(filterType: string): void {
    let filter = this.filters.find(filter => filter.value === filterType);
    let findIndex = this.filters.findIndex(filter => filter.value === filterType);
    console.log(filter, findIndex);
    if (findIndex != -1 && typeof filter != 'undefined') {
      this.filters.splice(findIndex, 1);
      this.vcr.createComponent(filter.component);
    }
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Employee): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  // filter
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
