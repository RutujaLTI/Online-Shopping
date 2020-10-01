import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/ProductService';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { LocalStorageService } from 'ngx-webstorage';
import { CategoryService } from '../services/CategoryService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  product:Product;
  categories:Category[]=[];
  constructor(private productService:ProductService,private local:LocalStorageService,private category:CategoryService,private router:Router) {
    this.product=new Product();
    category.getCategories().subscribe((data)=>
    {
      this.categories=data;
    });
  }

  ngOnInit(): void {
  }

  addProduct()
  {
    this.product.productStatus='modified'
    this.product.retailerId=this.local.retrieve('user').userId;
    this.productService.addProduct(this.product).subscribe(d=>{
      this.router.navigate(['retailer/productstatus']);
    });
  }

}
