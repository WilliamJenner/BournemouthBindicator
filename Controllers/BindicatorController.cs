using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace BournemouthBindicator.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BindicatorController : ControllerBase
    {

        private readonly ILogger<BindicatorController> _logger;

        public BindicatorController(ILogger<BindicatorController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [ProducesResponseType(typeof(bool), StatusCodes.Status200OK)]
        public IActionResult Get()
        {
            return Ok(true);
        }
    }
}
