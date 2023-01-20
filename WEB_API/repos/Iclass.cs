using Empty_WEB_API.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace Empty_WEB_API.repos
{
    public interface Iclass
    {
        List<ModelClass> Getdata();
        string CreateEm(ModelClass mode);
        List<ModelClass> GetAll(int id);
        string EditData(ModelClass mode);
        string DeleteUser(int mo);
        ModelClass GetSolo(int id);


    }
    class InterClass : Iclass
    {
        NaveenEntities2 obj = new NaveenEntities2();
        List<ModelClass> Iclass.Getdata()
        {
            List<ModelClass> Emplist = obj.Table_17.Select(s => new ModelClass()
            {
                Emp_ID = s.Emp_ID,
                Emp_Name = s.Emp_Name,
                Number = s.Number,
                City=s.City,
                Country=s.Country,
                Blood_group=s.Blood_group
            }).ToList<ModelClass>();
            return Emplist;
        }
        string Iclass.CreateEm(ModelClass mode)
        {
            var Empl = obj.Table_17.Where(s => s.Emp_ID == mode.Emp_ID).FirstOrDefault();
            if (Empl == null)
            {
                obj.Table_17.Add(new Table_17()
                {
                    Emp_ID = mode.Emp_ID,
                    Emp_Name = mode.Emp_Name,
                    Number = mode.Number,
                    City = mode.City,
                    Country = mode.Country,
                    Blood_group = mode.Blood_group
                });
                obj.SaveChanges();
                obj.Dispose();
                return "Inserted";
            }
            return "Not Inserted";
        }
        List<ModelClass> Iclass.GetAll(int id)
        {
            var Empl = obj.Table_17.Where(n => n.Emp_ID == id).Select(s => new ModelClass()
            {
                Emp_ID = s.Emp_ID,
                Emp_Name = s.Emp_Name,
                Number = s.Number,
                City = s.City,
                Country = s.Country,
                Blood_group = s.Blood_group
            }).ToList<ModelClass>();
            return Empl;
        }
        ModelClass Iclass.GetSolo(int id)
        {
            var Empl = obj.Table_17.Where(n => n.Emp_ID == id).Select(s => new ModelClass()
            {
                Emp_ID = s.Emp_ID,
                Emp_Name = s.Emp_Name,
                Number = s.Number,
                City = s.City,
                Country = s.Country,
                Blood_group = s.Blood_group
            }).FirstOrDefault();
            return Empl;
        }
        string Iclass.EditData(ModelClass mode)
        {
            var Empl = obj.Table_17.Find(mode.Emp_ID);
            if (Empl != null)
            {

                Empl.Emp_ID = mode.Emp_ID;
                Empl.Emp_Name = mode.Emp_Name;
                Empl.Number = mode.Number;
                Empl.City = mode.City;
                Empl.Country = mode.Country;
                Empl.Blood_group = mode.Blood_group;

                obj.SaveChanges();
                obj.Dispose();
                return "Inserted";
            }
            return "Not Inserted";
        }
        string Iclass.DeleteUser(int mo)
        {
            var Emplye = obj.Table_17.Where(s => s.Emp_ID == mo);
            if (Emplye != null)
            {
                obj.Table_17.Remove(Emplye.FirstOrDefault());
                obj.SaveChanges();
                obj.Dispose();
                return "Deleted";
            }
            else
            {
                return "Id is not available";
            }
        }


    }
}
