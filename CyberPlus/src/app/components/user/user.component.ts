import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CartService } from 'src/app/shared/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    trigger('moveLeft', [
      state('void', style({ transform: 'translate(100%)' })),
      state('*', style({ transform: 'translate(2.5%)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ]),
    trigger('dissolve', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 1 })),
      transition('void <=> *', animate('400ms ease-in-out')),
    ])
  ]
})
export class UserComponent implements OnInit {

  @Input()
  seacherVisibility: boolean;
  @Input()
  public cartOpened: boolean;
  @Input()
  cart: any;

  public myToken: number;
  public userEmail: string | null;

  @Output() cartOpenChanged = new EventEmitter<boolean>();

  constructor(private router: Router, private cartService: CartService) {
    this.myToken = 0;
    this.userEmail = "";
  }

  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.myToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userEmail')) {
      this.userEmail = localStorage.getItem('userEmail');
    }
  }

  public logout(): void {
    Swal.fire({
      position: 'bottom',
      icon: 'question',
      title: 'Seguro que quieres cerrar la sesión',
      cancelButtonText: 'No cerrar sesión',
      confirmButtonText: 'Confirmar',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      toast: true,
    }).then((result) => {
      if (result.isConfirmed) {
        if (localStorage.getItem('personalToken')) {
          localStorage.removeItem('personalToken');
        }
        Swal.fire({
          position: 'bottom',
          title: 'Sesión cerrada',
          icon: 'success',
          toast: true,
          timer: 1000,
          showConfirmButton: false
        }).then(() => {
          window.location.reload();
        })
      }
    })
  }

  openCart() {
    this.cartOpened = !this.cartOpened;
    this.cartOpenChanged.emit(this.cartOpened);
  }

}
