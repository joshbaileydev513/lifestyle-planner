import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  constructor(private router: Router) {}

  username = '';
  password = '';

  onLogin() {
    // In a real app, you'd validate credentials first
    localStorage.setItem('loggedIn', 'true');
    this.router.navigate(['/motivation']);
  }
}
