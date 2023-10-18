import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Element } from 'src/app/shared/interfaces/element';
import { NotifiactionsService } from 'src/app/shared/services/notifications.service';
import { ComponentService } from 'src/app/shared/services/component.service';
import { PcgamingService } from 'src/app/shared/services/pcgaming.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myToken: number;
  userEmail: string | null;
  cart: Element[] = [];
  cartUpdatedSubscription: Subscription;

  public components: any = {};
  public pcgamings: any = {};


  constructor(private componentService: ComponentService,
    private pcService: PcgamingService,
    private notificationService: NotifiactionsService) {
    this.cartUpdatedSubscription = this.notificationService.cartUpdated$.subscribe((cart) => {
      this.cart = cart;
    })
  }

  ngOnInit(): void {
    this.getComponents()
    this.getPcGaming()

    if (localStorage.getItem('personalToken')) {
      this.myToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userEmail')) {
      this.userEmail = localStorage.getItem('userEmail');
    }
  }

  insertProduct(product: Element) {
    this.cart.push(product);
    const stringifiedCart = JSON.stringify(this.cart);
    localStorage.setItem('cart', stringifiedCart);
    this.notificationService.notifyProductAdded();
  }

  public getComponents() {
    this.componentService.getComponents().subscribe(
      (data) => {
        this.components = data.componentes;
      },
      (error: Error) => {
        console.log("Error: " + error);
      },
      () => {
        console.log("Petición realizada correctamente");

        window.onload = () => {
          this.notificationService.notifyChargeSlides();
        }
      }
    )
  }

  public getPcGaming() {
    this.pcService.getComputers().subscribe(
      (data) => {
        this.pcgamings = data.pcgaming
      },
      (error: Error) => {
        console.log("Error: " + error);
      },
      () => {
        console.log("Petición realizada correctamente");
      }
    )
  }
}
