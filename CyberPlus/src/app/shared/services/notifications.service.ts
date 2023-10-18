import { Injectable } from '@angular/core';
import { Element } from '../interfaces/element';
import { Subject } from 'rxjs';

const endPoint = "http://localhost:8080"

@Injectable({
  providedIn: 'root'
})
export class NotifiactionsService {
  constructor() { }

  private productAdded = new Subject<void>();
  private cartUpdated = new Subject<Element[]>();

  private searcherOpened = new Subject<void>();

  private chargeSlides = new Subject<void>();

  productAdded$ = this.productAdded.asObservable();
  cartUpdated$ = this.cartUpdated.asObservable();
  searcherOpened$ = this.searcherOpened.asObservable();
  chargeSlides$ = this.chargeSlides.asObservable();

  notifyProductAdded() {
    this.productAdded.next();
  }

  notifyCartUpdated(cart: Element[]) {
    this.cartUpdated.next(cart);
  }

  notifySearcherOpened() {
    this.searcherOpened.next();
  }

  notifyChargeSlides() {
    this.chargeSlides.next();
  }

}
