import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const endPoint = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class AllproductsService {

  constructor(private httpClient: HttpClient) { }

  public getAllProducts(): Observable<any> {
    return this.httpClient.get(`${endPoint}/api/allproducts`);
  }
}
