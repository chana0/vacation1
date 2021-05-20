using BL.Classes;
using PL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Dl;
using Dl.Classes;
using Newtonsoft.Json.Linq;

namespace PL.Controllers
{
    [RoutePrefix("api/Homeowner")]
    public class HomeownerController : ApiController
    {
        HomeownerBL homeownerBL = new HomeownerBL();
        // GET: api/Homeowner
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }
        [HttpPost]
        [Route("GetHomeownerByLogin")]
        // GET: api/Consumer/5
        public IHttpActionResult GetHomeownerByLogin(JObject loginDetails)
        {
            string email = loginDetails["email"].ToObject<string>();
            string password = loginDetails["password"].ToObject<string>();
            homeowner homeowner = homeownerBL.getHomeownerByLogin(email, password);
            if (homeowner == null)
                return Ok(homeowner);
            return Ok(new HomeownerDTO(homeowner));
        }
        [HttpPost]
        [Route("GetHomeownersByHomeownersId")]
        public IHttpActionResult GetHomeownersByHomeownersId([FromBody] List<Nullable<int>> homeownersId)
        {
            List<homeowner> homeowners = homeownerBL.GetHomeownersByHomeownersId(homeownersId);
            return Ok(HomeownerDTO.convertToListHomeownerDTO(homeowners));
        }
        // GET: api/Homeowner/5
        public string Get(int id)
        {
            return "value";
        }
        // POST: api/Homeowner
        [HttpPost]
        [Route("InsertHomeowner")]
        public IHttpActionResult Post([FromBody] HomeownerDTO homeowner)
        {
            homeowner homeowner1;
            homeowner1 = homeownerBL.Inserthomeowner(homeowner.convertToHomeowner());
            return Ok(new HomeownerDTO(homeowner1));
        }
        [HttpPost]
        [Route("CheckThatTheEmailIsAvailable")]
        // POST: api/Consumer
        public IHttpActionResult Get([FromBody] JObject email)
        {
            string email1 = email["email"].ToObject<string>();
            Boolean c;
            c = homeownerBL.checkThatTheEmailIsAvailable(email1);
            return Ok(c);
        }
        // PUT: api/Homeowner/5
        public void Put(int id, [FromBody] string value)
        {
        }
        // DELETE: api/Homeowner/5
        public void Delete(int id)
        {
        }
    }
}
