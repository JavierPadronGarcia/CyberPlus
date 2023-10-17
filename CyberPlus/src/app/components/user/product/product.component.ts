import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Element } from 'src/app/shared/interfaces/element';
import { NotifiactionsService } from 'src/app/shared/services/notifications.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() cart: Element[];

  @Output() cartChanged = new EventEmitter<boolean>();

  constructor(private notifiactionsService: NotifiactionsService) { }

  getScreenWidth() {
    return window.innerWidth;
  }

  removeFromCart(index: number) {
    Swal.fire({
      position: 'bottom',
      icon: 'question',
      title: 'Seguro que quiere eliminarlo del carrito?',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Eliminar',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      toast: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.cart.splice(index, 1)
        const stringidiedCart = JSON.stringify(this.cart);
        localStorage.setItem('cart', stringidiedCart);
        this.updateCart()
        Swal.fire({
          position: 'bottom',
          title: 'Eliminado!',
          icon: 'success',
          toast: true,
          timer: 1000,
          showConfirmButton: false
        })
      }
    })
  }

  updateCart() {
    this.cartChanged.emit();
    this.notifiactionsService.notifyCartUpdated(this.cart);
  }

}
