/* tslint:disable: max-line-length */
import { Routes } from '@angular/router';

import { AuthGuard } from './services/authguard';
import { DashboardComponent } from './features/dashboard.component';
import { NotFound404Component } from './not-found404.component';

export const routes: Routes = [
  { path: '', component: DashboardComponent, pathMatch: 'full' },
  { path: 'lazy', loadChildren: './features/lazy/index#LazyModule' },
  { path: 'login', loadChildren: './features/login/index#LoginModule' },
  { path: 'media', loadChildren: './features/media/index#MediaModule' },
  {
    path: 'sync',
    loadChildren: './features/sync/index#SyncModule?sync=true',
    canActivate: [AuthGuard] },
  { path: '**', component: NotFound404Component }
];