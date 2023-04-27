import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employees.service';

@NgModule({
  imports: [CommonModule, HttpClientModule, MatCardModule],
  declarations: [
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeCardComponent,
  ],
  exports: [EmployeesComponent],
  providers: [EmployeesService],
})
export class EmployeesModule {}
