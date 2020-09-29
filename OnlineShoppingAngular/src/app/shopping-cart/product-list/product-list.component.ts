import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = []
  constructor(private productService:ProductService) { 
    this.productService.getModifiedProducts().subscribe((data)=>
    {
      this.productList=data;
    });
  }

  ngOnInit(): void {
  }

}
