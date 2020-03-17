import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, from, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  tableArr: User[] = [{
    'persnId': 1001, 'persnFirstName': 'Santosh', 'persnLastName': 'Mangsuli',
    'mobileNumber': 9972110105,
    'gender': '1',
    'type': 'owner',
    'owner': { flatNo: 2000, area: 1040, block: 'A' },
    'amtDue': 2001.09
  },{
    'persnId': 1002, 'persnFirstName': 'Ramesh', 'persnLastName': 'Belligundi',
    'mobileNumber': 9989898989,
    'gender': '1',
    'type': 'owner',
    'owner': { flatNo: 2001, area: 1040, block: 'A' },
    'amtDue': 2001.09
  },{
    'persnId': 1003, 'persnFirstName': 'Raghu', 'persnLastName': 'Kulkarni',
    'mobileNumber': 9989877798,
    'gender': '1',
    'type': 'owner',
    'owner': { flatNo: 2002, area: 1040, block: 'A' },
    'amtDue': 781.09
  }
  ];

  private usersArraySubject:BehaviorSubject<User[]>;

  constructor(private http: HttpClient) { 
    this.usersArraySubject = new BehaviorSubject<User[]>(this.tableArr);
  }

  getUserById(id): Observable<User> {
    console.log('getUsers');
    var usr = new User();
    //this.http.get<User[]>('person/'+id).subscribe(u=>console.log('JSON '+JSON.stringify(u)));
    //return this.http.get<User>('person/'+id);
    return new Observable<User>();
  }

  getUsers(page?, size?, sortBy?): Observable<User[]> {
    console.log('getUsers ');
    this.usersArraySubject.next(this.tableArr);
    return this.usersArraySubject.asObservable();
  }

  createUser(user: User) {
    console.log('User ' + JSON.stringify(user));
    this.http.post<User>('person/', user).subscribe(hero => {
      //this.heroes.push(hero);
      console.log("insert success");
    }, error => {
      //alert("Failed to get the hero.");
      console.log("insert failed");
    });
  }

  public deleteUser(persnId: number): void {

    this.http.delete('person/' + persnId).subscribe(hero => {
      //this.heroes.push(hero);
      console.log("delete success");
    }, error => {
      //alert("Failed to get the hero.");
      console.log("delete failed");
    });
  }
}
