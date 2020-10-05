using OnlineShoppingWebAPIProject.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OnlineShoppingWebAPIProject.Controllers
{
    [EnableCors("*","*","*")]public class OrderDetailsController : ApiController
    {
        OnlineShoppingEntities1 entities1 = new OnlineShoppingEntities1();
        public IQueryable<OrderDetail> GetOrderDetails(int id)
        {
            return entities1.OrderDetails.Where(o => o.OrderId == id).Include(o => o.Product).Include(o => o.Order);
        }
    }
}
