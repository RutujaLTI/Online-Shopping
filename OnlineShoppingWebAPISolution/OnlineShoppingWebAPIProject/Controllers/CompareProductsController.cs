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
        private OnlineShoppingEntities db = new OnlineShoppingEntities();

        //// GET: api/CompareProducts
        //public List<Product> GetProducts()
        //{
        //    return compareProducts;
        //}

        //// GET: api/CompareProducts/5
        //[ResponseType(typeof(Product))]
        //public Product GetProduct(int id)
        //{
        //    Product product = compareProducts.Find(s=>s.ProductId==id);
        //    if (product == null)
        //    {
        //        return null;
        //    }

        //    return product;
        //}

        //// PUT: api/CompareProducts/5
        //[ResponseType(typeof(void))]
        //public async Task<IHttpActionResult> PutProduct(int id, Product product)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }

        //    if (id != product.ProductId)
        //    {
        //        return BadRequest();
        //    }

        //    db.Entry(product).State = EntityState.Modified;

        //    try
        //    {
        //        await db.SaveChangesAsync();
        //    }
        //    catch (DbUpdateConcurrencyException)
        //    {
        //        if (!ProductExists(id))
        //        {
        //            return NotFound();
        //        }
        //        else
        //        {
        //            throw;
        //        }
        //    }

        //    return StatusCode(HttpStatusCode.NoContent);
        //}

        //// POST: api/CompareProducts
        //[ResponseType(typeof(Product))]
        //public async Task<IHttpActionResult> PostProduct(Product product)
        //{
        //    if (!ModelState.IsValid)
        //    {
        //        return BadRequest(ModelState);
        //    }
            
        //    compareProducts.Add(product);
        //    //db.Products.Add(product);
        //    await db.SaveChangesAsync();

        //    return CreatedAtRoute("DefaultApi", new { id = product.ProductId }, product);
        //}

        //// DELETE: api/CompareProducts/5
        //[ResponseType(typeof(Product))]
        //public async Task<IHttpActionResult> DeleteProduct(int id)
        //{
        //    Product product = await db.Products.FindAsync(id);
        //    if (product == null)
        //    {
        //        return NotFound();
        //    }
        //    int inx=compareProducts.IndexOf(product);
        //    if (inx >= 0)
        //        compareProducts.RemoveAt(inx);

        //    //db.Products.Remove(product);
        //    await db.SaveChangesAsync();

        //    return Ok(product);
        //}

        //protected override void Dispose(bool disposing)
        //{
        //    if (disposing)
        //    {
        //        db.Dispose();
        //    }
        //    base.Dispose(disposing);
        //}

        //private bool ProductExists(int id)
        //{
        //    return db.Products.Count(e => e.ProductId == id) > 0;
        //}

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

        [HttpDelete]public void RemoveProduct(int id)
        {
            compareProducts.RemoveAll(p => p.ProductId == id);
        }

        [HttpDelete] public void RemoveAllProducts()
        {
            compareProducts = new List<Product>();
        }
    }
}