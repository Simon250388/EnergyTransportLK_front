import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DesktopRoutingModule } from './desktop-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

import { DesktopComponent } from './desktop.component';
import { AppealDesktopComponent } from './appeal-desktop/appeal-desktop.component';
import { NotificationDesktopComponent } from './notification-desktop/notification-desktop.component';
import { PaymentsDesktopComponent } from './payments-desktop/payments-desktop.component';
import { RequestTpDesktopListComponent } from './request-tp-desktop-list/request-tp-desktop-list.component';
import { ValueMeterDesktopComponent } from './value-meter-desktop/value-meter-desktop.component';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    DesktopComponent,
    AppealDesktopComponent,
    NotificationDesktopComponent,
    PaymentsDesktopComponent,
    RequestTpDesktopListComponent,
    ValueMeterDesktopComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    DesktopRoutingModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatProgressBarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class DesktopModule { }
