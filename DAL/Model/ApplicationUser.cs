using System;
using System.ComponentModel.DataAnnotations;
using DAL.Infrastructure;
using Microsoft.AspNetCore.Identity;

namespace DAL.Model
{
    public class ApplicationUser : IdentityUser, IEntity<string>
    {
        public bool IsNew => Id != null;

        public DateTime CreatedDate { get; set; } = DateTime.UtcNow;

        [Timestamp]
        public byte[] RowVersion { get; set; }
    }
}