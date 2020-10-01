using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OnlineShoppingWebAPIProject.Models
{
    public class CartModel
    {
        Product ProductModel;
        int? Quantity;
        CartModel() { }
        CartModel(Cart cart)
        {
            ProductModel = cart.Product;
            Quantity = cart.Quantity;
        }
    }
}