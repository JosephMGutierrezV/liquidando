import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { HistoricalComponent } from './modules/historical/historical.component';
import { LiquideComponent } from './modules/liquide/liquide.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, HistoricalComponent, LiquideComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
