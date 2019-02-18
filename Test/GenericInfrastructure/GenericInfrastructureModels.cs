using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Common.Attributes;
using DAL;
using DAL.Model;
using Domain;
using Domain.List;
using JetBrains.Annotations;

namespace Test.GenericInfrastructure
{
    #region Entity

    [UsedImplicitly]
    [DomainName("User Domain Name")]
    internal class User : EntityBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public virtual Adress Adress { get; set; }
        public virtual ICollection<Account> Accounts { get; set; } = new List<Account>();
    }

    [UsedImplicitly]
    [DomainName("Account Domain Name")]
    internal class Account : EntityBase
    {
        public int AccountNumber { get; set; }

        public string BankName { get; set; }

        public virtual User User { get; set; }

        [ForeignKey(nameof(User))]
        public long UserId { get; set; }
    }

    [UsedImplicitly]
    [DomainName("Adress Domain Name")]
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
    internal class UserDomain : DomainBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Street { get; set; }

        public DomainList<AccountDomain> Accounts { get; set; } = new DomainList<AccountDomain>();
    }

    [UsedImplicitly]
    internal class UserDisplay : DomainBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
    }

    // ReSharper disable once ClassWithVirtualMembersNeverInherited.Global
    internal class AccountDomain : DomainBase
    {
        public int AccountNumber { get; set; }

        public string BankName { get; set; }

        public virtual User User { get; set; }

        [ForeignKey(nameof(User))]
        public long UserId { get; set; }
    }
    #endregion
}
