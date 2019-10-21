using Common.Attributes;
using DAL.Model;
using Domain;
using JetBrains.Annotations;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Test.GenericInfrastructure
{
    #region Entity

    [UsedImplicitly]
    [Display(Name = "User Domain Name")]
    internal class User : EntityBase
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public virtual Adress Adress { get; set; }
        public virtual ICollection<Account> Accounts { get; set; } = new List<Account>();
    }

    [UsedImplicitly]
    [Display(Name = "Account Domain Name")]
    internal class Account : EntityBase
    {
        public int AccountNumber { get; set; }

        public string BankName { get; set; }

        public virtual User User { get; set; }

        [ForeignKey(nameof(User))]
        public long UserId { get; set; }
    }

    [UsedImplicitly]
    [Display(Name = "Adress Domain Name")]
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

        public List<AccountDomain> Accounts { get; set; } = new List<AccountDomain>();
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
