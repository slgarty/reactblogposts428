import React, { useState, useEffect } from 'react';
import axios from 'axios';
import BlogPostRow from '../components/BlogPostRow';
import { Link, useParams } from 'react-router-dom';

const Home = () => {
    const params = useParams();
    const [blogPosts, setBlogPosts] = useState([]);
 
        useEffect(() => {
            const getBlogPosts = async () => {
                const { data } = await axios.get(`/api/BlogPosts/getall`);
                setBlogPosts(data);
            }
            getBlogPosts();
          
        }, []);


        return (
            <div style={{ paddingTop: 10 }}>
                <div className="row mt-5">
                    <div className="col-md-12" style={{ marginBottom: 20 }}>
                        <h1>Sara Liba's Blog Site</h1>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            {!!blogPosts && blogPosts.map(b => <BlogPostRow blogPost={b} key={b.id} />)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }


export default Home;