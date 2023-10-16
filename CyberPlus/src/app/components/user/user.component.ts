import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import Swal from 'sweetalert2';
import { Element } from 'src/app/shared/interfaces/element';

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

  @Input() public seacherVisibility: boolean;
  @Input() public cartOpened: boolean;

  public myToken: number;
  public userEmail: string | null;
  cart: Element[]
  cartId: number

  @Output() cartOpenChanged = new EventEmitter<boolean>();

  constructor() {
    this.cart = [];
    this.myToken = 0;
    this.userEmail = "";
  }

  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.myToken = +localStorage.getItem('personalToken')!;

      if (localStorage.getItem('cart')) {
        this.getProducts();
      }
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
    if (this.seacherVisibility) {
      this.cartOpenChanged.emit();
    }
  }

  getProducts() {
    const noObjectCart = localStorage.getItem('cart');
    this.cart = noObjectCart ? JSON.parse(noObjectCart) : [];
  }

}

// let id = 1;
// let product = localStorage.getItem(`cart${id}`);
// let productObject: Element | null = product ? JSON.parse(product) : null;
// this.cart.push(productObject);
// id++;
// while (localStorage.getItem(`cart${id}`)) {
//   product = localStorage.getItem(`cart${id}`)
//   productObject = product ? JSON.parse(product) : null;
//   this.cart.push(productObject);
//   id++;
// }