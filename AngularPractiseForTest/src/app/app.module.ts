import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashBoardComponentComponent } from './dash-board-component/dash-board-component.component';
import { ProductListSidebarComponentComponent } from './product-list-sidebar-component/product-list-sidebar-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { DetailsComponentComponent } from './details-component/details-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponentComponent,
    ProductListSidebarComponentComponent,
    HeaderComponentComponent,
    DetailsComponentComponent,
    LoginComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
