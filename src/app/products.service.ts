import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  _httpClient = inject(HttpClient)

  constructor() { }


  getProducts(): Observable<any> {
    return this._httpClient.get('https://fakestoreapi.com/products')
  }
  getProductById(id: string): Observable<any> {
    return this._httpClient.get(`https://fakestoreapi.com/products/${id}`)
  }
}
