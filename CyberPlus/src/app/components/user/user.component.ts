import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import Swal from 'sweetalert2';
import { Element } from 'src/app/shared/interfaces/element';
import { NotifiactionsService } from 'src/app/shared/services/notifications.service';
import { Subscription } from 'rxjs';

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
  @Input() public menuVisibility: boolean;
  @Input() public cartOpened: boolean;

  public myToken: number;
  public userEmail: string | null;
  cart: Element[];

  @Output() cartOpenChangedSeacher = new EventEmitter<boolean>();
  @Output() cartOpenChangedMenu = new EventEmitter<boolean>();

  constructor(private NotifiactionsService: NotifiactionsService) {
    this.cart = [];
    this.myToken = 0;
    this.userEmail = "";

    this.NotifiactionsService.productAdded$.subscribe(() => {
      this.getProducts();
    })
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
      toast: true

    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('personalToken');
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

  toggleCart() {
    this.cartOpened = !this.cartOpened;
    if (this.seacherVisibility) {
      this.cartOpenChangedSeacher.emit();
    }

    if (this.menuVisibility) {
      this.cartOpenChangedMenu.emit();
    }
  }

  getProducts() {
    this.cart = [];
    const noObjectCart = localStorage.getItem('cart');
    this.cart = noObjectCart ? JSON.parse(noObjectCart) : [];
  }
}