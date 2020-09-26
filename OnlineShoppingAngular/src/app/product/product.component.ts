import { Component, OnInit } from '@angular/core';
import { product } from '../models/product'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:product;
  constructor() { 
    this.product=new product("Wooden varnished Chair",300,"assets/images/chair.jpg");
  }

  ngOnInit(): void {
  }

}
