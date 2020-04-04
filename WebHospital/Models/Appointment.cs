using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebHospital.Models
{
    public class Appointment
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }

        public int? ClientId { get; set; }
        public Client Client { get; set; }
        public int? DoctorId { get; set; }
        public Doctor Doctor { get; set; }
    }
}
