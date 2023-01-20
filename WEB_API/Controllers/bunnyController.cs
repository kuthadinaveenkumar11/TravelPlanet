using Empty_WEB_API.Models;
using Empty_WEB_API.repos;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Empty_WEB_API.Controllers
{

    public class bunnyController : ApiController
    {
        public readonly Iclass loacl;
        public bunnyController(Iclass emp)
        {
            this.loacl = emp;
        }
        [Route("api/bunny/GetDetails")]
        [HttpGet]
        public IHttpActionResult GetDetails()
        {
            var em = loacl.Getdata();
            return Ok(em);
        }
        [Route("api/bunny/CreateDetails")]
        [HttpPost]
        public IHttpActionResult CreateEm(ModelClass mode)
        {
            var cre = loacl.CreateEm(mode);
            return Ok(cre);
        }
        [Route("api/bunny/GetAll/{id}")]
        [HttpGet]
        public IHttpActionResult GetAll(int id)
        {
            var em = loacl.GetAll(id);
            return Ok(em);
        }
        [Route("api/bunny/GetSolo/{id}")]
        [HttpGet]
        public IHttpActionResult GetSolo(int id)
        {
            var em = loacl.GetSolo(id);
            return Ok(em);
        }
        [Route("api/bunny/Editdetails")]
        [HttpPut]
        public IHttpActionResult EditData(ModelClass mode)
        {
            var cre = loacl.EditData(mode);
            return Ok(cre);
        }
        [Route("api/bunny/Deletedata/{mo}")]
        [HttpDelete]
        public IHttpActionResult Deletedata(int mo)
        {
            var em = loacl.DeleteUser(mo);
            return Ok(em);
        }
    }
}
