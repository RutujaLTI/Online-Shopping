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
  @Input()sortType:number;
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
      if(this.sortType==1)this.currentproductList.sort((a,b)=>a.productPrice-b.productPrice);
      else if(this.sortType==2)this.currentproductList.sort((a,b)=>b.productPrice-a.productPrice);
      else if(this.sortType==3)this.currentproductList.sort((a,b)=>a.productName.localeCompare(b.productName));
      else if(this.sortType==4)this.currentproductList.sort((a,b)=>b.productName.localeCompare(a.productName));
  }

}
