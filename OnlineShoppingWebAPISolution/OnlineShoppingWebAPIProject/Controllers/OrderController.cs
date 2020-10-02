using OnlineShoppingWebAPIProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OnlineShoppingWebAPIProject.Controllers
{
    public class OrderModel
    {
        public string Address;
        public List<CartModel> cartModels;
    }
    [EnableCors("*", "*", "*")]
    public class OrderController : ApiController
    {
        OnlineShoppingEntities1 db = new OnlineShoppingEntities1();
        public IQueryable<Order> GetOrders(int id)
        {
            return db.Orders.Where(o => o.UserId == id);
        }
        [HttpPost] public void PlaceOrder(OrderModel orderModel)
        {
            try
            {
                var cartModels = orderModel.cartModels;
                decimal? total = cartModels.Sum(c => c.product.ProductPrice * c.cart.Quantity);
                Order order = new Order() { OrderAddress = orderModel.Address, UserId = cartModels[0].cart.UserId, OrderTotal = total };
                db.Orders.Add(order);
                db.SaveChanges();
                int orderId = order.OrderId;
                int userId = cartModels[0].cart.UserId;
                db.Carts.RemoveRange(db.Carts.Where(c => c.UserId == userId));
                foreach (CartModel cartModel in cartModels)
                {
                    Retailer r = db.Retailers.Find(cartModel.product.RetailerId);
                    r.RetailerRevenue += cartModel.product.ProductPrice * cartModel.cart.Quantity;
                    db.Entry(r).State = System.Data.Entity.EntityState.Modified;
                    db.OrderDetails.Add(new OrderDetail { OrderId = orderId, ProductId = cartModel.product.ProductId, Quantity = cartModel.cart.Quantity, Price = cartModel.product.ProductPrice });
                }
                db.SaveChanges();
            }
            catch
            {

            }
        }
    }
}
