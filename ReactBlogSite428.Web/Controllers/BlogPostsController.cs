using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using ReactBlogSite428.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReactBlogSite428.Web.Models;

namespace ReactBlogSite428.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BlogPostsController : ControllerBase
    {
        private string _connectionString;

        public BlogPostsController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }

        [HttpGet]
        [Route("getall")]
        public List<BlogPost> GetAll()
        {

            var repo = new BlogPostRepository(_connectionString);
            return repo.GetBlogPosts();
           
        }
    

        [HttpPost]
        [Route("addBlogPost")]
        public void AddBlogPost(BlogPost blogPost)
        {
            var repo = new BlogPostRepository(_connectionString);
            blogPost.DateCreated = DateTime.Now;
            repo.AddBlogPost(blogPost);
        }

        [HttpGet]
        [Route("getBlogPost")]
        public BlogPost GetBlogPost(int id)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetBlogPostById(id);
        }
        [HttpGet]
        [Route("getMostRecentPost")]
        public int getMostRecentPost()
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetMostRecentPostId();
        }


        [HttpPost]
        [Route("addComment")]
        public void AddComment(Comment comment)
        {
            var repo = new BlogPostRepository(_connectionString);
            comment.DateCreated = DateTime.Now;
            repo.AddComment(comment);
        }

        [HttpGet]
        [Route("getComments")]
        public List<Comment> GetComments(int BlogPostId)
        {
            var repo = new BlogPostRepository(_connectionString);
            return repo.GetComments(BlogPostId);
        }

     
    }
}
