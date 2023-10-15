import { Component, Input, OnInit } from '@angular/core';
import { UserComponent } from 'src/app/components/user/user.component';
import { Element } from 'src/app/shared/interfaces/element';
import { CartService } from 'src/app/shared/services/cart.service';

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
    this.cartService.addToCart(this.element);
  }
}
