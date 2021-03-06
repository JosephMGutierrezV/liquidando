import { AdminComponent } from '../liquidation/admin/admin.component';
import { Routes } from '@angular/router';
import { HistoricalComponent } from '../liquidation/historical/historical.component';
import { LiquideComponent } from '../liquidation/liquide/liquide.component';
import { HomeComponent } from '../liquidation/home/home.component';

export const dashboardRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'liquidate', component: LiquideComponent },
  { path: 'record', component: HistoricalComponent },
  { path: 'admin', component: AdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
