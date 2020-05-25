import { Bill, Service } from '../billing/billing.component';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
   }) 
export class Bills{

    public services: Service[] = [
        {serviceCode:'MNTC', serviceName:'Maintenance', chargePerItem:2500, gst:5, quantity:1, tax:0, total:0},
        {serviceCode:'PLBR', serviceName:'Plumber Labour Charge', chargePerItem:400, gst:5, quantity:1, tax:0, total:0}
    
      ];
      
    public bills:Bill[] = [
        {
          invoicenumber: 10001,
          items:[    {serviceCode:'MNTC', 
                      serviceName:'Maintenance', 
                      chargePerItem:2500, gst:5, quantity:1, tax:0, total:0},
                      {serviceCode:'PLBR', 
                      serviceName:'Plumber Labour Charge', 
                      chargePerItem:400, gst:5, quantity:1, tax:0, total:0},
                ],
          status:'PENDING',
          person:{
            'persnId': 1001, 'persnFirstName': 'Santosh', 'persnLastName': 'Mangsuli',
            'mobileNumber': 9972110105,
            'email':'santoshm@gmail.com',
            'gender': '1',
            'type': 'owner',
            'owner': { flatNo: 2000, area: 1040, block: 'A' },
            'amtDue': 2001.09
          },
          dueDate:new Date(),
          totalDueIncTax:2500,
          billStDate: new Date('03/01/2020'),
          billEndDate: new Date('03/02/2020')
    
        },
        {
          invoicenumber: 10002,
          items:[    {serviceCode:'MNTC', 
                      serviceName:'Maintenance', 
                      chargePerItem:2500, gst:5, quantity:1, tax:0, total:0},
                ],
          status:'PENDING',
          person:{
            'persnId': 1002, 'persnFirstName': 'Ramesh', 'persnLastName': 'Belligundi',
            'mobileNumber': 9989898989,
            'gender': '1',
            'email':'Ramesh@gmail.com',
            'type': 'owner',
            'owner': { flatNo: 2001, area: 1040, block: 'A' },
            'amtDue': 2001.09
          },
          dueDate:new Date(),
          totalDueIncTax:2500,
          billStDate: new Date('03/01/2020'),
          billEndDate: new Date('03/02/2020')
    
        }
        
      ];
    
}