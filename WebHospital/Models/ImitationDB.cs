using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebHospital.Models
{
    public class ImitationDB
    {
        public static ImitationDB S = new ImitationDB(); 
        public List<Client> Clients { get; }
        public List<Doctor> Doctors { get; }
        public List<Appointment> Appointments { get; }

        public ImitationDB()
        {
            Clients = new List<Client>
            {
                new Client { Id = 1, Address = "Светлая", Age = 16, FullName = "ВОВ", Policy = "1111", Sex = "Male", SNILS = "4" },
                new Client { Id = 2, Address = "Светла1я", Age = 11, FullName = "ВОВ", Policy = "11111", Sex = "Female", SNILS = "42" }
            };

            Doctors = new List<Doctor>
            {
                new Doctor { Id = 1, Address = "Тёмная", Age = 28, FullName = "ФАФ", Policy = "2222", SNILS = "43" },
                new Doctor { Id = 2, Address = "Тёмная", Age = 30, FullName = "ФАФ", Policy = "22222", SNILS = "44" }
            };

            Appointments = new List<Appointment>
            {
                new Appointment { Date = new DateTime(2020, 03, 09) },
                new Appointment { Date = new DateTime(2020, 03, 10) },
                new Appointment { Date = new DateTime(2020, 03, 11) }
            };
        }
    }
}