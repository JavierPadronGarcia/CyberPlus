import { Component, Input, OnInit } from '@angular/core';
import { Element } from 'src/app/shared/interfaces/element';
import { CartService } from 'src/app/shared/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public element: Element;

  @Input()
  public logged: number;

  imagesURL: string = "../../../../assets/images/";
  imageName: string = "";

  ngOnInit(): void {
    this.imageName = this.element.image
  }

  constructor(private cartService: CartService) {
    this.element = {
      id: 0,
      title: "",
      price: 0,
      image: "",
      discount: 0,
      prevPrice: 0
    }
  }

  addToCart() {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Agregado al carrito',
      showConfirmButton: false,
      timer: 500,
    })
    this.cartService.addToCart(this.element);
  }
}
