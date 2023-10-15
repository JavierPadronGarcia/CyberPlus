import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

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
    this.cartService.deleteFromCart(id);
    this.cart = this.cartService.getCart()
  }

}
