using Dl;
using Dl.Classes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL.Classes
{
    public class ConsumerBL
    {
        ConsumerDL consumerDL = new ConsumerDL();
        public consumer InsertConsumer(consumer consumer)
        {
            return consumerDL.InsertConsumer(consumer);
        }
        public consumer GetConsumerById(int id)
        {
            return consumerDL.GetConsumerById(id);
        }
        public Boolean checkThatTheEmailIsAvailable(string email)
        {
            return consumerDL.checkThatTheEmailIsAvailable(email);
        }
        public consumer getConsumerByLogin(string email,string password)
        {
            return consumerDL.getConsumerByLogin(email,password);
        }
        public List<order> GetConsumerOrders(int consumerId)
        {
            return consumerDL.GetConsumerOrders(consumerId);
        }
    }
}
