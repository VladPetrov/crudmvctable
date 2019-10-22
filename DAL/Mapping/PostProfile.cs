using System;
using System.Collections.Generic;
using System.Text;
using AutoMapper;
using DAL.Model;
using Domain.Post;

namespace DAL.Mapping
{
    public class PostProfile : Profile
    {
        public PostProfile()
        {
            CreateMap<FirmPost, PostDisplay>()
                .ForMember(x => x.Recipient, opt => opt.MapFrom(x => x.Firm.Name));

            CreateMap<FirmPost, PostDomain>()
                .ForMember(x => x.Recipient, opt => opt.MapFrom(x => x.Firm));
        }
    }
}
