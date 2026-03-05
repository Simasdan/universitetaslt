using Microsoft.EntityFrameworkCore;
using universitetas_articles.Data.Models;
using universitetas_articles.Data.Paging;
using universitetas_articles.Data.ViewModels;

namespace universitetas_articles.Data.Services
{
    public class ArticlesService
    {
        private AppDbContext _context;

        public ArticlesService(AppDbContext context)
        {
            _context = context;
        }

        public PaginatedResponse<ArticleVM> GetArticles(string? searchString = null, int? pageNumber = null)
        {
            var articles = _context.Articles
                .Include(a => a.QnAs)
                .Select(a => new ArticleVM()
                {
                    Id = a.Id,
                    Title = a.Title,
                    Description = a.Description,
                    Content = a.Content,
                    ButtonText = a.ButtonText,
                    ButtonType = a.ButtonType,
                    ImageUrl = a.ImageUrl,
                    IconButtonType = a.IconButtonType,
                    QnAs = a.QnAs.Select(q => new QnAVM()
                        {
                            Question = q.Question,
                            Answer = q.Answer
                        }).ToList()
                })
                .ToList();

            if (!string.IsNullOrEmpty(searchString))
            {
                articles = articles
                    .Where(a => 
                        a.Title.Contains(searchString, StringComparison.OrdinalIgnoreCase) ||
                        a.Description.Contains(searchString, StringComparison.OrdinalIgnoreCase))
                    .ToList();
            }

            // Paging
            int pageSize = 5;
            var paginatedList = PaginatedList<ArticleVM>.Create(articles.AsQueryable(), pageNumber ?? 1, pageSize);

            return new PaginatedResponse<ArticleVM>
            {
                Items = paginatedList,
                HasNextPage = paginatedList.HasNextPage
            };
        }
        public ArticleVM? GetArticle(int id)
        {
            return _context.Articles.Include(a => a.QnAs).Where(a => a.Id == id).Select(a => new ArticleVM()
            {
                Id = a.Id,
                Title = a.Title,
                Description = a.Description,
                Content = a.Content,
                ButtonText = a.ButtonText,
                ButtonType = a.ButtonType,
                ImageUrl = a.ImageUrl,
                IconButtonType = a.IconButtonType,
                QnAs = a.QnAs.Select(q => new QnAVM()
                {
                    Question = q.Question,
                    Answer = q.Answer
                }).ToList()
            }).FirstOrDefault();
        }
    }
}
