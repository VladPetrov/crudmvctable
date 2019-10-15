﻿using AutoMapper;


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
            configuration.AddProfile<MessageProfile>();
            configuration.AddProfile<TransactionProfile>();
            configuration.AddProfile<ProjectProfile>();
            configuration.AddProfile<CategoryProfile>();
            configuration.AddProfile<FileProfile>();
            configuration.AddProfile<EntityProfile>();
            configuration.AddProfile<FileUploadLogErrorProfile>();
            configuration.AddProfile<ManyToManyRelationProfile>();
            configuration.AddProfile<CountyProfile>();
            configuration.AddProfile<ClientProfile>();
        }
    }
}