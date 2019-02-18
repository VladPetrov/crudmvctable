namespace Configuration.Mapping
{
    public static class MappingConfig
    {
        public static void RegisterMappings()
        {
            DAL.Mapping.Mapping.Init();
        }
    }
}