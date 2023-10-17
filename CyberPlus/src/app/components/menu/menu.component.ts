import { Component, ComponentRef, Input } from '@angular/core';
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
  cartOpened: boolean;
  darkMode: string | null;

  constructor() {

    if (!localStorage.getItem('darkMode') || localStorage.getItem('darkMode') == '0') {
      this.changeLightMode()
    } else {
      this.changeDarkMode();
    }

    this.menuVisbility = false;
    this.searcherVisibility = false;
    this.cartOpened = false;
  }

  changeMenuVisibility() {
    if (this.searcherVisibility) { this.changeSearcherVisibility(); }
    this.menuVisbility = !this.menuVisbility
  }

  changeSearcherVisibility() {
    if (this.menuVisbility) { this.changeMenuVisibility(); }
    this.searcherVisibility = !this.searcherVisibility
  }

  changeSearcher() {
    this.searcherVisibility = !this.searcherVisibility
  }

  changeLightMode() {
    localStorage.setItem('darkMode', '0');
    this.darkMode = '0';

    document.documentElement.style.setProperty('--background', '#F2F2F2')
    document.documentElement.style.setProperty('--background-card', '#FFFFFF')
    document.documentElement.style.setProperty('--background-menu', '#E4E4E4')
    document.documentElement.style.setProperty('--prev-price-color', '#949494')
    document.documentElement.style.setProperty('--discount-color', '#F24C26')
    document.documentElement.style.setProperty('--discount-text', '#50F48A')
    document.documentElement.style.setProperty('--search-background', '#F2F2F2')
    document.documentElement.style.setProperty('--background-login', '#FFFFFF')
    document.documentElement.style.setProperty('--background-login-input', '#D9D9D9')
  }

  changeDarkMode() {
    localStorage.setItem('darkMode', '1');
    this.darkMode = '1';

    document.documentElement.style.setProperty('--background', '#818181')
    document.documentElement.style.setProperty('--background-card', '#BEBEBE')
    document.documentElement.style.setProperty('--background-menu', '#BEBEBE')
    document.documentElement.style.setProperty('--prev-price-color', '#E4E4E4')
    document.documentElement.style.setProperty('--discount-color', '#B92F1C')
    document.documentElement.style.setProperty('--discount-text', '#B6F2CB')
    document.documentElement.style.setProperty('--search-background', '#A6A6A6')
    document.documentElement.style.setProperty('--background-login', '#818181')
    document.documentElement.style.setProperty('--background-login-input', '#A6A6A6')
  }
}