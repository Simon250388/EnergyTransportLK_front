import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RequestTPListComponent } from './request-tp-list/request-tp-list.component';
import { RequestTpAddComponent } from './request-tp-add/request-tp-add.component';
import { RequestTpDetailsComponent } from './request-tp-details/request-tp-details.component';

const routes: Routes = [
  { path: '', component: RequestTPListComponent, },
  { path: 'new', component: RequestTpAddComponent },
  { path: ':id', component: RequestTpDetailsComponent }
];

@NgModule({  
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestTpRoutingModule { }
