using Dl;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace PL.Models
{
    public class OrderDTO
    {
        public decimal id { get; set; }
        public decimal apartmentId { get; set; }
        public decimal compoundId { get; set; }
        public decimal consumerId { get; set; }
        public System.DateTime arrivalTime { get; set; }
        public System.DateTime departureTime { get; set; }
        public OrderDTO()
        {

        }
        public OrderDTO(order order)
        {
            this.id = order.id;
            this.apartmentId = order.apartmentId;
            this.compoundId = order.consumerId;
            this.consumerId = order.consumerId;
            this.arrivalTime = order.arrivalTime;
            this.departureTime = order.departureTime;
        }
        public order convertToOrder()
        {
            return new order()
            {
                id=this.id,
                apartmentId = this.apartmentId,
                consumerId = this.consumerId,
                arrivalTime = this.arrivalTime,
                departureTime = this.departureTime,
            };
        }
        public static List<OrderDTO> convertToListOrderDTO(List<order> orders)
        {
            List<OrderDTO> orders1 = new List<OrderDTO>();
            foreach (var o in orders)
            {
                orders1.Add(new OrderDTO(o));
            }
            return orders1;
        }
    }
}