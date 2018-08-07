import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  products: any;
  newProduct = '';
  selectedProduct: Product;


  constructor(private productService: ProductService, private route: ActivatedRoute) {}


  onSelect(product: Product): void {
    this.selectedProduct = product;
  }

  ngOnInit() {
    this.products = this.route.snapshot.data['products'];
  }

  // getProducts(): void {
  //   this.productService.getProducts()
  //     .subscribe(resProductService => this.products = resProductService);
  // }

  // addProduct () {
  //   if (this.newProduct !== '') {
  //     this.products.push(this.newProduct);
  //     this.newProduct = '';
  //   }
  // }

  removeProduct (index) {
    this.products.splice(index, 1);
  }

}
