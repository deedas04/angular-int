import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';

@NgModule({
  imports: [BrowserModule, FormsModule, UsersModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
