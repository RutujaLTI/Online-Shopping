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
        private OnlineShoppingEntities1 db = new OnlineShoppingEntities1();
        [HttpGet]
        public async Task ChangePassword(string email,string password)
        {
            await Task.Run( ()=>db.proc_change_password(email, password));
        }
        [HttpPut]
        public User Login(User user)
        {
            return db.Users.FirstOrDefault(u => u.UserEmail == user.UserEmail && u.UserPassword == user.UserPassword && u.IsActive == "Yes")
                is User u
                ? u
                : null;
        }

        [HttpPost]
        public async Task<bool> SignUp([FromBody]User user)
        {
            try
            {
                await Task.Run( ()=>db.proc_signup(user.UserName, user.UserEmail, user.UserPhone, user.UserPassword));
                return true;
            }
            catch
            {
                return false;
            }
        }

        [HttpPost]
        public bool DeactivateAccount(int id, string password)
        {
            return db.proc_deactivate_account(id,password) is { };
        }
    }
}
