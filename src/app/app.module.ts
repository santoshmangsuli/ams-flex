import { CommonModule } from '@angular/common'; 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatGridListModule, MatPaginatorModule, MatToolbarModule, MatIconModule, MatFormFieldModule,
  MatInputModule, MatButtonModule, MatListModule, MatCardModule, MatRadioModule, MatTabsModule, MatTableModule,
  MatOptionModule, MatSelectModule, MatAccordion
 } from '@angular/material';
 import {MatExpansionModule} from '@angular/material/expansion';
import { MyToDosComponent } from './my-to-dos/my-to-dos.component';
import { UsersComponent } from './users/users.component';
import { OverviewComponent } from './overview/overview.component';
import { HttpClientModule } from '@angular/common/http';
import { BillingComponent } from './billing/billing.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { BillingDashboardComponent } from './billing/billing-dashboard/billing-dashboard.component';
import { BillComponent } from './billing/bill/bill.component';
import { GenTableComponent } from './gen-table/gen-table.component';

@NgModule({
  declarations: [
    AppComponent,
    MyToDosComponent,
    UsersComponent,
    OverviewComponent,
    BillingComponent,
    UserEditComponent,
    BillingDashboardComponent,
    BillComponent,
    GenTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    MatOptionModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatExpansionModule,
    MatRadioModule,
    MatTableModule,
    MatPaginatorModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
