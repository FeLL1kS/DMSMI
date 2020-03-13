using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebHospital.Models
{
    public class Appointment
    {
        public int AppointmentId { get; set; }
        public int ClientId { get; set; }
        public int DoctorId { get; set; }
        public string Date { get; set; }
        public Client Client { get; set; }
        public Doctor Doctor { get; set; }
    }
}
