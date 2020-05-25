import { Component, OnInit, Input } from '@angular/core';
import { Service, Item, Bill } from '../billing.component';
import { MatTableDataSource } from '@angular/material';
import { DataSource } from '@angular/cdk/table';

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

  tempItem:Service;

  services: Service[] = [
    {serviceCode:'MNTC', serviceName:'Maintenance', chargePerItem:2500, gst:5, quantity:1, tax:0, total:0},
    {serviceCode:'PLBR', serviceName:'Plumber Labour Charge', chargePerItem:400, gst:5, quantity:1, tax:0, total:0}

  ];
  dsTransactions: MatTableDataSource<Item>;
  dataSource: MatTableDataSource<Item>;
  displayedColumns = ['item', 'quantity','rateperitem','tax','gst','total'];

  colPropMap =  new Map<string,Object>([
    ["item","row.serviceName"],  
    ["rateperitem","row.chargePerItem"], ["gst", "row.gst"],
    ["quantity","row.quantity"],["tax","row.chargePerItem * row.gst /100"],
    ["total","row.chargePerItem * row.quantity + (row.chargePerItem * row.gst /100)"]
  ]); 

  footerPropMap:Map<string,Object>;  

  @Input()
  bill:Bill;

  @Input()
  state:string;

  @Input()
  items: Item[];

  constructor() { 
  }

  ngOnInit() {
    if(this.items && this.items.length > 0){
      this.dsTransactions = new MatTableDataSource<Item>(this.items);    
      this.dataSource = this.dsTransactions;
    }else{
      this.items = [];
      this.dsTransactions = new MatTableDataSource<Item>(this.items);    
    }
    this.footerPropMap = new Map<string,Object>([
      ["item",""],  
      ["rateperitem",""], ["gst", ""],
      ["quantity",""],["tax",eval("this.dsTransactions.data.map(t => {return t.chargePerItem*t.gst/100;})"
      +".reduce((acc, value) => acc + value, 0);")],
      ["total",eval("this.dsTransactions.data.map(t =>  (t.chargePerItem* t.quantity+(t.chargePerItem * t.gst /100)))"
      +".reduce((acc, value) => acc + value, 0);")]]); 
  
  }

  addItem(){
    this.items.push(this.tempItem);
    this.dsTransactions = new MatTableDataSource(this.items); 
  }

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    return this.dataSource && this.dataSource.data.map(t => {
      return (t.chargePerItem* t.quantity+(t.chargePerItem * t.gst /100))})
              .reduce((acc, value) => acc + value, 0);
  }


  getTotalTax() {
    return this.dsTransactions.data.map(t => {return t.chargePerItem*t.gst/100;})
                .reduce((acc, value) => acc + value, 0);
  }

}
