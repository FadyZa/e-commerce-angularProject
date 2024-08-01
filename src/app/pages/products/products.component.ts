import { Component } from '@angular/core';
import { Product } from '../../../assets/interfaces/products.interface';
import { ProductsService } from '../../products.service';
import { ProductCardComponent } from "../../product-card/product-card.component";
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  products: Product[] = [];
  topProducts: Product[] = [];

  constructor(_productService: ProductsService) {
    _productService.getProducts().subscribe({
      next: (res) => {
        this.products = res;
        this.topProducts = res.filter((ele: Product) => ele.category == "jewelery");
      },
      error(err) {
        console.log(err);
      },
      complete() {
        console.log("Data Fetched")
      }
    })
  }
}
