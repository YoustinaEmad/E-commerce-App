import { Component } from '@angular/core';
import { Icategory } from '../icategory';
import { FormsModule } from '@angular/forms';
import { APIproductsService } from '../Services/apiproducts.service';
import { Route, Router } from '@angular/router';
import { Iproduct } from '../iproduct';

@Component({
  selector: 'app-addproduct',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  categories:Icategory[];
  product: Iproduct = {} as Iproduct ;
  constructor(private _ApiProductsService:APIproductsService,private router:Router) {
    this.categories = [
      { id: 1, name: "Fruits" },
      { id: 2, name: "Vegetables" }
    ];
  }

  addProduct() {
    this._ApiProductsService.addNewProduct(this.product).subscribe({
      next: () => {
        this.router.navigateByUrl('/products')
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
