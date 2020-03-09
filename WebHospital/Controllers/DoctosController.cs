using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHospital.Models;

namespace WebHospital.Controllers
{
    public class DoctorsController : Controller
    {
        private readonly List<Doctor> _allDoctors;

        public DoctorsController()
        {
            ImitationDB imitationDB = new ImitationDB();
            _allDoctors = imitationDB.Doctors;
        }

        public ViewResult Index()
        {
            ViewBag.Title = "Все доктора";
            return View(_allDoctors);
        }
    }
}
