using BournemouthBindicator.Models;
using Microsoft.Extensions.Configuration;
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

        public BinLookupServiceAgent(IConfiguration configuration)
        {
            _lookupClient = new RestClient($"https://{configuration["BCPCouncilUrl"]}"); 
        }

        public Task<BinLookupDto> Lookup(string uprn)
        {
            var request = new RestRequest(Method.GET);
            request.Resource = "customer/llpg/bindaylookup";
            request.AddParameter("uprn", uprn);


            return _lookupClient.GetAsync<BinLookupDto>(request);
        }
    }
}
