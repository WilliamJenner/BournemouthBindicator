using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BournemouthBindicator.Models
{
    public class Bin
    {
        public DateTime Previous { get; set; }
        public DateTime Next { get; set; }
        public string PdfLink { get; set; }
        public bool Communal { get; set; }
    }
}
