using Dl;
using Dl.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Classes
{
    public class OrderBL
    {
        OrderDL orderDL = new OrderDL();
        public order Inserthomeowner(order order)
        {
            return orderDL.InsertOrder(order);
        }
        public Boolean CheckIfTheApartmentIsAvailableOnTheRequeftedDate(DateTime startDate, DateTime endDate,int apartmentId)
        {
            return orderDL.CheckIfTheApartmentIsAvailableOnTheRequeftedDate(startDate,endDate,apartmentId);
        }
        public order PlaceAnOrder(order order)
        {
            return orderDL.PlaceAnOrder(order);
        }
        public List<order> GetOrdersByHomeownerId(int homeownerId)
        {
            return orderDL.GetOrdersByHomeownerId(homeownerId);
        }
    }
}
