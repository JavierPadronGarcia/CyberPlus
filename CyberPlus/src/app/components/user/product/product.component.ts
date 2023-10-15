import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  cart: any;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.getCart()
  }

  getCart() {
    this.cartService.getCart().subscribe(
      (data) => {
        this.cart = data.products;
        console.log(this.cart)
      },
      (error: Error) => {
        console.log("Error: " + error);
      },
      () => {
        console.log("Petición realizada correctamente");
      })
  }
}
