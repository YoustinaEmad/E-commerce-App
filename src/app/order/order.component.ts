import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Icategory } from '../icategory';
import { ProductsComponent } from '../products/products.component';
import { Iproduct } from '../iproduct';
import { APIcategoryService } from '../Services/apicategory.service';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule,CommonModule,ProductsComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css'
})
export class OrderComponent {
  selectedCatId:number=0;
  categories: Icategory[];
  selectedProducts: Iproduct[] = [];
  constructor(private _ApiCategory :APIcategoryService)
  {
    this.categories = [
      { id: 1, name: "Fruits" },
      { id: 2, name: "Vegetables" }
    ];
  }

  change(products: Iproduct[]) {
    this.selectedProducts = products;
  }
}
