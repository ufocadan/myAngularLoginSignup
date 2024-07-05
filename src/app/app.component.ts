import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './login/login.component.html',
  styleUrl: './login/login.component.css'
})

export class AppComponent {
  title = 'myAngularLoginSignup';
}

export class LoginComponent {
  email: any;
  password: any;
  title = 'myAngularLoginSignup';
  onSubmit() {
    console.log('Login:', this.email, this.password);
    // Implement your login logic here
  }
}