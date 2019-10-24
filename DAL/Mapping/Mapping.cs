using AutoMapper;


namespace DAL.Mapping
{
    public static class Mapping
    {
        public static void Init()
        {
            Mapper.Initialize(AddProfiles);

            Mapper.Configuration.CompileMappings();
        }

        public static void AddProfiles(IMapperConfigurationExpression configuration)
        {
            configuration.AddProfile<FileProfile>();
            configuration.AddProfile<ManyToManyRelationProfile>();
            configuration.AddProfile<CountyProfile>();
            configuration.AddProfile<ClientProfile>();
            configuration.AddProfile<ProfileSettingsProfile>();
            configuration.AddProfile<PostProfile>();
        }
    }
}