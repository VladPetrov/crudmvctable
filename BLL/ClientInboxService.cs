using AutoMapper.QueryableExtensions;
using BLL.Infrastructure;
using Common;
using DAL.Model;
using Domain;
using Domain.Client;
using Domain.Inbox;
using Domain.Post;
using System.Collections.Generic;
using System.Linq;

namespace BLL
{
    public class ClientInboxService : IClientInboxService //todo it is repository
    {
        private DataBase Context { get; }

        public ClientInboxService(DataBase context)
        {
            Context = context;
        }
        
        public FirmsInfo GetFirms(string userId)
        {
            Defensive.AssertTrue(Context.Users.Where(x => x.Id == userId).Select(x => x.UserType).Single() == UserType.Client);

            return new FirmsInfo
            {
                DefaultFirm = Context.ClientFirms
                    .Where(x => x.Profile.Id == userId && x.FirmType == FirmType.Default)
                    .ProjectTo<ValueObjectStrKey>()
                    .Single(),

                AdditionalFirms = Context.ClientFirms
                    .Where(x => x.Profile.Id == userId && x.FirmType == FirmType.Additional)
                    .OrderBy(x => x.Name)
                    .ProjectTo<ValueObjectStrKey>()
                    .ToList()
            };
        }

        public List<LetterInfo> GetPost(string firmId, string userId)
        {
            return Context.FirmPost
                .Where(x => x.Firm.ProfileId == userId && x.FirmId == firmId)
                .Where(x => x.Status == LetterStatus.New)
                .OrderByDescending(x => x.DeliveredDate)
                .ProjectTo<PostDto>()
                .ToList()
                .Select(MapToLetterInfo)
                .ToList();
        }

        public List<LetterInfo> GetForwarded(string userId)
        {
            return Context.FirmPost
                .Where(x => x.Firm.ProfileId == userId)
                .Where(x => x.Status != LetterStatus.New)
                .OrderByDescending(x => x.DeliveredDate)
                .ProjectTo<PostDto>()
                .ToList()
                .Select(MapToLetterInfo)
                .ToList();
        }

        private static LetterInfo MapToLetterInfo(PostDto dto)
        {
            return new LetterInfo
            {
                DeliveredDate = dto.DeliveredDate,
                Type = dto.Type,
                Note = dto.Note,
                Sender = dto.Sender,
                Recipient = new AddressBuilder(dto.ClientName, dto.Country, dto.City, dto.StreetAndNumber, dto.PostalCode)
                    .GetAddress()
            };
        }
    }
}
