import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibroComponent } from './lista-libro/lista-libro.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {
    path:"login", 
    component:LoginComponent
  },
  {
    path:"signup", 
    component:SignupComponent
  },
  {
    path:"catalogo", 
    component:ListaLibroComponent
  },
  {
    path:'', 
    redirectTo:'/catalogo', 
    pathMatch:'full'
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
