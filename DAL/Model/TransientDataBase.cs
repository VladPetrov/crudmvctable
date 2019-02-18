using Microsoft.EntityFrameworkCore;

namespace DAL.Model
{
    public class TransientDataBase : DataBase
    {
        public TransientDataBase(DbContextOptions<DataBase> options) : base(options)
        {
        }
    }
}
