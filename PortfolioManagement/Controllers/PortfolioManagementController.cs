using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace PortfolioManagement.Controllers
{
    public class PortfolioManagementController : Controller
    {
        // GET: PortfolioManagement
        public ActionResult Index()
        {
            return View();
        }
    }
}