using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebHospital.Models
{
    public class Appointment
    {
        public List<Client> Clients { get; set; }
        public List<Doctor> Doctors { get; set; }
        public string Date { get; set; }
    }
}
