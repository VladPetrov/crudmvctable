using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Project
{
    public class ProjectDomain : DomainBase
    {
        [Required]
        public string Name { get; set; }

        [Required]
        public string Acronym { get; set; }

        [Required]
        public DateTime StartDate { get; set; }

        [Required]
        public DateTime EndDate { get; set; }

        [Range(1, long.MaxValue)]
        public long Budget { get; set; }
    }
}
