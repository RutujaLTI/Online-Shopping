import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() productItem:Product;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  viewDetails()
  {
   
    this.router.navigate(['ViewDetails',this.productItem.productId])
  }

}
