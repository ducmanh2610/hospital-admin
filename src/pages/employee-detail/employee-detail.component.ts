import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/models';
import { EmployeeService } from 'src/services';
import { LevelService } from 'src/services/level/level.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  employeeId: string | undefined;
  employee: Employee | undefined;
  status: boolean | undefined;
  loading: boolean = true;

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const employeeId = String(this.route.snapshot.paramMap.get('employeeId'));
    this.employeeService.getEmployeeById(employeeId).subscribe(emp => this.employee = emp);
    this.status = this.employee?.status;
  }

  ngAfterViewInit(): void {
    // this.employeeService.get
  }

}
