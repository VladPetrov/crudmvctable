
namespace Domain.FileParser
{
    public abstract class FileRecordBase
    {
        [SkipColumn]
        public int RowId { get; set; }
    }
}
