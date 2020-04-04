using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHospital.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc.Rendering;

namespace WebHospital.Controllers
{
    public class AppointmentsController : Controller
    {
        // private readonly List<Appointment> _allAppointments;
        private AppDBContext db;

        public AppointmentsController(AppDBContext context)
        {
            // _allAppointments = ImitationDB.S.Appointments;
            db = context;
        }

        public async Task<IActionResult> Index()
        {
            ViewBag.Title = "Записи";
            // ViewBag.Model = 
            var appointments = await db.Appointments
                                .Include(p => p.Client)
                                .Include(p => p.Doctor)
                                .ToListAsync();
            return View(appointments);
        }

        [HttpGet]
        public IActionResult Create()
        {
            SelectList clients = new SelectList(db.Clients, "Id", "FullName");
            SelectList doctors = new SelectList(db.Doctors, "Id", "FullName");
            ViewBag.Clients = clients;
            ViewBag.Doctors = doctors;
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Create(Appointment appointment)
        {
            db.Appointments.Add(appointment);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        [HttpGet]
        [ActionName("Delete")]
        public async Task<IActionResult> ConfirmDelete(int? id)
        {

            if (id != null)
            {
                Appointment appointment = await db.Appointments
                                                .Include(p => p.Client)
                                                .Include(p => p.Doctor)
                                                .FirstOrDefaultAsync(p => p.Id == id);
                if (appointment != null)
                {
                    return (View(appointment));
                }
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id != null)
            {
                Appointment appointment = await db.Appointments.FirstOrDefaultAsync(p => p.Id == id);
                if (appointment != null)
                {
                    db.Appointments.Remove(appointment);
                    await db.SaveChangesAsync();
                    return (RedirectToAction("Index"));
                }
            }
            return NotFound();
        }
    }
}
