using BournemouthBindicator.Models;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BournemouthBindicator.ServiceAgents
{
    public interface IBinLookupServiceAgent
    {
        Task<BinLookup> Lookup(string uprn);
    }
}
