namespace DAL.Model
{
    public interface IManyToMany<TLeftLink, TRightLink>
        where TLeftLink : EntityBase
        where TRightLink : EntityBase
    {
        TLeftLink LeftLink { get; set; }

        long LeftLinkId { get; set; }

        TRightLink RightLink { get; set; }

        long RightLinkId { get; set; }
    }
}