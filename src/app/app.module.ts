import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { EmployeesModule } from './employees/employees.module';

@NgModule({
  imports: [BrowserModule, FormsModule, UsersModule, EmployeesModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
