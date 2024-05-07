import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ProductsComponent } from './products/products.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AddproductComponent } from './addproduct/addproduct.component';

export const routes: Routes = [
    {path:'home',component:HomeComponent},
    {path:'aboutus',component:AboutUsComponent},
    {path:'contactus',component:ContactUsComponent},
    {path:'products',component:ProductsComponent},
    {path:'orders',component:OrderComponent},
    {path:'',redirectTo:'home',pathMatch:'full'},
    {path:'details/:id',component:ProductDetailsComponent},
    {path:"add" ,component:AddproductComponent},
    {path:'**',component:NotFoundComponent}
];
