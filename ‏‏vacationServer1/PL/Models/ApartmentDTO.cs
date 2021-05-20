using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Web;
using Dl;
namespace PL.Models
{
    public class ApartmentDTO
    {
        public decimal id { get; set; }
        public string name { get; set; }
        public Nullable<decimal> compoundId { get; set; }
        public Nullable<decimal> homeownerId { get; set; }
        public string city { get; set; }
        public string street { get; set; }
        public decimal buildingNumber { get; set; }
        public string neighborhood { get; set; }
        public string zipCode { get; set; }
        public Nullable<decimal> floor { get; set; }
        public Nullable<decimal> amountOfRooms { get; set; }
        public decimal beds { get; set; }
        public Nullable<decimal> moreMattresses { get; set; }
        public Nullable<bool> aSynagogueNearby { get; set; }
        public Nullable<bool> eruvAnTheNeighborhood { get; set; }
        public Nullable<bool> yard { get; set; }
        public Nullable<bool> pool { get; set; }
        public Nullable<bool> jacuzzi { get; set; }
        public Nullable<decimal> weekendPrice { get; set; }
        public Nullable<decimal> pricePerNight { get; set; }
        public Nullable<decimal> priceForSaturdayNight { get; set; }
        public string moreDetails { get; set; }
        public string picture { get; set; }

        //public Image picture { get; set; }
        //public byte[] img { get; set; }


        public ApartmentDTO()
        {
           
        }
        public ApartmentDTO(vacationApartment vacationApartment)
        {
            this.id = vacationApartment.id;
            this.name = vacationApartment.name;
            this.homeownerId = vacationApartment.homeownerId;
            this.city = vacationApartment.city;
            this.street = vacationApartment.street;
            this.buildingNumber = vacationApartment.houseNumber;
            this.neighborhood = vacationApartment.neighborhood;
            this.zipCode = vacationApartment.postalCode;
            this.floor = vacationApartment.floor;
            this.amountOfRooms = vacationApartment.amountOfRooms;
            this.beds = vacationApartment.beds;
            this.aSynagogueNearby = vacationApartment.aSynagogueNearby;
            this.eruvAnTheNeighborhood = vacationApartment.eruvAnTheNeighborhood;
            this.yard = vacationApartment.yard;
            this.pool = vacationApartment.pool;
            this.jacuzzi = vacationApartment.jacuzzi;
            this.weekendPrice = vacationApartment.weekendPrice;
            this.pricePerNight = vacationApartment.pricePerNight;
            this.priceForSaturdayNight = vacationApartment.priceForSaturdayNight;
            this.moreDetails = vacationApartment.moreDetails;
            this.picture = vacationApartment.img;
        }
        public vacationApartment convertToVacationApartment()
        {
            return new vacationApartment()
            {
                id=this.id,
                name = this.name,
                homeownerId = this.homeownerId,
                city = this.city,
                street = this.street,
                houseNumber = this.buildingNumber,
                neighborhood = this.neighborhood,
                postalCode = this.zipCode,
                floor = this.floor,
                amountOfRooms = this.amountOfRooms,
                beds = this.beds,
                aSynagogueNearby = this.aSynagogueNearby,
                eruvAnTheNeighborhood = this.eruvAnTheNeighborhood,
                yard = this.yard,
                pool = this.pool,
                jacuzzi = this.jacuzzi,
                weekendPrice = this.weekendPrice,
                pricePerNight = this.pricePerNight,
                priceForSaturdayNight = this.priceForSaturdayNight,
                moreDetails = this.moreDetails,
                img = this.picture
            };
        }
        public static List<ApartmentDTO> convertToListApartmentDTO(List<vacationApartment> apartments)
        {
            List<ApartmentDTO> apartments1 = new List<ApartmentDTO>();
            foreach (var a in apartments)
            {
                apartments1.Add(new ApartmentDTO(a));
            }
            return apartments1;
        }
    }
}