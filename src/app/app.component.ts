import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from './products.service'
import { Product } from '../assets/interfaces/products.interface';

import NavComponent from './nav/nav.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  products: Product[] = [];

  constructor(_productsService: ProductsService) {
    _productsService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        console.log(res)
      },
      error(err) {
        console.log(err)
      },
      complete() {
        console.log("Done")
      },
    })
  }
}
