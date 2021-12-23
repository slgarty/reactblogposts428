import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';


const BlogPostRow = ({ blogPost }) => {
    const { id, title, content, dateCreated, comments } = blogPost;
    const commentCount = comments.length;

    return (
            < div className="card mb-4" >
                <div className="card-body">
                    <h2 className="card-title">
                        <Link to={`/ViewPost/${id}`}>
                            <h3>{title}</h3>
                        </Link>
                    </h2>
                    <p className="card-text">{content.length > 200 ? `${content.substr(0, 200)}...` : content}</p>

                    <Link to={`/ViewPost/${id}`} className="btn btn-primary">Read More &rarr;
                </Link>
                </div>
                <div className="card-footer text-muted">
                    <div className="row">
                        Posted on {format(new Date(dateCreated), 'cccc MMMM do, yyyy')}
                    </div>
                    <div className="row">
                    <h6> {comments !== null ? commentCount : 0}  comments</h6>
                    </div>
                </div>
            </div>
        )
}
export default BlogPostRow
