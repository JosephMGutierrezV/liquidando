import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoricalComponent } from './historical/historical.component';
import { HomeComponent } from './home/home.component';
import { LiquideComponent } from './liquide/liquide.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardRoutesModule } from '../dashboard/dashboard-routes.module';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { AdminComponent } from './admin/admin.component';

@NgModule({
  declarations: [
    HistoricalComponent,
    HomeComponent,
    LiquideComponent,
    DashboardComponent,
    AdminComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    DashboardRoutesModule,
    TableModule,
  ],
})
export class LiquidationModule {}
