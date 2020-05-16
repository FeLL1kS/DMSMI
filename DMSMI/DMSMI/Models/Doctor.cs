using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DMSMI.Models
{
    public class Doctor
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string fullName { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Pasport { get; set; }
        
        [Column(TypeName = "nvarchar(200)")]
        public string Education { get; set; }
        
        public int Age { get; set; }
        
        [Column(TypeName = "nvarchar(100)")]
        public string Specialization { get; set; }
        
        public int Expirience { get; set; }
    }
}
