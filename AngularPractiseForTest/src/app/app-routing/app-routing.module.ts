import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashBoardComponentComponent } from '../dash-board-component/dash-board-component.component';
import { DetailsComponentComponent } from '../details-component/details-component.component';
import { LoginComponentComponent } from '../login-component/login-component.component';
import { HeaderComponentComponent } from '../header-component/header-component.component';
import { ProductListSidebarComponentComponent } from '../product-list-sidebar-component/product-list-sidebar-component.component';

const routes: Routes = [
  { path: "products", component: DashBoardComponentComponent },
  { path: "product/:id", component: DetailsComponentComponent },
  {
    path: "login",
    component: LoginComponentComponent
  
  },
  {
    path: "",
    component: HeaderComponentComponent,
    outlet: "upperbar"
  },
  {
    path: "products",
    component: ProductListSidebarComponentComponent,
    outlet: "sidebar"
  }
]


export const routingModule: ModuleWithProviders =RouterModule.forRoot(routes);
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
