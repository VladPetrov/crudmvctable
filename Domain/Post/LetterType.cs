using System.ComponentModel.DataAnnotations;

namespace Domain.Post
{
    public enum LetterType
    {
        Letter,

        [Display(Name = "Letter – 1st class")]
        LetterFirstClass,

        RegisteredLetter
    }
}
