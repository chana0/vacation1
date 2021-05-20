using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dl;
using Dl.Classes;

namespace BL.Classes
{
    public class HomeownerBL
    {
        HomeownerDL homeownerDL = new HomeownerDL();
        public homeowner Inserthomeowner(homeowner homeowner)
        {
            return homeownerDL.Inserthomeowner(homeowner);
        }
        public List<homeowner> GetHomeownersByHomeownersId(List<Nullable<int>> homeownersId)
        {
            return homeownerDL.GetHomeownersByHomeownersId(homeownersId);
        }
     
        public Boolean checkThatTheEmailIsAvailable(string email)
        {
            return homeownerDL.checkThatTheEmailIsAvailable(email);
        }
        public homeowner getHomeownerByLogin(string email,string password)
        {
            return homeownerDL.getHomeownerByLogin(email,password);
        }
    }
}
