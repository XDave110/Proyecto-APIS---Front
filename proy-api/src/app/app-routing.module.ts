import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibroComponent } from './lista-libro/lista-libro.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { CartComponent } from './cart/cart.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ListaMangasComponent } from './lista-mangas/lista-mangas.component';

const routes: Routes = [
  {
    path:'trending',
    component: ListaMangasComponent
  },
  {
    path:'contact',
    component: ContactFormComponent
  },
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
