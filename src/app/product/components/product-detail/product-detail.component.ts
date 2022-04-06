import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router'

import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productsService: ProductsService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    });
  }

  fetchProduct(id: string) {
    this.productsService.getProduct(id)
    . subscribe(product => {
      console.log(product);
      this.product = product;
    });
  }

  createProduct(){
    const newProduct: Product = {
      id: '6',
      title: 'Sticker 2',
      image: 'assets/images/stickers2.png',
      price: 8000,
      description: 'bla bla bla bla'
    };
    this.productsService.createProduct(newProduct)
    . subscribe(product => {
      console.log(product);
      //this.product = product;
    });
  }

  updateProduct(){
    const updateProduct: Partial<Product> = {
      price: 6000
    };
    this.productsService.updateProduct('4', updateProduct)
    . subscribe(product => {
      console.log(product);
      //this.product = product;
    });
  }

  deleteProduct() {
    this.productsService.deleteProduct('1')
    . subscribe(product => {
      console.log(product);
      //this.product = product;
    });
  }
}
