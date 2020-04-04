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
        public async Task<IActionResult> Details(int? id)
        {
            if(id != null)
            {
                Doctor doctor = await db.Doctors.FirstOrDefaultAsync(p => p.Id == id);
                if (doctor != null)
                    return View(doctor);
            }
            return NotFound();
        }

        public async Task<IActionResult> Edit(int? id)
        {
            if (id != null)
            {
                Doctor doctor = await db.Doctors.FirstOrDefaultAsync(p => p.Id == id);
                if (doctor != null)
                    return View(doctor);
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> Edit(Doctor doctor)
        {
            db.Doctors.Update(doctor);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        [HttpGet]
        [ActionName("Delete")]
        public async Task<IActionResult> ConfirmDelete(int? id)
        {
            if (id != null)
            {
                Doctor doctor = await db.Doctors.FirstOrDefaultAsync(p => p.Id == id);
                if (doctor != null)
                    return View(doctor);
            }
            return NotFound();
        }

        [HttpPost]
        public async Task<IActionResult> Delete(int? id)
        {
            if (id != null)
            {
                Doctor doctor = await db.Doctors.FirstOrDefaultAsync(p => p.Id == id);
                if (doctor != null)
                {
                    db.Doctors.Remove(doctor);
                    await db.SaveChangesAsync();
                    return RedirectToAction("Index");
                }
            }
            return NotFound();
        }
    }
}
