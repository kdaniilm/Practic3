using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Practic3Back.Controllers
{
    [Route("[controller]")]
    [ApiController]
    [EnableCors("CorsPolicy")]
    public class WeatherForecastProdController : ControllerBase
    {
        private readonly ILogger<WeatherForecastProdController> _logger;

        public WeatherForecastProdController(ILogger<WeatherForecastProdController> logger)
        {
            _logger = logger;
        }
        [HttpGet]
        public JsonResult Get()
        {
            var responseString = "Welcome to production!!!";
            return new JsonResult(responseString);
        }
    }
}
