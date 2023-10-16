import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Element } from '../interfaces/element';

const endPoint = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Element[];

  constructor() {
    this.cart = [{
      "id": 1,
      "title": "PC Gaming Última Mega | Intel Core i5 12400F / RTX 4070 12GB / 16GB RAM / 1TB M.2",
      "price": 1615.67,
      "image": "PC-Gaming-Última-Mega.svg",
      "discount": 15,
      "prevPrice": 1835.99
    },
    {
      "id": 2,
      "title": "PC Gaming Última Zero S1 | i3 12100F / 8GB RAM / GTX 1650 4GB / 480GB",
      "price": 608.08,
      "image": "PC-Gaming-Última-Mega.svg",
      "discount": 12,
      "prevPrice": 691
    }]
  }

  public addToCart(item: Element) {
    this.cart.push(item);
  }

  public deleteFromCart(id: number) {
    console.log(id)
    this.cart = this.cart.splice(id, 1);
  }

  public getCart(): Element[] {
    return this.cart;
  }
}
