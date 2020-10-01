using OnlineShoppingWebAPIProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OnlineShoppingWebAPIProject.Controllers
{
    [EnableCors("*", "*", "*")]
    public class SessionController : ApiController
    {
        public static User user;

        //public User GetUser() => user;
        //[HttpPost]public void SetUser(User u)
        //{
        //    user = u;
        //}
    }
}
