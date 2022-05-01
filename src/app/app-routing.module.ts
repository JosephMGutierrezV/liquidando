import { LadingComponent } from './modules/lading/lading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';
import { RegisterComponent } from './modules/auth/register/register.component';
import { CanActivateGuard } from './guards/can-activate.guard';

const routes: Routes = [
  {
    path: 'home',
    component: LadingComponent,
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./modules/liquidation/liquidation.module').then(
        (m) => m.LiquidationModule
      ),
    canActivate: [CanActivateGuard],
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
