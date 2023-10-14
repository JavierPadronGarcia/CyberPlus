import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  @Input()
  seacherVisibility: boolean;
  public cartOpened: boolean;
  public myToken: number;
  public userEmail: string | null;

  constructor(private router: Router) {
    this.cartOpened = false;
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


  navigateToLogin() {
    this.router.navigateByUrl('/login');
  }
}
