using PL.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Dl;
using Dl.Classes;
using BL.Classes;
using Newtonsoft.Json.Linq;

namespace PL.Controllers
{
    [RoutePrefix("api/Apartment")]
    public class ApartmentController : ApiController
    {
        ApartmentBL apartmentBL = new ApartmentBL();
        List<vacationApartment> apartments;
        List<ApartmentDTO> apartments1;
        // GET: api/apartment
        [HttpPost]
        [Route("GetApartmentsByApartmentsId")]
        public IHttpActionResult GetApartmentsByApartmentsId([FromBody] List<Nullable<int>> apartmentsId)
        {
            List<vacationApartment> apartments = apartmentBL.GetApartmentsByApartmentsId(apartmentsId);
            return Ok(ApartmentDTO.convertToListApartmentDTO(apartments));
        }
        [HttpPost]
        [Route("GetApartmentsByCriteria")]
        public IHttpActionResult GetApartmentsByCriteria(JObject criteria)
        {
            string city = criteria["city"].ToObject<string>();
            string neighborhood = criteria["neighborhood"].ToObject<string>();
            Nullable<int> minimumBeds = criteria["minimumBeds"].ToObject<Nullable<int>>();
            Nullable<int> minimumRooms = criteria["minimumRooms"].ToObject<Nullable<int>>();
            Nullable<Boolean> yard = criteria["yard"].ToObject<Nullable<Boolean>>();
            Nullable<Boolean> jacuzzi = criteria["jacuzzi"].ToObject<Nullable<Boolean>>();
            Nullable<Boolean> pool = criteria["pool"].ToObject<Nullable<Boolean>>();
            Nullable<Boolean> aSynagogueNearby = criteria["aSynagogueNearby"].ToObject<Nullable<Boolean>>();
            Nullable<Boolean> eruvAnTheNeighborhood = criteria["eruvAnTheNeighborhood"].ToObject<Nullable<Boolean>>();
            Nullable<int> maximumPrice = criteria["maximumPrice"].ToObject<Nullable<int>>();
            apartments = apartmentBL.GetApartmentsByCriteria(
                city, neighborhood, minimumBeds, minimumRooms, yard, jacuzzi, pool,
                aSynagogueNearby, eruvAnTheNeighborhood, maximumPrice);
            apartments1 = ApartmentDTO.convertToListApartmentDTO(apartments);
            return Ok(apartments1);
        }
        // GET: api/apartment/5
        public string Get(int id)
        {
            return "value";
        }
        // POST: api/apartment
        [HttpPost]
        [Route("UploadImage")]
        public IHttpActionResult UploadImage([FromBody] string value)
        {
            string imageName = null;
            var httpRequest = HttpContext.Current.Request;
            var postedFile = httpRequest.Files["Image"];
            if (postedFile != null)
            {
                imageName = new
                    String(Path.GetFileNameWithoutExtension(postedFile.FileName).Take(10).ToArray()).Replace("", "-");
                var filePath = HttpContext.Current.Server.MapPath("~/Images/" + imageName);
                postedFile.SaveAs(filePath);
            }
            else
            {
                return Ok("error_picture");
            }
            return Ok();
        }
        [HttpPost]
        [Route("InsertApartment")]
        public IHttpActionResult post([FromBody] ApartmentDTO apartment)
        {
            vacationApartment apartment1;
            apartment1 = apartmentBL.InsertVacationApartment(apartment.convertToVacationApartment());
            return Ok(new ApartmentDTO(apartment1));
        }
        // PUT: api/apartment/5
        public void Put(int id, [FromBody] string value)
        {
        }
        // DELETE: api/apartment/5
        public void Delete(int id)
        {
        }
    }
}
