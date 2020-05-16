using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DMSMI.Models
{
    public class Appointments
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("ClientId")]
        public int ClientId { get; set; }
        public Client Client { get; set; }

        [ForeignKey("DoctorId")]
        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
    }
}
