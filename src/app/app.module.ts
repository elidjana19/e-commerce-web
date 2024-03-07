import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './sharedpage/navbar/navbar.component';
import { FooterComponent } from './sharedpage/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { AboutComponent } from './pages/about/about.component';
import { SinglepageComponent } from './pages/singlepage/singlepage.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartServiceService } from './services/cart-service.service';











@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
    AboutComponent,
    SinglepageComponent,
    CartComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],


  providers: [CartServiceService],


  
  bootstrap: [AppComponent]
})
export class AppModule { }
