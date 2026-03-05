using universitetas_articles.Data.Models;
using universitetas_articles.Data.Paging;
using universitetas_articles.Data.ViewModels;

namespace universitetas_articles.Data.Services
{
    public class AdvertsService
    {
        private AppDbContext _context;

        public AdvertsService(AppDbContext context)
        {
            _context = context;
        }

        public PaginatedResponse<AdvertVM> GetAdverts(string? searchString = null, int? pageNumber = null)
        {
            var adverts = _context.Adverts
                .Select(a => new AdvertVM()
                {
                    Id = a.Id,
                    JobTitle = a.JobTitle,
                    JobDescription = a.JobDescription,
                    PositionName = a.PositionName,
                    PositionDescription = a.PositionDescription,
                    Email = a.Email,
                    PhoneNumber = a.PhoneNumber,
                    City = a.City

                })
                .ToList();

            if (!string.IsNullOrEmpty(searchString))
            {
                adverts = adverts
                    .Where(a =>
                        a.JobTitle.Contains(searchString, StringComparison.OrdinalIgnoreCase) ||
                        a.PositionName.Contains(searchString, StringComparison.OrdinalIgnoreCase) ||
                        a.City.Contains(searchString, StringComparison.OrdinalIgnoreCase))
                    .ToList();
            }

            // Paging
            int pageSize = 5;
            var paginatedList = PaginatedList<AdvertVM>.Create(adverts.AsQueryable(), pageNumber ?? 1, pageSize);

            return new PaginatedResponse<AdvertVM>
            {
                Items = paginatedList,
                HasNextPage = paginatedList.HasNextPage
            };
        }

        public AdvertVM? GetAdvert(int id)
        {
            var foundAdvert = _context.Adverts
                .Where(a => a.Id == id)
                .Select(a => new AdvertVM()
                {
                    Id= a.Id,
                    JobTitle = a.JobTitle,
                    JobDescription = a.JobDescription,
                    PositionName = a.PositionName,
                    PositionDescription = a.PositionDescription,
                    Email = a.Email,
                    PhoneNumber = a.PhoneNumber,
                    City = a.City
                }).FirstOrDefault();

            return foundAdvert;
        }

        public void AddAdvert(AdvertVM advert)
        {
            var newAdvert = new Advert()
            {
                JobTitle = advert.JobTitle,
                JobDescription = advert.JobDescription,
                PositionName = advert.PositionName,
                PositionDescription = advert.PositionDescription,
                Email = advert.Email,
                PhoneNumber = advert.PhoneNumber,
                City = advert.City
            };
            _context.Adverts.Add(newAdvert);
            _context.SaveChanges();
        }

        public void DeleteAdvert(int id)
        {
            var advert = _context.Adverts.FirstOrDefault(a => a.Id == id);
            if (advert !=null)
            {
                _context.Adverts.Remove(advert);
                _context.SaveChanges();
            }
        }
    }
}
