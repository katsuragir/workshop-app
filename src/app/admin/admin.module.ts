import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MemberComponent } from './member/member.component';
import { EventComponent } from './event/event.component';
import { PrintComponent } from './print/print.component';
import { SharedModule } from '../shared/shared.module';
import { AddComponent } from './event/add/add.component';

@NgModule({
  declarations: [
    DashboardComponent,
    MemberComponent,
    EventComponent,
    PrintComponent,
    AddComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, SharedModule],
})
export class AdminModule {}
