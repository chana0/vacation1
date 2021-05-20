using BL.Classes;
using Dl;
using Dl.Classes;
using Newtonsoft.Json.Linq;
using PL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PL.Controllers
{
    [RoutePrefix("api/Consumer")]

    public class ConsumerController : ApiController
    {
        ConsumerBL consumerBL = new ConsumerBL();
        // GET: api/Consumer
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        [HttpPost]
        [Route("GetConsumerByLogin")]
        // GET: api/Consumer/5
        public IHttpActionResult GetConsumerByLogin(JObject loginDetails)
        {
            string email = loginDetails["email"].ToObject<string>();
            string password = loginDetails["password"].ToObject<string>();
            consumer consumer = consumerBL.getConsumerByLogin(email, password);
            if (consumer == null)
                return Ok(consumer);
            return Ok(new ConsumerDTO(consumer));
        }
        [HttpPost]
        [Route("CheckThatTheEmailIsAvailable")]
        public IHttpActionResult CheckThatTheEmailIsAvailable([FromBody] JObject email)
        {
            string email1 = email["email"].ToObject<string>();
            return Ok(consumerBL.checkThatTheEmailIsAvailable(email1));
        }
        [HttpGet]
        [Route("GetConsumerById/{id}")]
        public IHttpActionResult GetConsumerById(int id)
        {
            consumer consumer = consumerBL.GetConsumerById(id);
            return Ok(new ConsumerDTO(consumer));
        }
        [HttpGet]
        [Route("GetConsumersOrders/{id}")]
        public IHttpActionResult GetConsumerOrders(int id)
        {
            List<order> orders = consumerBL.GetConsumerOrders(id);
            if (orders == null)
                return Ok(orders);
            return Ok(OrderDTO.convertToListOrderDTO(orders));
        }
        [HttpPost]
        [Route("InsertConsumer")]
        // POST: api/Consumer
        public IHttpActionResult Post([FromBody] ConsumerDTO consumerP)
        {
            consumer consumer1;
            consumer1 = consumerBL.InsertConsumer(consumerP.convertToConsumer());
            return Ok(new ConsumerDTO(consumer1));
        }
        // PUT: api/Consumer/5
        public void Put(int id, [FromBody] string value)
        {
        }
        // DELETE: api/Consumer/5
        public void Delete(int id)
        {
        }
    }
}
