using JetBrains.Annotations;

namespace Domain.User
{
    [UsedImplicitly(ImplicitUseTargetFlags.WithMembers)]
    public class UserPasswordReset
    {
        public long Id { get; set; }

        public string Login { get; set; }

        public string Password { get; set; }

        public bool ForcePasswordChanging { get; set; }
    }
}
