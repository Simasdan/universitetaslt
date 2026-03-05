using Asp.Versioning;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using universitetas_articles.Data.Services;

namespace universitetas_articles.Controllers
{
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    [ApiVersion("1.0")]
    public class ArticlesController : ControllerBase
    {
        private ArticlesService _articlesService;

        public ArticlesController(ArticlesService articlesService)
        {
            _articlesService = articlesService;
        }

        [HttpGet("get-articles")]
        public IActionResult GetArticles([FromQuery] string? search = null, [FromQuery] int pageNumber = 1)
        {
            var response = _articlesService.GetArticles(search, pageNumber);
            return Ok(response);
        }

        [HttpGet("get-article/{id}")]
        public IActionResult GetArticleById(int id) 
        { 
            var response = _articlesService.GetArticle(id);
            if (response == null)
            {
                return NotFound();
            }
            return Ok(response);
        }
    }
}
