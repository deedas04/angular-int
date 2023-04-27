import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { UsersComponent } from './users.component';

@NgModule({
  imports: [CommonModule],
  declarations: [UsersComponent, UserListComponent, UserCardComponent],
  exports: [UsersComponent],
})
export class UsersModule {}
