import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/service/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'app/model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User();
  serverError = '';

  constructor(
    private auth: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onLogin(ngForm: NgForm): void {
    this.auth.login(ngForm.value).toPromise().then(
      userResponse => {
        if (this.auth.currentUserValue) {
          this.router.navigate(['/dashboard']);
        }
      },
      err => {
        this.serverError = 'Rossz e-mail cím vagy jelszó!';
        // this.serverError = err.error;
        const to = setTimeout(() => {
          clearTimeout(to);
          this.serverError = '';
        }, 3000);
      }
    );
  }

}