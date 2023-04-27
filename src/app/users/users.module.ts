import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersComponent } from './users.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './users.service';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [CommonModule, HttpClientModule, MatCardModule],
  declarations: [UsersComponent, UserListComponent, UserCardComponent],
  exports: [UsersComponent],
  providers: [UsersService],
})
export class UsersModule {}
