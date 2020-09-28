import {HomeModel,serverResponse} from '../models/Home.model';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";
import { Injectable } from "@angular/core";
import {Observable} from "rxjs";


@Injectable(
  {providedIn: 'root'}
)
  export class HomeService{
    home:HomeModel[];
    constructor(private http:HttpClient){
        
    }
    getSingleProduct(id: Number): Observable<HomeModel> {
        return this.http.get<HomeModel>(this + 'home/' + id);//
      }

  }