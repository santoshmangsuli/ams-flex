import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { UsersComponent } from './users/users.component';
import { BillingComponent } from './billing/billing.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { BillingDashboardComponent } from './billing/billing-dashboard/billing-dashboard.component';


const routes: Routes = [
  { path: '', component: OverviewComponent },
  { path: 'residents',      component: UsersComponent },
  { path: 'billing',      component: BillingComponent },
  { path: 'edituser',      component:  UserEditComponent},
  { path:'billdashboard', component: BillingDashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
