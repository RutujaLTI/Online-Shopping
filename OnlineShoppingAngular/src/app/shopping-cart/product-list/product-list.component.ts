import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit ,DoCheck{
  @Input()minPrice;
  @Input()maxPrice;
  productList: Product[] = []
  currentproductList: Product[] = []
  searchbar:string;
  constructor(private productService:ProductService,private aroute:ActivatedRoute) { 
    this.productService.getModifiedProducts().subscribe((data)=>
    {
      this.productList=data.filter(p=>p.productStatus=='available');
      this.currentproductList=this.productList;
    });
    this.searchbar='';
  }

  ngOnInit(): void {

  }

  ngDoCheck()
  {
    
    this.currentproductList=this.productList.filter(p=>p.productName.toLowerCase().includes(this.searchbar.toLowerCase())||p.productDescription.toLowerCase().includes(this.searchbar.toLowerCase()));
    this.currentproductList=this.currentproductList.filter(p=>p.productPrice>this.minPrice && p.productPrice<this.maxPrice);
    this.aroute.params.subscribe(r=>
      {
        if(r.id!=undefined)this.currentproductList=this.currentproductList.filter(p=>p.categoryId==r.id);
      });
  }

}
