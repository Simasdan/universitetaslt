using Microsoft.EntityFrameworkCore;
using universitetas_articles.Data.Models;

namespace universitetas_articles
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
            
        }

        public DbSet<Article> Articles { get; set; }
        public DbSet<QnA> QnAs { get; set; }
        public DbSet<Advert> Adverts { get; set; }
    }
}
