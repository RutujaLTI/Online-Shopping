import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  @Output() public price = new EventEmitter<{max:number, min:number}>(); 
  minimumPrice:number;
  maximumPrice:number;
  constructor() { }

  ngOnInit(): void {
    this.minimumPrice=0;
    this.maximumPrice=10000;
  }
  filterPrice()
  {
    this.price.emit({max:this.maximumPrice,min:this.minimumPrice});
  }

}
