using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dl.Classes
{
    public class OrderDL
    {
        vacationDBEntities4 db;
        public OrderDL()
        {
            db = new vacationDBEntities4();
        }
        public order InsertOrder(order order)
        {
            db.order.Add(order);
            db.SaveChanges();
            return db.order.FirstOrDefault(x => x.id == x.id);
        }
        public Boolean CheckIfTheApartmentIsAvailableOnTheRequeftedDate(DateTime startDate, DateTime endDate, int apartmentId)
        {
            Boolean test;
            order o = null;
            o = db.order.FirstOrDefault(x => (x.apartmentId == apartmentId) &&
            (x.arrivalTime > startDate && x.arrivalTime < endDate || x.departureTime > startDate && x.departureTime < endDate));
            if (o == null)
                test = true;
            else
                test = false;
            return test;
        }
        public order PlaceAnOrder(order order)
        {
            db.order.Add(order);
            db.SaveChanges();
            return db.order.FirstOrDefault(x => x.id == order.id);
        }
        public List<order> GetOrdersByHomeownerId(int homeownerId)
        {
            List<order> orders;
            int apartmentId = (int)db.vacationApartment.FirstOrDefault(x => x.homeownerId == homeownerId).id;
            orders = db.order.Where(x => x.apartmentId == apartmentId).OrderBy(x => x.apartmentId).ToList();
            return orders;
        }
    }
}
