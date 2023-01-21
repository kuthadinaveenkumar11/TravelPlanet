using Angular_DB_Task.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Angular_DB_Task.repos
{
    public interface InterfaceWed
    {
        List<WednesdayModel> getData();
         string CreateEm(WednesdayModel mode);
        string EditData(WednesdayModel mode);
        string DeleteUser(int mo);
    }
    class Classofwed : InterfaceWed
    {
        NaveenEntities objec =new NaveenEntities();
        List<WednesdayModel> InterfaceWed.getData()
        {
            List<WednesdayModel> Emplist = objec.wednesdays.Select(s => new WednesdayModel()
            {
                Snum = s.Snum,
                Hotel = s.Hotel,
                Arrival = s.Arrival,
                Depature = s.Depature,
                Types = s.Types,
                Guest = s.Guest,
                Price=s.Price
            }).ToList<WednesdayModel>();
            return Emplist;
        }
        string InterfaceWed.CreateEm(WednesdayModel mode)
        {
            var Empl = objec.wednesdays.Where(s => s.Snum == mode.Snum).FirstOrDefault();
            if (Empl == null)
            {
                objec.wednesdays.Add(new wednesday()
                {
                    Snum = mode.Snum,
                    Hotel = mode.Hotel,
                    Arrival = mode.Arrival,
                    Depature = mode.Depature,
                    Types = mode.Types,
                    Guest = mode.Guest,
                    Price = mode.Price
                });
                objec.SaveChanges();
                objec.Dispose();
                return "Inserted";
            }
            else
            {
                Empl.Snum = mode.Snum;
                Empl.Hotel = mode.Hotel;
                Empl.Arrival = mode.Arrival;
                Empl.Depature = mode.Depature;
                Empl.Types = mode.Types;
                Empl.Guest = mode.Guest;
                Empl.Price = mode.Price;
                objec.SaveChanges();
                objec.Dispose();
                return "Updated";
            }
        }
 
        string InterfaceWed.EditData(WednesdayModel mode)
        {
            var Empl = objec.wednesdays.Find(mode.Snum);
            if (Empl != null)
            {
                Empl.Snum = mode.Snum;
                Empl.Hotel = mode.Hotel;
                Empl.Arrival = mode.Arrival;
                Empl.Depature = mode.Depature;
                Empl.Types = mode.Types;
                Empl.Guest = mode.Guest;
                Empl.Price = mode.Price;




                objec.SaveChanges();
                objec.Dispose();
                return "Inserted";
            }
            return "Not Inserted";
        }
        string InterfaceWed.DeleteUser(int mo)
        {
            var Emplye = objec.wednesdays.Where(s => s.Snum == mo);
            if (Emplye != null)
            {
                objec.wednesdays.Remove(Emplye.FirstOrDefault());
                objec.SaveChanges();
                objec.Dispose();
                return "Deleted";
            }
            else
            {
                return "Id is not available";
            }
        }
    }
}
