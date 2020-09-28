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
    public class LoginController : ApiController
    {
        private OnlineShoppingEntities db = new OnlineShoppingEntities();
        [HttpGet]
        public async Task ChangePassword(string email,string password)
        {
            await Task.Run( ()=>db.proc_change_password(email, password));
        }
        [HttpPost]
        public bool Login(string email, string password)
        {
            return db.Users.FirstOrDefault(u => u.UserEmail == email && u.UserPassword == password) is { };
        }
        [HttpPost]
        public bool SignUp([FromBody]User user)
        {
            try
            {
                db.proc_signup(user.UserName, user.UserEmail, user.UserPhone, user.UserPassword);
                return true;
            }
            catch
            {
                return false;
            }
        }
    }
}
