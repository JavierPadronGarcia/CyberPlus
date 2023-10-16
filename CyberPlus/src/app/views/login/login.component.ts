import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/classes/user';
import { LoginService } from 'src/app/shared/services/login.service';
import Swal from 'sweetalert2';

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
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Inicio de sesión correcto',
          showConfirmButton: false,
          timer: 1000,
        })
        this.router.navigate(['/home']);
      },
      (error: Error) => {
        console.error("Error al realizar el acceso - login")
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No se ha podido iniciar sesión',
          showConfirmButton: false,
          timer: 1000,
        })
      }
    )
  }
}
