import { User } from '../users/model/user';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn:"root"
})
export class Users{

    public users: User[] = [{
        'persnId': 1001, 'persnFirstName': 'Santosh', 'persnLastName': 'Mangsuli',
        'mobileNumber': 9972110105,
        'email':'santoshm@gmail.com',
        'gender': '1',
        'type': 'owner',
        'owner': { flatNo: 2000, area: 1040, block: 'A' },
        'amtDue': 2001.09
      },{
        'persnId': 1002, 'persnFirstName': 'Ramesh', 'persnLastName': 'Belligundi',
        'mobileNumber': 9989898989,
        'gender': '1',
        'email':'Ramesh@gmail.com',
        'type': 'owner',
        'owner': { flatNo: 2001, area: 1040, block: 'A' },
        'amtDue': 2001.09
      },{
        'persnId': 1003, 'persnFirstName': 'Raghu', 'persnLastName': 'Kulkarni',
        'mobileNumber': 9989877798,
        'gender': '1',
        'email':'Raghu@gmail.com',
        'type': 'owner',
        'owner': { flatNo: 2002, area: 1040, block: 'A' },
        'amtDue': 781.09
      },{
        'persnId': 1004, 'persnFirstName': 'John', 'persnLastName': 'Rambo',
        'mobileNumber': 8976543456,
        'gender': '1',
        'email':'Ramboj@gmail.com',
        'type': 'owner',
        'owner': { flatNo: 2003, area: 1040, block: 'A' },
        'amtDue': 1211.09
      }
      ];
}