import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public user: User;

  constructor(private router: Router, private loginService: LoginService) {
    this.user = new User();
  }

  submit(): void {
    this.loginService.login(this.user).subscribe(
      (data: number) => {
        localStorage.setItem('userEmail', this.user.email);
        localStorage.setItem('personalToken', `${data}`);
        this.router.navigate(['/home']).then(() => { window.location.reload() });
      },
      (error: Error) => {
        console.error("Error al realizar el acceso - login")
      }
    )
  }
}
