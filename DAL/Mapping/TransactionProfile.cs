using System.Linq;
using AutoMapper;
using Common.Extensions;
using DAL.Model;
using Domain;
using Domain.Transaction;
using Domain.Transaction.CsvImport;

namespace DAL.Mapping
{
    class TransactionProfile : Profile
    {
        public TransactionProfile()
        {
            CreateMap<Transaction, TransactionDisplay>()
                .ForMember(x => x.Category, opt => opt.MapFrom(x => x.Category.Name))
                .ForMember(x => x.Project, opt => opt.MapFrom(x => x.Project.Name))
                .ForMember(x => x.Entity, opt => opt.MapFrom(x => x.Entity.Name))
                .ForMember(x => x.RecipientEntity, opt => opt.MapFrom(x => x.RecipientEntity.Name))
                .ForMember(x => x.Files, opt => opt.MapFrom(x => x.Files.Select(y => new ValueObject
                {
                    Id = y.File.Id,
                    Name = y.File.FileName
                })))
                .ForMember(x => x.HasFiles, opt => opt.MapFrom(x => x.Files.Any()));

            CreateMap<Transaction, TransactionDomain>();

            CreateMap<TransactionDomain, Transaction>()
                .ForMember(x => x.Category, opt => opt.Ignore())
                .ForMember(x => x.CategoryId, opt => opt.MapFrom(x => x.Category.Id))
                .ForMember(x => x.Project, opt => opt.Ignore())
                .ForMember(x => x.ProjectId, opt => opt.MapFrom(x => x.Project.Id))
                .ForMember(x => x.Files, opt => opt.Ignore())
                .ForMember(x => x.Entity, opt => opt.Ignore())
                .ForMember(x => x.EntityId, opt => opt.MapFrom(x => x.Entity.Id))
                .ForMember(x => x.RecipientEntity, opt => opt.Ignore())
                .ForMember(x => x.RecipientEntityId, opt => opt.MapFrom(x => x.RecipientEntity.Id))
                .ForMember(x => x.Type, opt => opt.MapFrom(x => x.Type));

            CreateMap<TransactionTag, TransactionTagDetails>()
                .ForMember(x => x.MusterEntityFk, opt => opt.MapFrom(x => x.TransactionId));

            CreateMap<TransactionTagDetails, TransactionTag>()
                .ForMember(x => x.TransactionId, opt => opt.MapFrom(x => x.MusterEntityFk));

            CreateMap<Transaction, ValueObject>()
                .ForMember(x => x.Name, opt => opt.Ignore());

            CreateMap<TransactionFileRecordModel, TransactionDomain>()
                .ForMember(x => x.Category, opt => opt.Ignore())
                .ForMember(x => x.Project, opt => opt.Ignore())
                .ForMember(x => x.Files, opt => opt.Ignore())
                .ForMember(x => x.Entity, opt => opt.Ignore())
                .ForMember(x => x.RecipientEntity, opt => opt.Ignore())
                .ForMember(x => x.Id, opt => opt.Ignore())
                .ForMember(x => x.CreatedDate, opt => opt.Ignore())
                .ForMember(x => x.Guid, opt => opt.Ignore())
                .ForMember(x => x.RowVersion, opt => opt.Ignore())
                .ForMember(x => x.Type, opt => opt.ResolveUsing(x => x.Type.ParseToEnum<TransactionType>())) //todo parse on csv parser level
                .ForMember(x => x.Source, opt => opt.ResolveUsing(x => TransactionSource.ImportFromCsv))
                .ForMember(x => x.Iban, opt => opt.MapFrom(x => x.ToAccount));

            CreateMap<TransactionDisplay, TransactionsExportToCsvModel>()
                .ForMember(x => x.Source, opt => opt.ResolveUsing(x => x.Source.ToString()))
                .ForMember(x => x.Files, opt => opt.ResolveUsing(x => string.Join("| ", x.Files.Select(y => y.Name))))
                .ForMember(x => x.CreatedTime, opt => opt.ResolveUsing(x => x.CreatedTime.ToString("dd/MM/yyyy")))
                .ForMember(x => x.Type, opt => opt.ResolveUsing(x => x.Type.ToString()))
                .ForMember(x => x.HasFiles, opt => opt.ResolveUsing(x => x.HasFiles.ToString()));
        }
    }
}