namespace Domain.Authorization
{
    
    public class ApiClientDetails
    {
        public bool Active { get; set; }

        public string Name { get; set; }

        public string Secret { get; set; }

        public string ClientId { get; set; }

        public long RefreshTokenLifeTime { get; set; } //in minutes

        public ApplicationType ApplicationType { get; set; }
    }
}
