﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebHospital.Models
{
    public class ImitationDB
    {
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
                new Appointment { Date = "09.03.2020" },
                new Appointment { Date = "10.03.2020" },
                new Appointment { Date = "11.03.2020" }
            };
        }
    }
}