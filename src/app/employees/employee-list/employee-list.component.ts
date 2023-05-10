import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() employeeSearchTerm;
  employees: any = [];
  isLoading: boolean;
  constructor(private empService: EmployeesService) {}

  ngOnInit() {
    this.isLoading = true;
    this.loadEmployees();
  }

  ngOnChanges() {
    this.isLoading = true;
    this.employees = this.employees.filter(
      (emp) =>
        emp.firstName.includes(this.employeeSearchTerm) ||
        emp.email == this.employeeSearchTerm
    );
    this.isLoading = false;
  }

  ngAfterViewInit() {
    this.isLoading = false;
  }

  loadEmployees() {
    this.empService.getEmployees().subscribe((employees: any) => {
      console.log(employees);
      this.employees = employees;
    });
  }
}
