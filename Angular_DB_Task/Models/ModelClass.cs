using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Angular_DB_Task.Models
{
    public class ModelClass
    {
        public int Emp_ID { get; set; }
        public string Emp_Name { get; set; }
        public Nullable<decimal> Number { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string Blood_group { get; set; }
    }
    public class WednesdayModel
    {
        public int Snum { get; set; }
        public string Hotel { get; set; }
        public Nullable<System.DateTime> Arrival { get; set; }
        public Nullable<System.DateTime> Depature { get; set; }
        public string Types { get; set; }
        public Nullable<int> Guest { get; set; }
        public Nullable<decimal> Price { get; set; }
    }
}