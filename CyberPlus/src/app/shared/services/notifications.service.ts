import { Injectable } from '@angular/core';
import { Element } from '../interfaces/element';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotifiactionsService {
  constructor() { }

  private productAdded = new Subject<void>();
  private cartUpdated = new Subject<Element[]>();


  private chargeSlides = new Subject<void>();

  productAdded$ = this.productAdded.asObservable();
  cartUpdated$ = this.cartUpdated.asObservable();

  chargeSlides$ = this.chargeSlides.asObservable();

  notifyProductAdded(): void {
    this.productAdded.next();
  }

  notifyCartUpdated(cart: Element[]): void {
    this.cartUpdated.next(cart);
  }

  notifyChargeSlides(): void {
    this.chargeSlides.next();
  }
}
