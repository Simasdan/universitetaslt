using universitetas_articles.Data.Models;

namespace universitetas_articles.Data.ViewModels
{
    public class ArticleVM
    {
        public int Id { get; set; }
        public string Title { get; set; } = string.Empty;
        public string Description { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public List<QnAVM> QnAs { get; set; }
        public string ButtonText { get; set; } = string.Empty;
        public string ButtonType { get; set; } = string.Empty;
        public string IconButtonType { get; set; } = string.Empty;
        public string ImageUrl { get; set; } = string.Empty;
    }
}
