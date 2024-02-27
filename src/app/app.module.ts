import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { DetailsComponent } from './details/details.component';
import { ProductService } from './services/product.service';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    NavbarComponent,
    ProductsComponent,
    CartComponent,
    DetailsComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule,CommonModule],
  providers: [ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {}
