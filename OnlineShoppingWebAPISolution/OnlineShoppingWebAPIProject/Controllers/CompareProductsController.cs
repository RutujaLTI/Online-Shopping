using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using OnlineShoppingWebAPIProject.Models;

namespace OnlineShoppingWebAPIProject.Controllers
{
    [EnableCors("*","*","*")]public class CompareProductsController : ApiController
    {
        static List<Product> compareProducts = new List<Product>();
        private OnlineShoppingEntities1 db = new OnlineShoppingEntities1();


        public IEnumerable GetProducts()
        {
            if (compareProducts.Count > 4) 
                compareProducts = compareProducts.Skip(Math.Max(0, compareProducts.Count() - 4)).ToList(); ;
            return compareProducts;
        }

        [HttpPost]
        public void AddProduct(int id)
        {
            if (db.Products.FirstOrDefault(p => p.ProductId == id) is Product p)
                if(!compareProducts.Exists(p=>p.ProductId==id))
                    compareProducts.Add(p);
        }

        [HttpDelete]
        public void RemoveProduct(int id)
        {
            compareProducts.RemoveAll(p => p.ProductId == id);
        }

        [HttpDelete] 
        public void RemoveAllProducts()
        {
            compareProducts = new List<Product>();
        }
    }
}