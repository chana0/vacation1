using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dl;
using Dl.Classes;

namespace BL.Classes
{
    public class ApartmentBL
    {
        ApartmentDL apartmentDL = new ApartmentDL();
        public vacationApartment InsertVacationApartment(vacationApartment vacationApartment)
        {
            return apartmentDL.InsertVacationApartment(vacationApartment);
        }
        public List<vacationApartment> GetApartmentsByCriteria(
             string city, string neighborhood, Nullable<int> minimumBeds, Nullable<int> minimumRooms,
            Nullable<Boolean> yard, Nullable<Boolean> jacuzzi, Nullable<Boolean> pool,
            Nullable<Boolean> aSynagogueNearby, Nullable<Boolean> eruvAnTheNeighborhood,
            Nullable<int> maximumPrice
            )
        {
            return apartmentDL.GetApartmentsByCriteria(
                city, neighborhood, minimumBeds, minimumRooms, yard, jacuzzi, pool,
                aSynagogueNearby, eruvAnTheNeighborhood, maximumPrice);
        }
        public List<vacationApartment> GetApartmentsByApartmentsId(List<Nullable<int>> apartmentsId)
        {
            return apartmentDL.GetApartmentsByApartmentsId(apartmentsId);
        }
    }
}
