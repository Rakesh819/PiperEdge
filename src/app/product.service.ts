import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private productUrl = 'assets/product.json';
  constructor(private http: HttpClient) { }

  getProduct(){
    return this.http.get(this.productUrl);
  }
}
