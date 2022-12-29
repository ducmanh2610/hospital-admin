import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from 'src/models';
import { MessagesService } from '../messages/messages.service';


const EMPLOYEE_DATA: Employee[] = [
  { position: 0, employeeId: 'EMP001', name: 'Employee 1', levelId: 'LV001', email: 'employee@email.com', isAvailable: true, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad veniam rem in, harum nam laboriosam omnis quo labore quibusdam, totam eius, inventore illo odio hic exercitationem accusantium voluptatum! Eius temporibus asperiores obcaecati molestias? Distinctio ipsam nulla, pariatur aut numquam obcaecati dignissimos libero tenetur doloremque architecto? Quos ducimus fuga dicta?', address: 'MIT Massachussett' },
  { position: 1, employeeId: 'EMP002', name: 'Employee 2', levelId: 'LV002', email: 'employee@email.com', isAvailable: true, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad veniam rem in, harum nam laboriosam omnis quo labore quibusdam, totam eius, inventore illo odio hic exercitationem accusantium voluptatum! Eius temporibus asperiores obcaecati molestias? Distinctio ipsam nulla, pariatur aut numquam obcaecati dignissimos libero tenetur doloremque architecto? Quos ducimus fuga dicta?', address: 'MIT Massachussett' },
  { position: 2, employeeId: 'EMP003', name: 'Employee 3', levelId: 'LV003', email: 'employee@email.com', isAvailable: false, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad veniam rem in, harum nam laboriosam omnis quo labore quibusdam, totam eius, inventore illo odio hic exercitationem accusantium voluptatum! Eius temporibus asperiores obcaecati molestias? Distinctio ipsam nulla, pariatur aut numquam obcaecati dignissimos libero tenetur doloremque architecto? Quos ducimus fuga dicta?', address: 'MIT Massachussett' },
  { position: 3, employeeId: 'EMP004', name: 'Employee 4', levelId: 'LV001', email: 'employee@email.com', isAvailable: true, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad veniam rem in, harum nam laboriosam omnis quo labore quibusdam, totam eius, inventore illo odio hic exercitationem accusantium voluptatum! Eius temporibus asperiores obcaecati molestias? Distinctio ipsam nulla, pariatur aut numquam obcaecati dignissimos libero tenetur doloremque architecto? Quos ducimus fuga dicta?', address: 'MIT Massachussett' },
  { position: 4, employeeId: 'EMP005', name: 'Employee 5', levelId: 'LV003', email: 'employee@email.com', isAvailable: true, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad veniam rem in, harum nam laboriosam omnis quo labore quibusdam, totam eius, inventore illo odio hic exercitationem accusantium voluptatum! Eius temporibus asperiores obcaecati molestias? Distinctio ipsam nulla, pariatur aut numquam obcaecati dignissimos libero tenetur doloremque architecto? Quos ducimus fuga dicta?', address: 'MIT Massachussett' },
  { position: 5, employeeId: 'EMP006', name: 'Employee 6', levelId: 'LV002', email: 'employee@email.com', isAvailable: true, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad veniam rem in, harum nam laboriosam omnis quo labore quibusdam, totam eius, inventore illo odio hic exercitationem accusantium voluptatum! Eius temporibus asperiores obcaecati molestias? Distinctio ipsam nulla, pariatur aut numquam obcaecati dignissimos libero tenetur doloremque architecto? Quos ducimus fuga dicta?', address: 'MIT Massachussett' },
  { position: 6, employeeId: 'EMP007', name: 'Employee 7', levelId: 'LV001', email: 'employee@email.com', isAvailable: false, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad veniam rem in, harum nam laboriosam omnis quo labore quibusdam, totam eius, inventore illo odio hic exercitationem accusantium voluptatum! Eius temporibus asperiores obcaecati molestias? Distinctio ipsam nulla, pariatur aut numquam obcaecati dignissimos libero tenetur doloremque architecto? Quos ducimus fuga dicta?', address: 'MIT Massachussett' },
  { position: 7, employeeId: 'EMP008', name: 'Employee 8', levelId: 'LV003', email: 'employee@email.com', isAvailable: true, description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ad veniam rem in, harum nam laboriosam omnis quo labore quibusdam, totam eius, inventore illo odio hic exercitationem accusantium voluptatum! Eius temporibus asperiores obcaecati molestias? Distinctio ipsam nulla, pariatur aut numquam obcaecati dignissimos libero tenetur doloremque architecto? Quos ducimus fuga dicta?', address: 'MIT Massachussett' },
];

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private messagesService: MessagesService) { }

  public getEmployee(): Observable<Employee[]> {
    const employee = of(EMPLOYEE_DATA);
    // this.messagesService.add('Employee is loading ...');
    return employee;
  }

  public getEmployeeById(employeeId: String): Observable<Employee> {
    const employee = EMPLOYEE_DATA.find(e => e.employeeId === employeeId)!;
    return of(employee);
  }
}
