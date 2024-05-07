import { Directive, ElementRef, HostListener, Input, input } from '@angular/core';

@Directive({
  selector: '[appProductCard]',
  standalone: true
})
export class ProductCardDirective {

  @Input() hoverColor:string=" "
  constructor(private element :ElementRef) {
    this.element.nativeElement.style.border="2px tomato solid";
    this.element.nativeElement.style.borderRadius ="10px";
    this.element.nativeElement.style.boxShadow ="5px 5px 5px 5px darkgray";
    this.element.nativeElement.style.backgroundColor = "black"; 
  }
  

   @HostListener ('mouseover') over ()
   {
    this.element.nativeElement.style.boxShadow ="5px 10px 10px 10px darkgray";
    this.element.nativeElement.style.backgroundColor = this.hoverColor; 
   }

   @HostListener ('mouseout') out ()
   {
    this.element.nativeElement.style.boxShadow ="5px 5px 5px 5px darkgray";
    this.element.nativeElement.style.backgroundColor = "black"; 
   }
   
}
