import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ProductService } from './product.service';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ProductsResolverService implements Resolve<any> {

  constructor(private productService: ProductService) { }

  resolve() {
    return this.productService.getProducts().pipe(map(products => products));
  }
}
