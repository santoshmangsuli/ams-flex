import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-gen-table',
  templateUrl: './gen-table.component.html',
  styleUrls: ['./gen-table.component.css']
})
export class GenTableComponent implements OnInit {

  @Input()
  displayedColumns:string[];

  @Input()
  dsTransactions: MatTableDataSource<any>;

  @Input()
  colPropMap:Map<string,string>;

  @Input()
  footerPropMap:Map<string,string>;

  constructor() { }

  ngOnInit() {
  }

  getValue(col,row){
    return eval(this.colPropMap.get(col));
  }
  getFooterValue(col){
    return this.footerPropMap.get(col);
  }

}
