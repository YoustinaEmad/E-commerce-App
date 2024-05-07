import { Injectable } from '@angular/core';
import { Iproduct } from '../iproduct';

@Injectable({
  providedIn: 'root'
})
export class ProductsServiceService {
  products: Iproduct[];
  constructor() {
    this.products = [
      { id: 100, name: "Banana", price: 50, quantity: 50, imgUrl: "assets/imges/banana.jpg", catId: 1 },
      { id: 200, name: "Apple", price: 80, quantity: 6, imgUrl: "assets/imges/apple.jpg", catId: 1 },
      { id: 300, name: "WaterMelon", price: 70, quantity: 5, imgUrl: "assets/imges/watermelon.jpg", catId: 1 },
      { id: 400, name: "Tomato", price: 30, quantity: 2, imgUrl: "assets/imges/tomato.jpg", catId: 2 },
      { id: 500, name: "Potato", price: 20, quantity: 1, imgUrl: "assets/imges/potato.jpg", catId: 2 },
      { id: 100, name: "Carrot", price: 10, quantity: 8, imgUrl: "assets/imges/carrot.jpg", catId: 2 }
    ];
  }


  getAllProducts(): Iproduct[] {
    return this.products;
  }

   getProductById(id: number): Iproduct | undefined {
    let foundedProd = this.products.find((prd) => prd.id == id);
    return foundedProd;
  }

  getProductsByCatId(catId: number): Iproduct[] {
    if (catId == 0) {
      return this.products;
    } else {
      return this.products.filter((prd) => prd.catId == catId)
    }
  }
}
