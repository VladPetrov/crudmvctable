using System;
using System.ComponentModel.DataAnnotations;
using DAL.Infrastructure;
using Domain;
using Microsoft.AspNetCore.Identity;

namespace DAL.Model
{
    public class ApplicationUser : IdentityUser, IEntity<string>
    {
        public bool IsNew => Id != null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        [Timestamp]
        public byte[] RowVersion { get; set; }

        public UserType UserType { get; set; }

        public virtual ClientProfile ClientProfile { get; set; }

        public static ApplicationUser CreateClient()
        {
            return new ApplicationUser {UserType = UserType.Client};
        }
        
        public static ApplicationUser CreateEmployee()
        {
            return new ApplicationUser { UserType = UserType.AdminOrBackOffice };
        }
    }
}