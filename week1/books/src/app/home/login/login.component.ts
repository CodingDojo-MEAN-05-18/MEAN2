import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';

import { User } from '../../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  user: User = new User();

  errors: string[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(user: User): void {
    this.auth.login(user).subscribe(() => this.router.navigateByUrl('books'));
  }

  private handleErrors(errors: string[] | Error): void {
    this.errors = Array.isArray(errors) ? errors : [errors.message];
  }
}
