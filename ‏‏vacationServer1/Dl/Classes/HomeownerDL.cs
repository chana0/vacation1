using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dl.Classes
{
    public class HomeownerDL
    {
        vacationDBEntities4 db;
        public HomeownerDL()
        {
            db = new vacationDBEntities4();
        }
        public homeowner Inserthomeowner(homeowner homeowner)
        {
            db.homeowner.Add(homeowner);
            db.SaveChanges();
            return db.homeowner.FirstOrDefault(x => x.id == homeowner.id);
        }
        public List<homeowner> GetHomeownersByHomeownersId(List<Nullable<int>> homeownersId)
        {
            List<homeowner> homeowners = new List<homeowner>();
            int index = -1;
            foreach (var homeownerId in homeownersId)
            {
                index++;
                homeowners.Add(db.homeowner.FirstOrDefault(x => x.id == homeownerId));
            }
            return homeowners;
        }
        public Boolean checkThatTheEmailIsAvailable(string email)
        {
            Boolean check = true;
            foreach (homeowner homeowner in db.homeowner)
            {
                if (homeowner.email.Equals(email))
                {
                    check = false;
                }
            }
            if (check == false)

                return false;
            return true;
        }
        public homeowner getHomeownerByLogin(string email, string password)
        {
            homeowner homeowner = null;
            homeowner = db.homeowner.FirstOrDefault(x => x.email == email && x.password == password);
            return homeowner;
        }
    }
}
