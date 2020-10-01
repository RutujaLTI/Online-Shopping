using OnlineShoppingWebAPIProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OnlineShoppingWebAPIProject.Controllers
{
    [EnableCors("*","*","*")]public class WishListController : ApiController
    {
        OnlineShoppingEntities1 db = new OnlineShoppingEntities1();

        public IQueryable<Product> GetProducts(int id)
        {
            return db.Wishlists.Where(w => w.UserId == id).Select(w => w.Product);
        }
        [HttpPost]public async Task AddToWishList(int ProductId,int UserId)
        {
            try
            {
                db.Wishlists.Add(new Wishlist(UserId, ProductId, 1));
                await db.SaveChangesAsync();
            }
            catch
            {

            }
        }

        public async Task DeleteFromWishList(int ProductId, int UserId)
        {
            try
            {
                Wishlist wishlist = db.Wishlists.FirstOrDefault(w => w.ProductId == ProductId && w.UserId == UserId);
                db.Wishlists.Remove(wishlist);
                await db.SaveChangesAsync();
            }
            catch
            {

            }
        }

    }
}
