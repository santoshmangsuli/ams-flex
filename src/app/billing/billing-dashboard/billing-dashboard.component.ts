import { Component, OnInit, Inject, Injectable } from '@angular/core';
import { Service, Bill } from '../billing.component';
import { MatTableDataSource } from '@angular/material';
import { User } from 'src/app/users/model/user';
import {Bills} from '../../data/bills';
@Component({
  selector: 'app-billing-dashboard',
  templateUrl: './billing-dashboard.component.html',
  styleUrls: ['./billing-dashboard.component.css']
})
@Injectable({
  providedIn: 'root',
 })
export class BillingDashboardComponent implements OnInit {

  billds:MatTableDataSource<Bill>; 
  bills:Bill[];

  displayedColumns:string[] = [
    'invoicenumber',
    'status',
    'personname',
    'dueDate',
    'totalDueIncTax',
    'action'
  ];
  constructor(private data:Bills) { 
    this.bills = data.bills;
  }

  ngOnInit() {
    this.billds = new MatTableDataSource(this.bills);
  }

  public getBills():Bill[]{
    console.log('getBills');
    return this.bills;
  }
}
