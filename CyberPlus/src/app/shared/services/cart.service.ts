import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Element } from '../interfaces/element';
import { Subject } from 'rxjs';

const endPoint = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor() { }

  private productAdded = new Subject<void>();
  private cartUpdated = new Subject<Element[]>();

  productAdded$ = this.productAdded.asObservable();
  cartUpdated$ = this.cartUpdated.asObservable();

  notifyProductAdded() {
    this.productAdded.next();
  }

  notifyCartUpdated(cart: Element[]) {
    this.cartUpdated.next(cart);
  }

}
