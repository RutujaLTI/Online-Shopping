import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../models/order';

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http:HttpClient) { }

  getAllOrdersFromAPI(id:number):Observable<Order[]>
  {
    return this.http.get<Order[]>("http://localhost:64550/api/order/"+id);
  }
}
