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
    public class BinController : ControllerBase
    {

        private readonly ILogger<BinController> _logger;

        public BinController(ILogger<BinController> logger)
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
