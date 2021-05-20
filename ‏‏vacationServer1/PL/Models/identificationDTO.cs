using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PL.Models
{
    public class identificationDTO
    {
        public string email { get; set; }
        public string password { get; set; }
        public identificationDTO()
        {

        }
        public identificationDTO(string email,string password)
        {
            this.email = email;
            this.password = password;
        }
    }
}