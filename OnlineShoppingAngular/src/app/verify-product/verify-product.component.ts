import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/ProductService';

@Component({
  selector: 'app-verify-product',
  templateUrl: './verify-product.component.html',
  styleUrls: ['./verify-product.component.css']
})
export class VerifyProductComponent implements OnInit {

  product:Product;
  remarks:string;
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,private router:Router) { 
    this.remarks='';
  }

  ngOnInit(): void {
    //this.product=this.productService.getallProducts().find(p=>p.productId==this.activatedRoute.snapshot.params.id);
    this.productService.getProduct(this.activatedRoute.snapshot.params.id).subscribe((data)=>{
      this.product=data;
    });
  }
  verify()
  {
    this.product.productStatus="available";
    this.product.productRemark='';
    this.productService.updateProduct(this.product).subscribe((data)=>
    {
      this.router.navigate(['admin']);
    });
   
  }
  decline()
  {
    if(this.remarks=='')this.remarks='Request Declined';
    this.product.productRemark=this.remarks;
    this.product.productStatus='Request Declined';
    this.productService.updateProduct(this.product).subscribe((data)=>
    {
      console.log(data);
    });
    this.router.navigate(['admin']);
  }
}
