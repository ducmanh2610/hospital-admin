import { Injectable } from '@angular/core';
import { Observable, of, catchError } from 'rxjs';
import { Employee } from 'src/models';
import { MessagesService } from '../messages/messages.service';
import { HttpClient } from '@angular/common/http';

const HTTP_API: string = "http://localhost:8081/api/v1/employee";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employeeList: Observable<Employee[]>;
  constructor(private messagesService: MessagesService, private http: HttpClient) { }

  public getEmployeeList(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${HTTP_API}/list`);
  }

  public getEmployeeById(id: String): Observable<Employee> {
    return this.http.get<Employee>(`${HTTP_API}/${id}`);
  }

  public createNewEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${HTTP_API}/new`, employee);
  }
}
