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
    [EnableCors("*", "*", "*")]
    public class OrderController : ApiController
    {
        OnlineShoppingEntities1 db = new OnlineShoppingEntities1();
        public IQueryable<Order> GetOrders(int id)
        {
            return db.Orders.Where(o => o.UserId == id);
        }
        [HttpPost] public void PlaceOrder(Order order)
        {
            order.OrderDate = DateTime.Now;
             db.place_order(order.UserId, order.OrderTotal, order.OrderAddress, order.OrderDate);
        }
    }
}
