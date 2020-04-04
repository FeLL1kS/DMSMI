using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebHospital.Models
{
    public class Client
    {
        public int Id { get; set; } // ID
        public string FullName { get; set; } // ФИО
        public int Age { get; set; } // Возраст
        public string Sex { get; set; } // Пол
        public string SNILS { get; set; } // Снилс
        public string Address { get; set; } // Адрес
        public string Policy { get; set; } // Полис
        public bool IsDeleted { get; set; } // "Удаление"

        public List<Appointment> Appointments { get; set; }
    }
}
