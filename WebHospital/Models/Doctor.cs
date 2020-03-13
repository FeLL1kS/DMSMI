using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebHospital.Models
{
    public class Doctor
    {
        [Key]
        public int DoctorId { get; set; } // ID
        public string FullName { get; set; } // ФИО
        public int Age { get; set; } // Возраст
        public string SNILS { get; set; } // Снилс
        public string Address { get; set; } // Адрес
        public string Policy { get; set; } // Полис
        public Appointment Appointment { get; set; }
    }
}
