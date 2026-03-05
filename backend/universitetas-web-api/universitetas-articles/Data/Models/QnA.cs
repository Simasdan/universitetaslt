namespace universitetas_articles.Data.Models
{
    public class QnA
    {
        public int Id { get; set; }
        public string Question { get; set; }
        public string Answer { get; set; }

        public int ArticleId { get; set; }
        public Article Article { get; set; }
    }
}
