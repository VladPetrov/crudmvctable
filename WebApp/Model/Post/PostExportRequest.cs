using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApp.Model.Post
{
    public class PostExportRequest
    {
        public List<string> Ids { get; set; } = new List<string>();
    }
}
