using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using BournemouthBindicator.Models;
using BournemouthBindicator.ServiceAgents;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;

namespace BournemouthBindicator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BindicatorController : ControllerBase
    {

        private readonly ILogger<BindicatorController> _logger;
        private readonly IBinLookupServiceAgent _binLookupServiceAgent;
        private readonly Microsoft.Extensions.Options.IOptions<Lookup> _lookup;

        public BindicatorController(ILogger<BindicatorController> logger, IBinLookupServiceAgent binLookupServiceAgent, IConfiguration configuration, Microsoft.Extensions.Options.IOptions<Lookup> lookup)
        {
            _logger = logger;
            _binLookupServiceAgent = binLookupServiceAgent;
            _lookup = lookup;
        }

        [HttpGet]
        [ProducesResponseType(typeof(BinLookup), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get()
        {
            var result = _binLookupServiceAgent.Lookup(_lookup.Value.Uprn);
            return Ok(new BinLookup(await result));
        }
    }
}
