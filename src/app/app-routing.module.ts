import { LadingComponent } from './modules/lading/lading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanActivateGuard } from './guards/can-activate.guard';
import { LeaveGuard } from './guards/leave.guard';
import { LeaveLoginGuard } from './guards/leave-login.guard';

const routes: Routes = [
  {
    path: 'home',
    component: LadingComponent,
    canActivate: [LeaveLoginGuard],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/liquidation/liquidation.module').then(
        (m) => m.LiquidationModule
      ),
    canActivate: [CanActivateGuard],
    canDeactivate: [LeaveGuard],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
