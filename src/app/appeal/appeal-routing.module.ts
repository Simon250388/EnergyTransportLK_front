import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppealListComponent } from './appeal-list/appeal-list.component';
import { AppealAddComponent } from './appeal-add/appeal-add.component';
import { AppealDetailsComponent } from './appeal-details/appeal-details.component';

const routes: Routes = [
  { path: '', component: AppealListComponent },
  { path: 'new', component: AppealAddComponent },
  { path: ':id', component: AppealDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppealRoutingModule { }
