namespace Domain.Post
{
    public class AddressBuilder
    {
        public string PostalCode { get; }
        public string StreetAndNumber { get; }
        public string City { get; }
        public string Country { get; }
        public string ClientName { get; }

        public AddressBuilder(string clientName, string country, string city, string streetAndNumber, string postalCode)
        {
            ClientName = clientName;
            Country = country;
            City = city;
            StreetAndNumber = streetAndNumber;
            PostalCode = postalCode;
        }

        public string GetAddress()
        {
            if (IsOrEmpty(ClientName) || IsOrEmpty(Country) || IsOrEmpty(City) || IsOrEmpty(StreetAndNumber) || IsOrEmpty(PostalCode))
            {
                return null;
            }
            
            return $"{ClientName}, {Country}, {City}, {StreetAndNumber}, {PostalCode}";
        }

        private bool IsOrEmpty(string str)
        {
            return string.IsNullOrEmpty(str?.Trim());
        }
    }
}
