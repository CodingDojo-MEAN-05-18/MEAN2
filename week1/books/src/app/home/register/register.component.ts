import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  registrationErrors: string[] = [];

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  onSubmit(user: User) {
    this.auth.register(user).subscribe(() => {
      this.router.navigateByUrl('books');
    });
  }
}
