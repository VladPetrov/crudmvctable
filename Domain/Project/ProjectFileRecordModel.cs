using Domain.FileParser;
using System;
using System.ComponentModel.DataAnnotations;

namespace Domain.Project
{
    public class ProjectFileRecordModel : FileRecordBase
    {
        [Display(Name = "Analytic Account")] 
        public string Name { get; set; }

        public string Acronym { get; set; }

        [Display(Name = "Start Date")]
        public DateTime StartDate { get; set; }

        [Display(Name = "End Date")]
        public DateTime EndDate { get; set; }

        [Display(Name = "Entity where it belongs")]
        public string Entity { get; set; }

        [Display(Name = "Budget (EUR)")]
        public int Budget { get; set; }
    }
}
