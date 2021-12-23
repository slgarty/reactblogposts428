using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactBlogSite428.Data;

namespace ReactBlogSite428.Web.Models
{
    public class ViewBlogsViewModel
    {
        public List<BlogPost> BlogPosts { get; set; }
        public int TotalCount { get; set; }
    }
}
