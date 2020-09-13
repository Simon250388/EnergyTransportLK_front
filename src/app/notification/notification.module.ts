import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationRoutingModule } from './notification-routing.module';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { NotificationListComponent } from './notification-list/notification-list.component';

@NgModule({
  declarations: [
    NotificationListComponent
  ],
  imports: [
    CommonModule,
    NotificationRoutingModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ]
})
export class NotificationModule { }
