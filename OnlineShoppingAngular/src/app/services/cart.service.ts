import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CartModelPublic, CartModel} from "../models/cart.model";
import {HomeModel} from "../models/Home.model";
import {HomeService} from "./home.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {NavigationExtras, Router} from "@angular/router";

@Injectable({
  providedIn: 'root'})

export class CartService{

    private cartDataClient: CartModelPublic = {prodData: [{incart: 0, Product_Id: 0}], Total_Amount: 0};
    private cartDataServer: CartModel = {
        data: [{
          product: undefined,
          numInCart: 0
        }],
        Total_Amount: 0
    };
      cartTotal$ = new BehaviorSubject<Number>(0);
    
      cartDataObs$ = new BehaviorSubject<CartModel>(this.cartDataServer);
      constructor(private productService: HomeService,private httpClient: HttpClient,
        private router: Router){
            this.cartTotal$.next(this.cartDataServer.Total_Amount);
            this.cartDataObs$.next(this.cartDataServer);

            let info: CartModelPublic = JSON.parse(localStorage.getItem(''))
            
            if (info !== null && info !== undefined && info.prodData[0].incart !== 0) {
                this.cartDataClient = info;  
                this.cartDataClient.prodData.forEach(p => {
                    this.productService.getSingleProduct(p.Product_Id).subscribe((actualProdInfo: HomeModel) => {
                if (this.cartDataServer.data[0].numInCart === 0) {
                    this.cartDataServer.data[0].numInCart = p.incart;
                    this.cartDataServer.data[0].product = actualProdInfo;
                    this.CalculateTotal();
                    this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;  
                    localStorage.setItem('', JSON.stringify(this.cartDataClient));}
                    else {
                        this.cartDataServer.data.push({
                          numInCart: p.incart,
                          product: actualProdInfo
                        });
                        this.CalculateTotal();
                        this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
                        localStorage.setItem('', JSON.stringify(this.cartDataClient));
                    }
                      this.cartDataObs$.next({...this.cartDataServer});
                    });
                
                });
            }
        }
    
  CalculateSubTotal(index): Number {
    let subTotal = 0;

    let p = this.cartDataServer.data[index];
    subTotal = p.product.Unit_Price * p.numInCart;

    return subTotal;
  }
  AddProductToCart(Product_Id: Number, quantity?: number) {

    this.productService.getSingleProduct(Product_Id).subscribe(prod => {
      // If the cart is empty
      if (this.cartDataServer.data[0].product === undefined) {
        this.cartDataServer.data[0].product = prod;
        this.cartDataServer.data[0].numInCart = quantity !== undefined ? quantity : 1;
        this.CalculateTotal();
        this.cartDataClient.prodData[0].incart = this.cartDataServer.data[0].numInCart;
        this.cartDataClient.prodData[0].Product_Id = prod.Product_Id;
        this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
        localStorage.setItem('', JSON.stringify(this.cartDataClient));
        this.cartDataObs$.next({...this.cartDataServer});
      } 
      else {
        let index = this.cartDataServer.data.findIndex(p => p.product.Product_Id === prod.Product_Id);

        // 1. If chosen product is already in cart array
        if (index !== -1) {
           this.cartDataClient.prodData[index].incart = this.cartDataServer.data[index].numInCart;
        
        }
        // 2. If chosen product is not in cart array
        else {
          this.cartDataServer.data.push({
            product: prod,
            numInCart: 1
          });
          this.cartDataClient.prodData.push({
            incart: 1,
            Product_Id: prod.Product_Id
          });
        }
        this.CalculateTotal();
        this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
        localStorage.setItem('', JSON.stringify(this.cartDataClient));
        this.cartDataObs$.next({...this.cartDataServer});
      }  // END of ELSE
      });
    }
    UpdateCartData(index, increase: Boolean) {
        let data = this.cartDataServer.data[index];
        if (increase) {
          data.numInCart < data.product.Quantity ? data.numInCart++ : data.product.Quantity;
          this.cartDataClient.prodData[index].incart = data.numInCart;
          this.CalculateTotal();
          this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
          this.cartDataObs$.next({...this.cartDataServer});
          localStorage.setItem('', JSON.stringify(this.cartDataClient));
        } else {
          data.numInCart--;
          if (data.numInCart < 1) {
            this.DeleteProductFromCart(index);
            this.cartDataObs$.next({...this.cartDataServer});
          } else {
            this.cartDataObs$.next({...this.cartDataServer});
            this.cartDataClient.prodData[index].incart = data.numInCart;
            this.CalculateTotal();
            this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
            localStorage.setItem('', JSON.stringify(this.cartDataClient));
          }
    
        }
    
      }
    DeleteProductFromCart(index) {
    
        if (window.confirm('Are you sure you want to delete the item?')) {
          this.cartDataServer.data.splice(index, 1);
          this.cartDataClient.prodData.splice(index, 1);
          this.CalculateTotal();
          this.cartDataClient.Total_Amount = this.cartDataServer.Total_Amount;
    
          if (this.cartDataClient.Total_Amount === 0) {
            this.cartDataClient = {prodData: [{incart: 0, Product_Id: 0}], Total_Amount: 0};
            localStorage.setItem('', JSON.stringify(this.cartDataClient));
            } 
          else {
            localStorage.setItem('', JSON.stringify(this.cartDataClient));
             }
    
          if (this.cartDataServer.Total_Amount === 0) {
            this.cartDataServer = {
              data: [{
                product: undefined,
                numInCart: 0
              }],
              Total_Amount: 0
            };
            this.cartDataObs$.next({...this.cartDataServer});
          } else {
            this.cartDataObs$.next({...this.cartDataServer});
          }
        }
    }
     private CalculateTotal() {
        let Total = 0;
    
        this.cartDataServer.data.forEach(p => {
          const {numInCart} = p;
          const {Unit_Price} = p.product;
          Total += numInCart * Unit_Price;
        });
        this.cartDataServer.Total_Amount = Total;
        this.cartTotal$.next(this.cartDataServer.Total_Amount);
      }

      private resetServerData() {
        this.cartDataServer = {
          data: [{
            product: undefined,
            numInCart: 0
          }],
          Total_Amount: 0
        };
        this.cartDataObs$.next({...this.cartDataServer});
      }
    
 } 
