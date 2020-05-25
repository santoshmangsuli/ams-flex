import { Component, OnInit, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { ActivatedRoute } from '@angular/router';
import { User } from '../users/model/user';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit {
  
  bill: Bill;

  state:string = 'CRBILL';

  constructor(private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.paramMap
      .subscribe(params => {
         this.bill = window.history.state;
         if(this.bill && this.bill.person){
           this.state = 'DASHB';
         }
          console.log(' In edit '+this.state+JSON.stringify(this.bill));
      });
  }

  ngOnInit() {
   
  }

  onServiceSelection(){
    console.log('service ');
  }
}

export interface Item {
  serviceCode?: string;
  chargePerItem?: number;
  quantity?:number;
  tax?: number;
  gst?: number;
  total?: number;
}

export interface Service {
  serviceCode: string;
  serviceName: string;
  chargePerItem: number;
  quantity:number;
  tax: number;
  gst: number;
  total: number;
}

export interface  Bill {
  invoicenumber:number,
  items:Service[],
  status:string,
  person:User,
  dueDate:Date,
  latePayFee?:number,
  totalDueIncTax:number,
  billStDate?:Date,
  billEndDate?:Date,
  billIssueDate?:Date
}
