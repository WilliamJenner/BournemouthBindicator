using BournemouthBindicator.Models;
using RestSharp;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BournemouthBindicator.ServiceAgents
{
    public class BinLookupServiceAgent : IBinLookupServiceAgent
    {
        private readonly IRestClient _lookupClient;
        
        public BinLookupServiceAgent()
        {
           //TODO : Move all of this to consts or config
            _lookupClient = new RestClient("https://online.bcpcouncil.gov.uk/"); 
        }

        public Task<BinLookup> Lookup(string uprn)
        {
            var request = new RestRequest(Method.GET);
            request.Resource = "customer/llpg/bindaylookup";
            request.AddParameter("uprn", uprn);


            return _lookupClient.GetAsync<BinLookup>(request);
        }
    }
}
