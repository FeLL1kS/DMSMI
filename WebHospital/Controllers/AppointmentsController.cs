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
            _allAppointments = ImitationDB.S.Appointments;
        }

        public ViewResult Index()
        {
            ViewBag.Title = "Записи";
            return View(_allAppointments);
        }
    }
}
