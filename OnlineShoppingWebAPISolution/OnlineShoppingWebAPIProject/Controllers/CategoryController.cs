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
        OnlineShoppingEntities1 db = new OnlineShoppingEntities1();

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
    }
}
