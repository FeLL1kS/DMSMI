using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebHospital.Models
{
    public class Doctor
    {
        public int Id { get; set; } // ID
        public string FullName { get; set; } // ФИО
        public int Age { get; set; } // Возраст
        public string SNILS { get; set; } // Снилс
        public string Address { get; set; } // Адрес
        public string Policy { get; set; } // Полис
        public List<Appointment> Appointments { get; set; }
    }
}
