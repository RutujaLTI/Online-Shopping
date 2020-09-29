import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/ProductService';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  product:Product;
  currentimg:string;
  currentindex:number;
  constructor(private productService:ProductService,private activatedRoute:ActivatedRoute) { 
    this.productService.getProduct(this.activatedRoute.snapshot.params.id).subscribe((data)=>{
      this.product=data;
      this.currentimg=data.productImg1;
      //this.currentindex
    });
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
}
