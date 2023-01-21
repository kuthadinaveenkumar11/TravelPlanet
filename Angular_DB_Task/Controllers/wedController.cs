using Angular_DB_Task.Models;
using Angular_DB_Task.repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;

namespace Angular_DB_Task.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]

    public class wedController : ApiController
    {
        public readonly InterfaceWed loacl;
        public wedController(InterfaceWed emp)
        {
            this.loacl = emp;
        }
        [Route("api/wed/GetDetails")]
        [HttpGet]
        public IHttpActionResult GetDetails()
        {
            var em = loacl.getData();
            return Ok(em);
        }
        [Route("api/wed/CreateDetails")]
        [HttpPost]
        public IHttpActionResult CreateEm(WednesdayModel mode)
        {
            var cre = loacl.CreateEm(mode);
            return Ok(cre);
        }

        
        [Route("api/wed/Editdetails")]
        [HttpPut]
        public IHttpActionResult EditData(WednesdayModel mode)
        {
            var cre = loacl.EditData(mode);
            return Ok(cre);
        }
        [Route("api/wed/Deletedata/{mo}")]
        [HttpDelete]
        public IHttpActionResult Deletedata(int mo)
        {
            var em = loacl.DeleteUser(mo);
            return Ok(em);
        }
    }
}
