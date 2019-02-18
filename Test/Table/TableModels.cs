using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using DAL.Model;
using Domain;
using JetBrains.Annotations;

namespace Test.Table
{
    #region Entitity

    [UsedImplicitly]
    internal class User : EntityBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public bool IsAdmin { get; set; }
        public virtual Adress Adress { get; set; }
        public virtual List<Account> Accounts { get; set; }
    }

    [UsedImplicitly]
    internal class Account : EntityBase
    {
        public int AccountNumber { get; set; }

        public string BankName { get; set; }

        public virtual User User { get; set; }

        [ForeignKey(nameof(User))]
        public long UserId { get; set; }
    }

    [UsedImplicitly]
    internal class Adress : EntityBase
    {
        [Key, ForeignKey(nameof(User))]
        public new long Id { get; set; }

        public string Street { get; set; }

        public virtual User User { get; set; }
    }

    #endregion

    #region Display
    [UsedImplicitly]
    internal class UserDisplay : DomainBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Street { get; set; }
        public bool IsAdmin { get; set; }
    }
    #endregion
}
