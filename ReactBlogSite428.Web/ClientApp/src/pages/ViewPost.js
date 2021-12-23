import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { format, getDate } from 'date-fns';
import CommentRow from '../components/CommentRow';

const ViewPost = () => {
    const { id } = useParams();
    const [comment, setComment] = useState({ name: '', content: '' });
    const [comments, setComments] = useState([]);
    const [blogPost, setBlogPost] = useState({ title: '', content: '', id: '', comments: [] });
    const history = useHistory();
    const { name, content } = comment;


    useEffect(() => {
        const getBlogPost = async () => {
            const { data } = await axios.get(`/api/blogPosts/getBlogPost?id=${id}`);
            setBlogPost(data);
        }
        const getCommentsById = async () => {
            const { data } = await axios.get(`/api/blogPosts/GetComments?blogPostId=${id}`);
            setComments(data);
        }
        getBlogPost();
        getCommentsById();
        console.log(comments)

    }, []);

    const onTextChange = e => {
        const copy = { ...comment };
        copy[e.target.name] = e.target.value;
        copy.blogPostId = +(id);
        setComment(copy);
    }

    const onSubmitClick = async () => {
        await axios.post('/api/blogPosts/addcomment', { name, content, blogPostId: blogPost.id });
        history.push('/');
    }

    return (
        <div>
            <h1 className="mt-4">{blogPost.title}</h1>
            <hr>
            </hr>
            {blogPost && blogPost.dateCreated && <p>Posted on {format(new Date(blogPost.dateCreated), 'cccc MMMM Lo, yyyy')}</p>}
            <hr>
            </hr>
            <p>{blogPost.content}</p>
            <hr>
            </hr>
            <div className="col-md-8">
                {comments.map(c => <CommentRow comment={c} key={c.id} />)}
            </div>
                <div className="card my-4">
                    <h5 className="card-header">Leave a Comment:</h5>
                    <div className="card-body">
                        <div>
                            <input type="text" onChange={onTextChange} placeholder="Please enter your name" name="name" className="form-control" />
                        </div>
                        <div>
                            <textarea placeholder=
                                "Type your comment here but remember to be be nice..."
                                name="content" rows="3"
                                className="form-control"
                                onChange={onTextChange}>
                            </textarea>
                        </div>
                        <button className='btn btn-primary btn-lg btn-block' onClick={onSubmitClick}>Submit</button>
                    </div>
                </div>


        </div>


       
    )
}

export default ViewPost;

