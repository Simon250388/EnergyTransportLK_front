import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';


const routes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'appeal',
    loadChildren: () => import('src/app/appeal/appeal.module').then(m => m.AppealModule)
  },
  {
    path: 'desktop',
    loadChildren: () => import('src/app/desktop/desktop.module').then(m => m.DesktopModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('src/app/notification/notification.module').then(m => m.NotificationModule)
  },
  {
    path: 'object-tp',
    loadChildren: () => import('src/app/object-tp/object-tp.module').then(m => m.ObjectTpModule)
  },
  {
    path: 'request-tp',
    loadChildren: () => import('src/app/request-tp/request-tp.module').then(m => m.RequestTpModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
