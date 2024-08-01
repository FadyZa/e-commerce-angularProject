import { Component, Input } from '@angular/core';
import { Product } from '../../assets/interfaces/products.interface';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {
  @Input() products!: Product[];

  constructor(private router: Router) { }

  onProductClick(productId: number): void {
    this.router.navigate(['/product', productId]);
  }
}
