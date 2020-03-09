using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHospital.Models;

namespace WebHospital.Controllers
{
    public class AppointmentsController : Controller
    {
        private readonly List<Appointment> _allAppointments;

        public AppointmentsController()
        {
            ImitationDB imitationDB = new ImitationDB(); 
            _allAppointments = imitationDB.Appointments;
        }

        public ViewResult Index()
        {
            ViewBag.Title = "Все доктора";
            return View(_allAppointments);
        }
    }
}
