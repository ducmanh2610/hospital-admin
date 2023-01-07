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
import { EmployeeService } from 'src/services';
import { MatPaginator } from '@angular/material/paginator';
import { tap } from 'rxjs';


interface Filter {
  value: string;
  viewValue: string;
  component: any
}

const DUMMY_DATA: Employee[] = [
  {
    position: 1,
    id: "a3a50f95-384d-49e0-a6a8-01954a3ac8c7",
    firstName: "Huyen Anh",
    lastName: "Tran",
    email: "ABC",
    description: "co y ta damdang",
    status: false,
    level: {
      id: "bd0c1378-6db7-4001-b71f-9ea73fa30fbf",
      name: "Beauty Nurse",
      status: true,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt assumenda explicabo accusantium soluta neque laudantium cum repellendus dolor repellat vitae?",
      dateImported: 1672807175000,
      dateModified: 1672807175000,
    }
  },
  {
    position: 2,
    id: "b3a50f95-384d-49e0-a6a8-01954a3ac8c7",
    firstName: "Tien",
    lastName: "Tran Thuy",
    email: "ABC",
    description: "co y ta damdang",
    status: false,
    level: {
      id: "bd0c1378-6db7-4001-b71f-9ea73fa30fbf",
      name: "Beauty Nurse",
      status: true,
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt assumenda explicabo accusantium soluta neque laudantium cum repellendus dolor repellat vitae?",
      dateImported: 1672807175000,
      dateModified: 1672807175000,
    }
  }
]

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})

export class EmployeeListComponent implements AfterViewInit, OnInit {
  @ViewChild("viewContainerRef", { read: ViewContainerRef }) vcr!: ViewContainerRef;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  ref!: ComponentRef<FitlerComponent>
  selection = new SelectionModel<Employee>(true, []);
  displayedColumns: string[] = ['select', 'position', 'firstName', 'lastName', 'level', 'email', 'description', 'status', 'address', 'actions'];
  dataSource = new MatTableDataSource<Employee>();
  data: any[];
  length: Number;
  emps: Employee[];
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
  ngOnInit() {
    this.employeeService.getEmployeeList().pipe(
      tap(response => {
        response.forEach((response, index) => {
          response['position'] = index + 1;
        });
      })
    )
      .subscribe(data => {
        this.dataSource.data = data
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource);
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
    // console.log(this.dataSource);
    const numSelected = this.dataSource.data.length;
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
  checkboxLabel(row?: any): string {
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
