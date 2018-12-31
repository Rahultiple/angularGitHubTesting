import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductlistSidebarComponent } from './productlist-sidebar/productlist-sidebar.component';
import { HeaderComponent } from './header/header.component';
import { DataFetchService } from './data/data-fetch.service';
import { HttpClientModule } from '@angular/common/http';
import { Select2Module } from 'ng2-select2';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LoginComponent,
    ProductDetailComponent,
    ProductlistComponent,
    ProductlistSidebarComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Select2Module,
    ReactiveFormsModule
  ],
  providers: [DataFetchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
