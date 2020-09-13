import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AppealListComponent } from './appeal-list/appeal-list.component';
import { AppealAddComponent } from './appeal-add/appeal-add.component';
import { AppealDetailsComponent } from './appeal-details/appeal-details.component';
import { AppealRoutingModule } from './appeal-routing.module';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    AppealListComponent,
    AppealAddComponent,
    AppealDetailsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppealRoutingModule,
    MatTableModule,
    MatTabsModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule
  ]
})
export class AppealModule { }
