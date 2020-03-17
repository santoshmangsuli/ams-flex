import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersDataSource } from './users.datasource';
import { UserService } from './userservice.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  displayedColumns: string[];

  dataSource: UsersDataSource;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
    this.displayedColumns = ["Name", "Mobile#", "Gender", "Type", "Amount Due", "Action"];
    this.dataSource = new UsersDataSource(this.userService);
    this.dataSource.loadUsers();
  }


  ngAfterViewInit() {
    this.paginator.page
      .pipe(
        tap(() => this.loadLessonsPage())
      )
      .subscribe();
  }

  loadLessonsPage() {
    this.dataSource.loadUsers(
      this.paginator.pageIndex,
      this.paginator.pageSize, '');
  }

  evalGender(gender:string){
    return gender=='1'?'Male':'Female';
  }

  evalAvatar(gender:string){
    return gender=='1'?'../assets/male.png':'../assets/female.png';
  }

}
