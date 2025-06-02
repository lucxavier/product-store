import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements OnInit {
  httpClient = inject(HttpClient);
  products: any[] = [];

  ngOnInit(): void {
    this.httpClient.get('/api/products').subscribe({
      next: (products) => {
        this.products = products as any[];
      },
      error: (error) => {
        console.error('Error fetching products:', error);
      },
    });
  }
}
