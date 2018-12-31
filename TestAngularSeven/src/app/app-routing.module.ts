import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { ProductlistSidebarComponent } from './productlist-sidebar/productlist-sidebar.component';

const routes: Routes = [
  { path: "products", component: DashboardComponent },
  { path: "product/:id", component: ProductDetailComponent },
  {
    path: "",
    component: LoginComponent
  
  },
  {
    path: "",
    component: HeaderComponent,
    outlet: "upperbar"
  },
  {
    path: "products",
    component: ProductlistSidebarComponent,
    outlet: "sidebar"
  },
  {
    path: "dashboard",
    component: DashboardComponent,
 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
