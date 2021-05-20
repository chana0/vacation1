using BL.Classes;
using Dl;
using PL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace PL.Controllers
{
    [RoutePrefix("api/Order")]
    public class OrderController : ApiController
    {
        OrderBL orderBL = new OrderBL();
        // GET: api/Order
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        [HttpGet]
        [Route("GetOrdersByHomeownerId/{homeownerId}")]
        public IHttpActionResult GetOrdersByHomeownerId(int homeownerId)
        {
            List<order> orders = orderBL.GetOrdersByHomeownerId(homeownerId);
            return Ok(OrderDTO.convertToListOrderDTO(orders));
        }
        // GET: api/Order/5
        [HttpGet]
        [Route("CheckIfTheApartmentIsAvailableOnTheRequeftedDate/{startDate}/{endDate}/{apartmentId}")]
        public IHttpActionResult CheckIfTheApartmentIsAvailableOnTheRequeftedDate(DateTime startDate, DateTime endDate, int apartmentId)
        {
            return Ok(orderBL.CheckIfTheApartmentIsAvailableOnTheRequeftedDate(startDate, endDate, apartmentId));
        }
        [HttpPost]
        [Route("PlaceAnOrder")]

        // POST: api/Order
        public IHttpActionResult Post([FromBody] OrderDTO order)
        {
            order order1;
            order1 = orderBL.PlaceAnOrder(order.convertToOrder());
            return Ok(new OrderDTO(order1));
        }
        // PUT: api/Order/5
        public void Put(int id, [FromBody] string value)
        {
        }
        // DELETE: api/Order/5
        public void Delete(int id)
        {
        }
    }
}
