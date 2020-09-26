import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  arr:number[]=new Array(20);
  constructor() { 
    for (let index = 0; index < 20; index++) {
      this.arr[index]=index+1;
      
    }
  }

  ngOnInit(): void {
  }

}
