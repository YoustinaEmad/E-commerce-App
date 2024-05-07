import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, input, output } from '@angular/core';
import { Iproduct } from '../iproduct';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'
import { Icategory } from '../icategory';
import { ProductCardDirective } from '../Directives/product-card.directive';
import { CreditCardPipe } from '../Pipes/credit-card.pipe';
import { ProductsServiceService } from '../Services/products-service.service';
import { RouterLink } from '@angular/router';
import { APIproductsService } from '../Services/apiproducts.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductCardDirective, CreditCardPipe,RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnChanges ,OnInit{
  FilterdProducts: Iproduct[]=[];
  @Input() receivedCatID: number = 0;
  creditCardNum: string = "00000000000000";
  @Output() OnProductsData: EventEmitter<Iproduct[]>

  constructor(private _ProductService: ProductsServiceService,
    private _APIproduct :APIproductsService
  ) {
    this.FilterdProducts = this._ProductService.products;

    this.OnProductsData = new EventEmitter<Iproduct[]>;
  }
  ngOnInit(): void {
 this._APIproduct.getAllProducts().subscribe({
  next:(res)=>{this.FilterdProducts=res},
  error:(err)=>{console.log(err);}
 })
  }
  ngOnChanges(): void {
    // this.FilterdProducts= this._ProductService.getProductsByCatId(this.receivedCatID);
    this._APIproduct.getProductsByCatId(this.receivedCatID).subscribe((res)=>{
      console.log(res);
      this.FilterdProducts=res;
    })
  }

  buyProduct(product: Iproduct): void {
    if (product.quantity > 0) {
      product.quantity--;
    }
    this.OnProductsData.emit([product]);
  }

  // FilterProductsFunc() {
  //   if (this.receivedCatID == 0) {
  //     this.FilterdProducts = this.products;
  //   }
  //   else {
  //     this.FilterdProducts=this.products.filter((prd)=>prd.catId==this.receivedCatID);
  //   }
  // }
}