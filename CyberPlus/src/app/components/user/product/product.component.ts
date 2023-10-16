import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  cart: any;

  constructor(private cartService: CartService) {
    this.cart = [{}]
  }

  getScreenWidth() {
    return window.innerWidth;
  }

  removeFromCart(id: number) {
    Swal.fire({
      position: 'bottom',
      icon: 'question',
      title: 'No se ha podido iniciar sesión',
      cancelButtonText: 'Cancelar',
      confirmButtonText: 'Borrar',
      confirmButtonColor: '#3085d6',
      showCancelButton: true,
      cancelButtonColor: '#d33',
      reverseButtons: true,
      toast: true,
    }).then((result) => {
      if (result.isConfirmed) {
        this.cartService.deleteFromCart(id);
        this.cart = this.cartService.getCart()
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

}
