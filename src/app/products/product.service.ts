import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';
import { Product } from './product';
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private dataUrl = 'assets/products.json';

  constructor(private _http: Http) { }

  getProducts() {
    const subject = new Subject();
    setTimeout(() => {subject.next(PRODUCTS); subject.complete(); },
     100);
    // return this._http.get(this.dataUrl)
    // .pipe(map((response: Response) => response.json()));
    return subject;
  }

  getProduct(id: number) {
    return PRODUCTS.find(product => product.id === id);

    // return of(PRODUCTS.find(product => product.id === id));
  }
}
