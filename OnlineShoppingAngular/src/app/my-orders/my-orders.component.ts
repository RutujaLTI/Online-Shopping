import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Order } from '../models/order';
import { OrderServiceService } from '../services/order-service.service';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {

  orders:Order[]=[];
  constructor(private local:LocalStorageService,private orderService:OrderServiceService) {
    //Get orders of the user
    this.orderService.getAllOrdersFromAPI(this.local.retrieve('user').userId).subscribe((data)=>
    {
      this.orders=data;
    });
   }

  ngOnInit(): void {
  }

}
