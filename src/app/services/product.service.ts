// product.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    { id: 1, name: 'Safavieh Couture', image: 'https://eadn-wc03-3131322.nxedge.io/cdn/media/catalog/product/cache/265b0f5d44ca647e62ada6bb9d3f04d8/K/N/KNT4094B-FRONT.jpg', description: 'equipped with a massage system', price: 650, availability: true },
    { id: 2, name: 'box spring bed', image: 'https://eadn-wc03-3131322.nxedge.io/cdn/media/catalog/product/cache/265b0f5d44ca647e62ada6bb9d3f04d8/F/O/FOX6211F-Q-FRONT.jpg', description: 'nice nd comfy', price: 1200, availability: true },
    { id: 3, name: 'Safavieh Couture', image: 'https://eadn-wc03-3131322.nxedge.io/cdn/media/catalog/product/cache/265b0f5d44ca647e62ada6bb9d3f04d8/C/P/CPT1003B-CASING-FRONT.jpg', description: 'Nice seat for the garden', price: 150, availability: true },
    { id: 4, name: 'Ofiice desk chair', image: 'https://eadn-wc03-3131322.nxedge.io/cdn/media/catalog/product/cache/265b0f5d44ca647e62ada6bb9d3f04d8/F/O/FOX7520B-FRONT.jpg', description: 'comes with wheels and easily moveable', price: 200, availability: true },
    { id: 5, name: 'Silver pannel ceilng lamp', image: 'https://cdn.pixabay.com/photo/2014/05/02/12/45/ceiling-lamp-335975_1280.jpg', description: 'comes with high resolution energy saver bulbs', price: 500, availability: false},
    { id: 6, name: 'ceramic vase', image: 'https://cdn.pixabay.com/photo/2015/05/30/14/56/still-life-790381_1280.jpg', description: 'made from fine ceramic from italy', price: 650, availability: true },
    
    
  ];

  private cart: Product[] = [];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find((product) => product.id === id);
  }

  addToCart(product: Product): void {
    console.log('Adding to cart in ProductService:', product);
    this.cart.push(product);
  }

  getCart(): Product[] {
    console.log('Cart Contents:', this.cart);
    return this.cart;
  }

  getTotal(): number {
    return this.cart.reduce((total, item) => total + item.price, 0);
  }
}
