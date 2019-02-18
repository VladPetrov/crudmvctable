using System;
using AutoMapper;
using DAL.Model;
using Domain;
using Domain.Entity;
using Domain.Iban;

namespace DAL.Mapping
{
    public class EntityProfile : Profile
    {
        public EntityProfile()
        {
            CreateMap<EntityAccountFileRecordModel, Entity>()
                .ForMember(x => x.Projects, opt => opt.Ignore())
                .ForMember(x => x.Id, opt => opt.Ignore())
                .ForMember(x => x.Guid, opt => opt.Ignore())
                .ForMember(x => x.CreatedDate, opt => opt.Ignore())
                .ForMember(x => x.RowVersion, opt => opt.Ignore())
                .ForMember(x => x.Ibans, opt => opt.Ignore())
                .ForMember(x => x.IsSupplier, opt => opt.ResolveUsing(x => x.Comment.Contains("Supplier", StringComparison.OrdinalIgnoreCase)));

            CreateMap<EntityAccountFileRecordModel, Iban>()
                .ForMember(x => x.Id, opt => opt.Ignore())
                .ForMember(x => x.Guid, opt => opt.Ignore())
                .ForMember(x => x.CreatedDate, opt => opt.Ignore())
                .ForMember(x => x.RowVersion, opt => opt.Ignore())
                .ForMember(x => x.Entity, opt => opt.Ignore())
                .ForMember(x => x.EntityId, opt => opt.Ignore())
                .ForMember(x => x.IbanStr, opt => opt.MapFrom(x => x.Iban));

            CreateMap<Entity, ValueObject>();

            CreateMap<Entity, EntityDisplay>()
                .ForMember(x => x.IsSupplier, opt => opt.MapFrom(x => x.IsSupplier))
                .ForMember(x => x.Acronym, opt => opt.MapFrom(x => x.Acronym));

            CreateMap<Entity, EntityDomain>();

            CreateMap<EntityDomain, Entity>()
                .ForMember(x => x.Projects, opt => opt.Ignore())
                .ForMember(x => x.Ibans, opt => opt.Ignore());

            CreateMap<Iban, ValueObject>()
                .ForMember(x => x.Name, opt => opt.MapFrom(x => x.IbanStr));

            CreateMap<Iban, IbanDisplay>()
                .ForMember(x => x.MusterEntityFk, opt => opt.MapFrom(x => x.EntityId));

            CreateMap<Iban, IbanDomain>()
                .ForMember(x => x.MusterEntityFk, opt => opt.MapFrom(x => x.EntityId));

            CreateMap<IbanDomain, Iban>()
                .ForMember(x => x.Entity, opt => opt.Ignore())
                .ForMember(x => x.EntityId, opt => opt.MapFrom(x => x.MusterEntityFk));

        }
    }
}
