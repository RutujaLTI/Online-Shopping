using OnlineShoppingWebAPIProject.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Mail;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Cors;

namespace OnlineShoppingWebAPIProject.Controllers
{
    [EnableCors("*","*","*")]
    public class OTPController : ApiController
    {
        private OnlineShoppingEntities1 db = new OnlineShoppingEntities1();
        public async Task<int> GetOtp(string email)
        {
            if (db.Users.FirstOrDefault(u => u.UserEmail == email) is null) return 0;
            Random generator = new Random();
            int r = generator.Next(100000, 1000000);
            SmtpClient smtp = new SmtpClient();
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("p98warehouse@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = "Forgot Password";
            mailMessage.Body = "Your OTP is " + r;
            await Task.Run(() => smtp.SendAsync(mailMessage, null));
            return r;
        }

        [HttpGet]
        public async Task ResendOtp(string email,int otp)
        {
            SmtpClient smtp = new SmtpClient();
            MailMessage mailMessage = new MailMessage();
            mailMessage.From = new MailAddress("p98warehouse@gmail.com");
            mailMessage.To.Add(email);
            mailMessage.Subject = "Forgot Password";
            mailMessage.Body = "Your OTP is " + otp;
            await Task.Run(() => smtp.SendAsync(mailMessage, null));
        }
    }
}
