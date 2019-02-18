using System.ComponentModel.DataAnnotations;

namespace Domain.FileUploadLogger
{
    public enum FileUploadStatus
    {
        [Display(Name = "None")]
        None,

        [Display(Name = "In Process")]
        InProcess,

        [Display(Name = "Finished Successfully")]
        FinishedSuccessfully,

        [Display(Name = "Finished With Errors")]
        FinishedWithErrors
    }
}
