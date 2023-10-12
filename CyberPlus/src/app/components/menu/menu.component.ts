import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('moveDown', [
      state('void', style({ transform: 'translateY(-100%)' })),
      state('*', style({ transform: 'translateY(0)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})
export class MenuComponent {

  menuVisbility: boolean = false;
  searcherVisibility: boolean = false;

  constructor(private router: Router) { }

  changeMenuVisibility() {
    if (this.searcherVisibility) { this.changeSearcherVisibility(); }
    this.menuVisbility = !this.menuVisbility
  }

  changeSearcherVisibility() {
    if (this.menuVisbility) { this.changeMenuVisibility(); }
    this.searcherVisibility = !this.searcherVisibility
  }

  navigateToLogin(){
    this.router.navigateByUrl('/login');
  }

}