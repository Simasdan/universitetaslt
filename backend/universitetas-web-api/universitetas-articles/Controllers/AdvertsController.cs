using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using universitetas_articles.Data.Services;
using universitetas_articles.Data.ViewModels;

namespace universitetas_articles.Controllers
{
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    [ApiVersion("1.0")]
    public class AdvertsController : ControllerBase
    {
        private AdvertsService _advertsService;

        public AdvertsController(AdvertsService advertsService)
        {
            _advertsService = advertsService;
        }

        [HttpGet("get-adverts")]
        public IActionResult GetAdverts([FromQuery] string? search = null, [FromQuery] int pageNumber = 1)
        {
            var response = _advertsService.GetAdverts(search, pageNumber);
            return Ok(response);
        }

        [HttpGet("get-advert/{id}")]
        public IActionResult GetAdvertById(int id)
        {
            var response = _advertsService.GetAdvert(id);
            if (response == null)
            {
                return NotFound();
            }
            return Ok(response);
        }

        [HttpPost("add-advert")]
        public IActionResult AddAdvert([FromBody]AdvertVM advert)
        {
            _advertsService.AddAdvert(advert);
            return Ok();
        }

        [HttpDelete("delete-advert/{id}")]
        public IActionResult DeleteAdvert(int id)
        {
            _advertsService.DeleteAdvert(id);
            return Ok();
        }
    }
}
