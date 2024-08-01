import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: "", redirectTo: "home", pathMatch: "full" },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "products",
        loadComponent: () => import("./pages/products/products.component").then(m => m.ProductsComponent)
    },
    {
        path: "product/:id",
        loadComponent: () => import('./pages/product-details/product-details.component').then(e => e.ProductDetailsComponent)
    },
    {
        path: "about",
        loadComponent: () => import("./pages/about/about.component").then(m => m.AboutComponent)
    },
    {
        path: "signup",
        loadComponent: () => import("./pages/signup/signup.component").then(m => m.SignupComponent)
    }
];
