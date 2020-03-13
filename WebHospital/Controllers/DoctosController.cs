using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHospital.Models;
using Microsoft.EntityFrameworkCore;

namespace WebHospital.Controllers
{
    public class DoctorsController : Controller
    {
        //private readonly List<Doctor> _allDoctors;
        private AppDBContext db;

        public DoctorsController(AppDBContext context)
        {
            db = context;
            //_allDoctors = ImitationDB.S.Doctors;
        }

        public async Task<IActionResult> Index()
        {
            ViewBag.Title = "Все доктора";
            return View(await db.Doctors.ToListAsync());
        }
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Create(Doctor doctor)
        {
            db.Doctors.Add(doctor);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }
    }
}
