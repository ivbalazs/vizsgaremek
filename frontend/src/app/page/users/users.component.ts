import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from 'app/service/user.service';
import { ConfigService } from 'app/service/config.service';
import { User } from 'app/model/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  list$: Observable<User | User[]> = this.userService.get();
  cols: any[] = this.config.userColumns;

  txt: string = '';
  phraseKey: string = '';
  // keyArray: string[] = Object.keys(new User());
  // sorter
  // columnKey: string = '';
  // direction: string = '';

  constructor(
    private userService: UserService,
    private config: ConfigService,
  ) { }

  ngOnInit(): void {
  }

  update(user: User): void {
    this.userService.update(user).toPromise().then(
      userResponse => console.log(userResponse),
      err => console.error(err)
    );
  }
  // sorter
  // onColumnSelect(key: string): void {
  //   this.swichDirectionValue();
  //   this.columnKey = key;
  // }

  // swichDirectionValue(): any {
  //   if (this.direction === '' || this.direction === 'dsc') {
  //     return this.direction = 'asc';
  //   }
  //   return this.direction = 'dsc';
  // }


}