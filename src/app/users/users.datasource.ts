import { BehaviorSubject, Observable, of } from 'rxjs';
import { DataSource } from '@angular/cdk/table';
import { CollectionViewer } from '@angular/cdk/collections';
import { UserService } from './userservice.service'
import { catchError, finalize } from 'rxjs/operators';
import { User } from './model/user';

export class UsersDataSource implements DataSource<User> {

    private usersSubject = new BehaviorSubject<User[]>([]);
    private loadingSubject = new BehaviorSubject<boolean>(false);

    public loading$ = this.loadingSubject.asObservable();

    constructor(private userService:UserService) {}

    connect(collectionViewer: CollectionViewer): Observable<User[]> {
        return this.usersSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.usersSubject.complete();
        this.loadingSubject.complete();
    }

    loadUsers(pageIndex = 0, pageSize = 3, sortBy = 'persnFirstName') {

        this.loadingSubject.next(true);

        this.userService.getUsers( 
            pageIndex, pageSize, sortBy).pipe(
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
        .subscribe(users => {
            debugger;
            console.log('users'+JSON.stringify(users[0]));
            //this.usersSubject.next(users['content'])});
            this.usersSubject.next(users);
        });
    }    
}