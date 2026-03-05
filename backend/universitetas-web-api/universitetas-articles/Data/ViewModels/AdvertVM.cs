namespace universitetas_articles.Data.ViewModels
{
    public class AdvertVM
    {
        public int Id { get; set; }
        public string JobTitle { get; set; } = string.Empty;
        public string JobDescription { get; set; } = string.Empty;
        public string PositionName { get; set; } = string.Empty;
        public string PositionDescription { get; set; } = string.Empty;
        public string Email { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public string City { get; set; } = string.Empty;
    }
}
