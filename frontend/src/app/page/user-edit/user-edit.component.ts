import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { User } from 'app/model/user';
import { UserService } from 'app/service/user.service';
import { switchMap, take } from 'rxjs/operators';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User = null;
  serverError = '';

  constructor(
    private userService: UserService,
    private ar: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.ar.params.pipe(
      switchMap(params => this.userService.get(params.id))
    )
      .pipe(take(1))
      .subscribe(
        user => {
          this.user = (user as User);
          this.user.password = '';
        }
      );
  }

  onSubmit(ngForm: NgForm): void {
    const putObject = Object.assign({ _id: this.user._id }, ngForm.value);
    this.userService.update(putObject)
      .toPromise().then(
        user => history.back(),
        err => {
          this.serverError = err.error;
          const to = setTimeout(() => {
            clearTimeout(to);
            this.serverError = '';
          }, 3000);
        }
      );
  }

}
