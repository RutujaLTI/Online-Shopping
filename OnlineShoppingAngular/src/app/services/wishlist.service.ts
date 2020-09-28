import { Injectable } from '@angular/core';
import { Wishlist } from '../models/wishlist.model';

@Injectable()
export class WishlistDataService{
   lastId: number = 0; 
   wishlist: Wishlist[] = [];

  constructor() { }
  addWishlist(wishlist: Wishlist): WishlistDataService {
    if (!wishlist.Id) {
      wishlist.Id = ++this.lastId;
    }
    this.wishlist.push(wishlist);
    return this;
  }
  deleteWishlistById(id: number): WishlistDataService {
    this.wishlist = this.wishlist
      .filter(wishlist => wishlist.Id !== id);
    return this;
  }
  updateWishlistById(id: number, values: Object = {}): Wishlist {
    
    let wish = this.getWishListById(id);
    if (!wish) {
      return null;
    }
    Object.assign(wish, values);
    return wish;
  }
  getAllWishlists(): Wishlist[] {
    return this.wishlist;
  }
  getWishListById(id: number): Wishlist {
    return this.wishlist
    .filter(wishlist => wishlist.Id === id)
    .pop();
  }

  
  toggleWishlistComplete(wish: Wishlist) {
    const updatedWish = this.updateWishlistById(wish.Id, {
      complete: !wish.complete
    });
    return updatedWish;
  }

}