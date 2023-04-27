import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class EmployeesService {
  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get(
      'https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001'
    );
  }
}
