import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../shared/services/products.service';
import { Product } from '../../shared/interfaces/product-interface';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  productsService = inject(ProductsService);
  products: Product[] = [];

  ngOnInit(): void {
    this.productsService.getAll().subscribe({
      next: (products) => {
        console.log(products);
        this.products = products;
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }
}
