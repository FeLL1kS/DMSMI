using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace DMSMI.Models
{
    public class Client
    {
        [Key]
        public int Id { get; set; }
        
        [Column(TypeName = "nvarchar(100)")]
        public string FullName { get; set; }
        
        public int Age { get; set; }
        
        [Column(TypeName = "nvarchar(10)")]
        public string Sex { get; set; }
        
        [Column(TypeName = "nvarchar(30)")]
        public string SNILS { get; set; }
        
        [Column(TypeName = "nvarchar(30)")]
        public string Police { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Address { get; set; }

    }
}
