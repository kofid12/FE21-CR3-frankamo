// src/app/cart/cart.component.ts

import { Component} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product.model'; 


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent {
  cartItems: Product[] = []; 

  constructor(private productService: ProductService) {
    this.cartItems = this.productService.getCart();
  }

  getTotal(): number {
    return this.productService.getTotal();
  }
}
