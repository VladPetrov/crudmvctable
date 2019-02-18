
namespace Domain
{
    public enum OperationCode
    {
        Ok = 0,
        AuthenticationInvalidCredentials = 4,
        DataWasEditedByEnotherUser = 8,
        SaveFailed = 20,
        Warnings = 24,
        NotFound = 28,
        EntityWithExternalReferencesCanNotBeDeleted = 32,
        UnhandledError = 44,
        GeneralError = 48,
        

        //custom errors >= 500
    }
}
