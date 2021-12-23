using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ReactBlogSite428.Data
{
    public class BlogPostRepository
    {
        private readonly string _connectionString;

        public BlogPostRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public List<Comment> GetComments(int id)
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.Comments.Where(c => c.BlogPostId == id).ToList();

        }

        public List<BlogPost> GetBlogPosts()
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.BlogPosts.Include(b => b.Comments).ToList();
        }

           
        public BlogPost GetBlogPostById(int id)
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.BlogPosts.Include(b => b.Comments).ToList().FirstOrDefault(b => b.Id == id);
        }
        public int GetMostRecentPostId()
        {
            using var context = new BlogPostDataContext(_connectionString);
            return context.BlogPosts.Include(b => b.Comments).OrderByDescending(b => b.Id).FirstOrDefault().Id;
        }
        public void AddBlogPost(BlogPost blogPost)
        {
            using var context = new BlogPostDataContext(_connectionString);
            context.BlogPosts.Add(blogPost);
            context.SaveChanges();
        }
        public void AddComment(Comment comment)
        {
            using var context = new BlogPostDataContext(_connectionString);
            context.Comments.Add(comment);
            context.SaveChanges();
        }
    }
}
