using BournemouthBindicator.Models;
using Microsoft.Extensions.Options;
using RestSharp;
using System.Threading.Tasks;

namespace BournemouthBindicator.ServiceAgents
{
    public class BinLookupServiceAgent : IBinLookupServiceAgent
    {
        private readonly IRestClient _lookupClient;

        public BinLookupServiceAgent(IOptions<AppSettings> appSettings)
        {
            _lookupClient = new RestClient(appSettings.Value.BCPCouncilUrl);
        }

        public Task<BinLookupDto> Lookup(string uprn)
        {
            var request = new RestRequest(Method.GET)
                .AddParameter(nameof(uprn), uprn);
            return _lookupClient.GetAsync<BinLookupDto>(request);
        }
    }
}
