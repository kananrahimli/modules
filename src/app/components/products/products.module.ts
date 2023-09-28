import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductAddComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'add',component:ProductAddComponent},
      {path:':id',component:ProductDetailComponent},
      {path:'',component:ProductsComponent}
    ])
  ],
  exports:[ProductAddComponent]
})
export class ProductsModule { }
