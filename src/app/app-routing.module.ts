import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [{
  path: '', component: HomeComponent,
},
{
  path: 'home', component: HomeComponent,
},
{path:'customers',loadChildren: ()=>import('./components/customers/customers.module').then(m=>m.CustomersModule)},
{path:'produtcs',loadChildren: ()=>import('./components/products/products.module').then(m=>m.ProductsModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
