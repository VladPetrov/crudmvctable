using System.ComponentModel.DataAnnotations;


namespace Domain.Message
{
    public enum MessageType
    {
        Log,

        Error,

        [Display(Name = "Queue List")]
        QueueList
    }
}
