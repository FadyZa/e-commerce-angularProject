import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../assets/interfaces/products.interface';
import { ProductsService } from '../../products.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {

  productId!: string;
  product!: Product;

  constructor(private route: ActivatedRoute, _ProductsService: ProductsService) {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      _ProductsService.getProductById(this.productId).subscribe({
        next: (res) => {
          this.product = res;
        },
        error(err) {
          console.log(err)
        },
        complete() {
          console.log('complete');
        }
      })

    });
  }
}
