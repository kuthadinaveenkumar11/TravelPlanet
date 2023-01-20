using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Empty_WEB_API.Models
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
}