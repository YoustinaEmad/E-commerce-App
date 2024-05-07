import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Iproduct } from '../iproduct';
import { ProductsServiceService } from '../Services/products-service.service';
import { Location } from '@angular/common';
import { APIproductsService } from '../Services/apiproducts.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit {
  currentId: number = 0;
  product: Iproduct | undefined = {} as Iproduct;
  constructor(private _ActivatedRoute: ActivatedRoute
    , private _ProductService: ProductsServiceService
    , private _Location: Location
    , private _APIproduct: APIproductsService
  ) {

  }
  ngOnInit(): void {
    // this.currentId=Number(this._ActivatedRoute.snapshot.paramMap.get('id'));
    // this.product=this._ProductService.getProductById(this.currentId);
    this._ActivatedRoute.paramMap.subscribe((pm) => {
      this.currentId = Number(pm.get(`id`));
      this._APIproduct.getProductById(this.currentId).subscribe({
        next:(res)=>{this.product=res},
        error:(err)=>{console.log(err);}

      })
    })
  }

  back() {
    this._Location.back();
  }
}
