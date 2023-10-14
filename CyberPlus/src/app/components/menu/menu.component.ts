import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  menuVisbility: boolean;
  searcherVisibility: boolean;

  constructor() {
    this.menuVisbility = false;
    this.searcherVisibility = false;
  }

  changeMenuVisibility() {
    if (this.searcherVisibility) { this.changeSearcherVisibility(); }
    this.menuVisbility = !this.menuVisbility
  }

  changeSearcherVisibility() {
    if (this.menuVisbility) { this.changeMenuVisibility(); }
    this.searcherVisibility = !this.searcherVisibility
  }
}