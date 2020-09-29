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
    public class CategoryController : ApiController
    {
        OnlineShoppingEntities db = new OnlineShoppingEntities();

        [HttpPost]
        public async Task<bool> AddCategory([FromUri] string category)
        {
            try
            {
                await Task.Run(() => db.proc_add_category(category));
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpGet]
        public List<proc_get_categories_Result> GetCategories()
        {   
                return db.proc_get_categories().ToList();
        }
    }
}
