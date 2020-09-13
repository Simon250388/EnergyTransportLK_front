import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';

import { ObjectTpRoutingModule } from './object-tp-routing.module';
import { ObjectTpListComponent } from './object-tp-list/object-tp-list.component';
import { ObjectTpDetailsComponent } from './object-tp-details/object-tp-details.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [
    ObjectTpListComponent,
    ObjectTpDetailsComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    LayoutModule,
    ObjectTpRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatListModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class ObjectTpModule { }
