using System;

namespace Domain.Project
{
    public class ProjectDto : DomainBase
    {
        public string Name { get; set; }

        public string Acronym { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public long Budget { get; set; }
    }
}
