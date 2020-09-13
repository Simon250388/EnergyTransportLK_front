import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObjectTpListComponent } from './object-tp-list/object-tp-list.component';
import { ObjectTpDetailsComponent } from './object-tp-details/object-tp-details.component';

const routes: Routes = [
  { path: '', component: ObjectTpListComponent },
  { path: ':id', component: ObjectTpDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ObjectTpRoutingModule { }
