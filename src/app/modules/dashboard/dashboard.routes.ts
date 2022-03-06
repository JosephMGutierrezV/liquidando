import { Routes } from '@angular/router';
import { HistoricalComponent } from '../liquidation/historical/historical.component';
import { LiquideComponent } from '../liquidation/liquide/liquide.component';
import { HomeComponent } from '../liquidation/home/home.component';

export const dashboardRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'liquide', component: LiquideComponent },
  { path: 'historical', component: HistoricalComponent },
];
