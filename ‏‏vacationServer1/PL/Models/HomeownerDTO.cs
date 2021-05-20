using Dl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PL.Models
{
    public class HomeownerDTO
    {
        public decimal id { get; set; }
        public string firstName { get; set; }
        public string lastName { get; set; }
        public string identityCode { get; set; }
        public string password { get; set; }
        public string tel { get; set; }
        public string pel { get; set; }
        public string email { get; set; }
        public string city { get; set; }
        public string street { get; set; }
        public decimal buildingNumber { get; set; }
        public string zipCode { get; set; }
        public HomeownerDTO()
        {

        }
        public HomeownerDTO(homeowner homeowner)
        {
            this.id = homeowner.id;
            this.firstName = homeowner.firstName;
            this.lastName = homeowner.lastName;
            this.identityCode = homeowner.identityCode;
            this.password = homeowner.password;
            this.tel = homeowner.tel;
            this.pel = homeowner.pel;
            this.email = homeowner.email;
            this.city = homeowner.city;
            this.street = homeowner.street;
            this.buildingNumber = homeowner.houseNumber;
            this.zipCode = homeowner.postalCode;
        }
        public homeowner convertToHomeowner()
        {
            return new homeowner()
            {
                id=this.id,
                firstName = this.firstName,
                lastName = this.lastName,
                identityCode = this.identityCode,
                password = this.password,
                tel = this.tel,
                pel = this.pel,
                email = this.email,
                city = this.city,
                street = this.street,
                houseNumber = this.buildingNumber,
                postalCode = this.zipCode
            };
        }
        public static List<HomeownerDTO> convertToListHomeownerDTO(List<homeowner> homeowners)
        {
            List<HomeownerDTO> homeowners1 = new List<HomeownerDTO>();
            foreach (var h in homeowners)
            {
                homeowners1.Add(new HomeownerDTO(h));
            }
            return homeowners1;
        }
    }
}