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
        private readonly IConfiguration Configuration;

        public BindicatorController(ILogger<BindicatorController> logger, IBinLookupServiceAgent binLookupServiceAgent, IConfiguration configuration)
        {
            _logger = logger;
            _binLookupServiceAgent = binLookupServiceAgent;
            Configuration = configuration;
        }

        [HttpGet]
        [ProducesResponseType(typeof(BinLookup), StatusCodes.Status200OK)]
        public async Task<IActionResult> Get()
        {
            var result = _binLookupServiceAgent.Lookup(Configuration["lookup:uprn"]);

            return Ok(new BinLookup(await result));
        }
    }
}
