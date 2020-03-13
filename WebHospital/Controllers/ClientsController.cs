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
        public IActionResult Create()
        {
            return View();
        }
        public ViewResult Registration()
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
    }
}
