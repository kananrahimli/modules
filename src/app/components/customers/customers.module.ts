import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerAddComponent } from './customer-add/customer-add.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { CustomersComponent } from './customers/customers.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   CustomerAddComponent,
   CustomersComponent,
   CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'',component:CustomersComponent},
      {path:'add',component:CustomerAddComponent},
      {path:':id',component:CustomerDetailComponent}
    ])
  ]
})
export class CustomersModule { }
