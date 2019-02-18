using System;
using System.Collections.Generic;
using System.Text;

namespace Domain.User
{
    public class ApplicationUserDisplay
    {
    public bool ForceToResetPassword { get; set; }

      public bool IsAdministrative { get; set; }

      public bool CanEdit { get; set; }

      public string Login { get; set; }

      public string Email { get; set; }

      public UserType Type { get; set; }

      public string FirstName { get; set; }

      public string LastName { get; set; }

      public string FullName { get; set; }
  }
}
