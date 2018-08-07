import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductService } from './products/product.service';
import { HttpModule } from '@angular/http';
import { PotionsComponent } from './potions/potions.component';
import { PotionsService } from './potions/potions.service';
import { ProductsResolverService } from './products/products-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    WelcomeComponent,
    PotionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [ProductService, PotionsService, ProductsResolverService],
  bootstrap: [AppComponent]
})
export class AppModule {}
