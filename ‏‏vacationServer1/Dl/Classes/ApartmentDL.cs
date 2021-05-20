using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dl.Classes
{
    public class ApartmentDL
    {
        vacationDBEntities4 db;
        List<vacationApartment> apartments = new List<vacationApartment>();
        public ApartmentDL()
        {
            db = new vacationDBEntities4();
        }
        public vacationApartment InsertVacationApartment(vacationApartment vacationApartment)
        {
            db.vacationApartment.Add(vacationApartment);
            db.SaveChanges();
            return db.vacationApartment.FirstOrDefault(x => x.id == vacationApartment.id);
        }
        public List<vacationApartment> GetApartmentsByCriteria(
            string city, string neighborhood, Nullable<int> minimumBeds, Nullable<int> minimumRooms,
            Nullable<Boolean> yard, Nullable<Boolean> jacuzzi, Nullable<Boolean> pool,
            Nullable<Boolean> aSynagogueNearby, Nullable<Boolean> eruvAnTheNeighborhood,
            Nullable<int> maximumPrice
            )
        {
            try
            {
                apartments = db.vacationApartment.ToList();
                if (city != null)
                    apartments = apartments.Where(x => x.city == city).ToList();
                if (neighborhood != null)
                    apartments = apartments.Where(x => x.neighborhood == neighborhood).ToList();
                if (minimumBeds != null)
                    apartments = apartments.Where(x => x.beds >= minimumBeds).ToList();
                if (minimumRooms != null)
                    apartments = apartments.Where(x => x.amountOfRooms >= minimumRooms).ToList();
                if (yard != null && yard != false)
                    apartments = apartments.Where(x => x.yard == yard).ToList();
                if (jacuzzi != null && jacuzzi != false)
                    apartments = apartments.Where(x => x.jacuzzi == jacuzzi).ToList();
                if (pool != null && pool != false)
                    apartments = apartments.Where(x => x.pool == pool).ToList();
                if (aSynagogueNearby != null && aSynagogueNearby != false)
                    apartments = apartments.Where(x => x.aSynagogueNearby == aSynagogueNearby).ToList();
                if (eruvAnTheNeighborhood != null && eruvAnTheNeighborhood != false)
                    apartments = apartments.Where(x => x.eruvAnTheNeighborhood == eruvAnTheNeighborhood).ToList();
                if (maximumPrice != null)
                    apartments = apartments.Where(x => x.pricePerNight <= maximumPrice).ToList();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
            return apartments;
        }
        public List<vacationApartment> GetApartmentsByApartmentsId(List<Nullable<int>> apartmentsId)
        {
            List<vacationApartment> apartments = new List<vacationApartment>();
            int index = -1;
            foreach (var apartmentId in apartmentsId)
            {
                index++;
                apartments.Add(db.vacationApartment.FirstOrDefault(x => x.id == apartmentId));
            }
            return apartments;
        }
    }
}
