import { Injectable } from '@angular/core';
import { User } from '../classes/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(user: User): Observable<number> {
    return of(Math.random() * (1000 - 0));
  }
}
