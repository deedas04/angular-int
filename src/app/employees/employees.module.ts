import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeCardComponent } from './employee-card/employee-card.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { EmployeesService } from './employees.service';
import { EmployeesFilterComponent } from './employees-filter/employees-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { SharedModule } from '../shared/shared/shared.module';
import { CarbonModule } from '../carbon.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatNativeDateModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatIconModule,
    SharedModule,
    CarbonModule,
  ],
  declarations: [
    EmployeesComponent,
    EmployeeListComponent,
    EmployeeCardComponent,
    EmployeesFilterComponent,
  ],
  exports: [EmployeesComponent],
  providers: [EmployeesService],
})
export class EmployeesModule {}
