import React, { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const MostRecent = () => {
    const history = useHistory();


    useEffect(() => {
        const MostRecent = async () => {
            const { data } = await axios.get(`/api/blogPosts/getMostRecentPost`);
            history.push(`/viewPost/${data}`)
           
        }
        MostRecent();
    }, []);
    return <div></div>
}


export default MostRecent;