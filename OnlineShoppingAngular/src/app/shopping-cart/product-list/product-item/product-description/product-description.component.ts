import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompareComponent } from 'src/app/compare/compare.component';
import { Product } from 'src/app/models/product';
import { CompareProductsService } from 'src/app/services/CompareProductsService';
import { ProductService } from 'src/app/services/ProductService';
import { SessionService } from 'src/app/services/sessionService';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  product:Product;
  currentimg:string;
  currentindex:number;
  incomparision:boolean;
  inSession:boolean;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute,private compare:CompareProductsService,private session:SessionService) { 
    this.productService.getProduct(this.activatedRoute.snapshot.params.id).subscribe((data)=>{
      this.product=data;
      this.currentimg=data.productImg1;
      //this.currentindex
    });
    this.compare.getCompareProducts().subscribe((data)=>{
      if(data.some(p=>p.productId==this.activatedRoute.snapshot.params.id))this.incomparision=true;
    });
    this.session.getUSer().subscribe((data)=>{
      if(data!=null && data!=undefined)this.inSession=true;
      else this.inSession=false;
    })

  }

  ngOnInit(): void {
    
    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName(
        'mySlides'
      ) as HTMLCollectionOf<HTMLElement>;
      var dots = document.getElementsByClassName('demo') as HTMLCollectionOf<
        HTMLElement
      >;
      // var captionText = document.getElementById("caption") ;
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }
      slides[slideIndex - 1].style.display = 'block';
      dots[slideIndex - 1].className += ' active';
      //captionText.innerHTML = dots[slideIndex-1].alt;
    }
  }

  changeImg(n:number)
  {
    if(n==1)this.currentimg=this.product.productImg1;
    if(n==2)this.currentimg=this.product.productImg2;
    if(n==3)this.currentimg=this.product.productImg3;
  }
  addToCompare()
  {
    this.compare.addProductForCompare(this.product).subscribe((data)=>{
      this.incomparision=true;
    });
  }
  addToWishList()
  {

  }
  removeFromCompare()
  {
    this.compare.removeProductFromCompare(this.product.productId).subscribe((data)=>{
      this.incomparision=false;
    });
  }
}
