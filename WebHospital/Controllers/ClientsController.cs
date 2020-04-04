using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebHospital.Models;
using Microsoft.EntityFrameworkCore;

namespace WebHospital.Controllers
{
    public class ClientsController : Controller
    {
        private AppDBContext db;
        //private readonly List<Client> _allClients;

        public ClientsController(AppDBContext context)
        {
            //_allClients = ImitationDB.S.Clients;
            db = context;
        }

        public async Task<IActionResult> Index()
        {
            ViewBag.Title = "Все клиенты";
            return View(await db.Clients.ToListAsync());
        }
        
        [HttpGet]
        public IActionResult Create()
        {
            return View();
        }
        [HttpPost]
        public async Task<IActionResult> Create(Client client)
        {
            db.Clients.Add(client);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        [HttpGet]
        [ActionName("Delete")]
        public async Task<IActionResult> ConfirmDelete(int? id)
        {
            if(id != null)
            {
                Client client = await db.Clients.FirstOrDefaultAsync(p => p.Id == id);
                if(client != null)
                {
                    return View(client);
                }
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> Delete(int? id)
        {
            if(id != null)
            {
                Client client = await db.Clients.FirstOrDefaultAsync(p => p.Id == id);
                if(client != null)
                {
                    db.Clients.Remove(client);
                    await db.SaveChangesAsync();
                    return RedirectToAction("Index");
                }
            }
            return NotFound();
        }

        [HttpGet]
        public async Task<IActionResult> Edit(int? id)
        {
            if (id != null)
            {
                Client client = await db.Clients.FirstOrDefaultAsync(p => p.Id == id);
                if (client != null)
                {
                    return View(client);
                }
            }
            return NotFound();
        }
        [HttpPost]
        public async Task<IActionResult> Edit(Client client)
        {
            db.Clients.Update(client);
            await db.SaveChangesAsync();
            return RedirectToAction("Index");
        }

        //public ViewResult Registration()
        //{
        //    return View();
        //}
    }
}
