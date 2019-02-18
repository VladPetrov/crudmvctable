using AutoMapper;
using DAL.Model;
using Domain.Message;

namespace DAL.Mapping
{
    public class MessageProfile : Profile
    {
        public MessageProfile()
        {
            CreateMap<Message, MessageDetails>();
            CreateMap<Message, MessageDisplay>();

            CreateMap<MessageDetails, Message>()
                .ForMember(x => x.SubMessages, opt => opt.Ignore());

            CreateMap<SubMessage, SubMessageDetails>()
                .ForMember(x => x.MusterEntityFk, opt => opt.MapFrom(x => x.MessageId));

            CreateMap<SubMessage, SubMessageDisplay>()
                .ForMember(x => x.MusterEntityFk, opt => opt.MapFrom(x => x.Message.Id));

            CreateMap<SubMessageDetails, SubMessage>()
                .ForMember(x => x.Message, opt => opt.Ignore())
                .ForMember(x => x.MessageId, opt => opt.MapFrom(x => x.MusterEntityFk));
        }
    }
}
