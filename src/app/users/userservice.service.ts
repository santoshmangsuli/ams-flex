import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Observable, from, BehaviorSubject } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { User } from './model/user';
import {Users} from '../data/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  tableArr: User[];

  private usersArraySubject:BehaviorSubject<User[]>;

  constructor(private http: HttpClient,private users:Users) {
    this.tableArr = this.users.users; 
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
