import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  constructor(private router: Router) { }

  email: string
  description: string;

  submit() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Mensaje enviado correctamente',
      showConfirmButton: false,
      timer: 1000,
    })

    this.email = '';
    this.description = '';
  }

  goHome() {
    this.router.navigateByUrl('/').then(() => {
      window.location.reload()
    });
  }
}
