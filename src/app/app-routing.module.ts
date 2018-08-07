import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PotionsComponent } from './potions/potions.component';
import { ProductsResolverService } from './products/products-resolver.service';

const routes: Routes = [
  {path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {path: 'products', component: ProductsComponent, resolve:
  { products : ProductsResolverService}},
  {path: 'potions', component: PotionsComponent },
  {path: 'welcome', component: WelcomeComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports : [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
