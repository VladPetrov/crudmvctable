using System;
using System.Collections.Generic;


namespace DAL.Model
{
    public class Project : EntityBase
    {
        public string Name { get; set; }

        public string Acronym { get; set; }

        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public long Budget { get; set; }

        public virtual List<EntityProject> Entities { get; set; } = new List<EntityProject>();
    }
}
