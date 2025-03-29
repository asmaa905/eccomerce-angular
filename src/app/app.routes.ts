import {Routes} from '@angular/router';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';

//routing configs

export const routes: Routes = [
    { path: '', redirectTo: 'products-list', pathMatch: "full" },
    { path: 'products-list', component: ProductsListComponent, title: "product-list" },
    { path: 'products-list/:id', component: ProductDetailsComponent, title: "product-details" },
    { path: 'login', component: LoginComponent, title: "login" },
    { path: 'register', component: RegisterComponent, title: "register" },
    { path: 'cart', component: CartComponent, title: "cart" },
    { path: '**', component: NotFoundPageComponent, title: "Error 404 not found" }
];
