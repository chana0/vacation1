using Dl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PL.Models
{
    public class ConsumerDTO
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
        public string buildingNumber { get; set; }
        public string zipCode { get; set; }
        public ConsumerDTO()
        {

        }
        public ConsumerDTO(consumer consumer)
        {
            id = consumer.id;
            firstName = consumer.firstName;
            lastName = consumer.lastName;
            identityCode = consumer.identityCode;
            password = consumer.password;
            tel = consumer.tel;
            pel = consumer.pel;
            email = consumer.email;
            city = consumer.city;
            street = consumer.street;
            buildingNumber = consumer.houseNumber;
            zipCode = consumer.postalCode;
        }
        public consumer convertToConsumer()
        {
            return new consumer()
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
        public static List<ConsumerDTO> convertListToConsumerDTO(List<consumer> consumers)
        {
            List<ConsumerDTO> consumers1 = new List<ConsumerDTO>();
            foreach (var c in consumers)
            {
                consumers1.Add(new ConsumerDTO(c));
            }
            return consumers1;
        }
    }
}