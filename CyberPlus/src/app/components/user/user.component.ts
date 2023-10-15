import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  animations: [
    trigger('moveLeft', [
      state('void', style({ transform: 'translateX(100%)' })),
      state('*', style({ transform: 'translateX(2.5%)' })),
      transition('void <=> *', animate('300ms ease-in-out')),
    ])
  ]
})
export class UserComponent implements OnInit {

  @Input()
  seacherVisibility: boolean;
  @Input()
  public cartOpened: boolean;
  public myToken: number;
  public userEmail: string | null;

  @Output() cartOpenChanged = new EventEmitter<boolean>();

  constructor(private router: Router) {
    this.myToken = 0;
    this.userEmail = "";
  }

  ngOnInit(): void {
    if (localStorage.getItem('personalToken')) {
      this.myToken = +localStorage.getItem('personalToken')!;
    }
    if (localStorage.getItem('userEmail')) {
      this.userEmail = localStorage.getItem('userEmail');
    }
  }

  public logout(): void {
    if (localStorage.getItem('personalToken')) {
      localStorage.removeItem('personalToken');
    }
    window.location.reload();
  }

  openCart() {
    this.cartOpened = !this.cartOpened;
    this.cartOpenChanged.emit(this.cartOpened);
  }


  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
