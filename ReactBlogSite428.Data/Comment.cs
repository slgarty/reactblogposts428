using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace ReactBlogSite428.Data
{
    public class Comment
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Content { get; set; }
        public DateTime DateCreated { get; set; }
        public int BlogPostId { get; set; }

        [JsonIgnore]
        public BlogPost BlogPost { get; set; }
    }
}
