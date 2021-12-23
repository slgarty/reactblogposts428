import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import getTime from 'date-fns/fp/getTime';
import getDate from 'date-fns/getDate/index.js';


const Admin = () => {
    const [blogPost, setBlogPost] = useState({ title: '', content: ''});
    const history = useHistory();

    const onTextChange = e => {
        const copy = { ...blogPost };
        copy[e.target.name] = e.target.value;
        setBlogPost(copy);
    }

    const onSubmitClick = async () => {
        console.log(blogPost)
        await axios.post('/api/blogPosts/addBlogPost', blogPost);
        history.push('/');
    }

    return (
        <div className="col-md-8 offset-md-2 card card-body bg-light">
            <h3>Add new post</h3>
            <input className="form-control" placeholder="Title" name="title" onChange={onTextChange} />
            <br></br>
            <textarea name="content" placeholder="What's on your mind?"
                className="form-control" rows="10" onChange={onTextChange}></textarea>
            <br></br>
            <button className="btn btn-primary" onClick={onSubmitClick}>Submit</button>
        </div>
    )
}
export default Admin
