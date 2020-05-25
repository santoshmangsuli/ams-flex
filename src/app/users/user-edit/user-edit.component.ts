import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../model/user';
import { keyValuesToMap } from '@angular/flex-layout/extended/typings/style/style-transforms';
import { Bill } from 'src/app/billing/billing.component';
import { BillComponent } from 'src/app/billing/bill/bill.component';
import { BillingDashboardComponent } from 'src/app/billing/billing-dashboard/billing-dashboard.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user:User;
  displayedColumns:string[]=['key','value'];
  cusomerInfo:object[];
  bills:Bill[];
  bill:Bill;
  
  constructor(private activatedRoute: ActivatedRoute,
              private billdscmp:BillingDashboardComponent) {
    this.activatedRoute.paramMap
      .subscribe(params => {
         this.user = window.history.state;
         this.bill = this.billdscmp
                         .getBills()
                         .filter(b=>b.person.persnId === this.user.persnId)[0];
          console.log(' In edit '+JSON.stringify(this.user));
      });
  }


  ngOnInit() {
  }

}
