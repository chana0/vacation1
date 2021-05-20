using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dl.Classes
{
    public class ConsumerDL
    {
        vacationDBEntities4 db;
        public ConsumerDL()
        {
            db = new vacationDBEntities4();
        }
        public consumer InsertConsumer(consumer consumer)
        {
            db.consumer.Add(consumer);
            db.SaveChanges();
            return db.consumer.FirstOrDefault(x => x.id == consumer.id);
        }
        public consumer GetConsumerById(int id)
        {
            return db.consumer.FirstOrDefault(x => x.id == id);
        }
        public List<order> GetConsumerOrders(int consumerId)
        {
            return db.order.Where(x => x.consumerId == consumerId).ToList();
        }
        public Boolean checkThatTheEmailIsAvailable(string email)
        {
            Boolean check = true;
            foreach (consumer consumer in db.consumer)
            {
                if (consumer.email.Equals(email))
                {
                    check = false;
                }
            }
            if (check == false)
                return false;
            return true;
        }
        public consumer getConsumerByLogin(string email, string password)
        {
            consumer consumer = null;
            consumer = db.consumer.FirstOrDefault(x => x.email == email && x.password == password);
            return consumer;
        }
    }
}
