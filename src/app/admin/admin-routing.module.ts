import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../not-found/not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './event/add/add.component';
import { EventComponent } from './event/event.component';
import { MemberComponent } from './member/member.component';
import { PrintComponent } from './print/print.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'member',
    component: MemberComponent,
  },
  {
    path: 'event',
    component: EventComponent,
  },
  {
    path: 'event/add',
    component: AddComponent,
  },
  {
    path: 'print',
    component: PrintComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
