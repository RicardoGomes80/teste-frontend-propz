import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import { CarrouselComponent } from './components/partials/carrousel/carrousel.component';
import { ProdutosListarComponent } from './services/produtos-listar/produtos-listar.component';

import { HttpClientModule } from '@angular/common/http';

import { ProdutosService } from './produtos.service';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CarrouselComponent,
    ProdutosListarComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ProdutosService,HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
