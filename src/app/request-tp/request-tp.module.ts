import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RequestTPListComponent } from './request-tp-list/request-tp-list.component';
import { RequestTpAddComponent } from './request-tp-add/request-tp-add.component';
import { RequestTpDetailsComponent } from './request-tp-details/request-tp-details.component';
import { RequestTpRoutingModule } from './request-tp-routing.module';

import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatMomentDateModule } from '@angular/material-moment-adapter';


import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule} from '@angular/material/expansion'
import { MatDialogModule} from '@angular/material/dialog';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { CommissioningDateAddComponent } from './commissioning-date-add/commissioning-date-add.component'
import { MatNativeDateModule } from '@angular/material/core';



@NgModule({
  declarations: [
    RequestTPListComponent,
    RequestTpAddComponent,
    RequestTpDetailsComponent,
    CommissioningDateAddComponent
  ],
  imports: [    
    CommonModule,    
    RequestTpRoutingModule,
    ReactiveFormsModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatMomentDateModule
  ]
})
export class RequestTpModule { }
