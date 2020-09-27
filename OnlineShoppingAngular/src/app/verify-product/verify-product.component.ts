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
  constructor(private activatedRoute:ActivatedRoute,private productService:ProductService,private router:Router) { }

  ngOnInit(): void {
    this.product=this.productService.getallProducts().find(p=>p.productId==this.activatedRoute.snapshot.params.id);
  }
  verify()
  {
    this.productService.verifyProduct(this.product.productId);
    this.router.navigate(['admin']);
  }
  decline()
  {
    this.productService.addRemarks(this.product.productId,this.remarks);
    this.router.navigate(['admin']);
  }
}
