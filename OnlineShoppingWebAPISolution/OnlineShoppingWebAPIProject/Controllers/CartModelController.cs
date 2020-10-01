using OnlineShoppingWebAPIProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OnlineShoppingWebAPIProject.Controllers
{
    [EnableCors("*","*","*")]public class CartModelController : ApiController
    {
        OnlineShoppingEntities1 db = new OnlineShoppingEntities1();
        public IQueryable<CartModel> GetProducts(int id)
        {
            return db.Carts.Where(c => c.UserId == id).Select(c => new CartModel() { cart=c,product=c.Product});
        }
    }
}
