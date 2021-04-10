import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    
    useEffect(() => {
        axios.get(`http://34.122.32.216:3001/news/${id}`).then(result => {
            setPost(result.data.news[0]);
            console.log(result.data.news[0])
          
            
        })
    }, [id]);

    return (
        <div>
            <h3>{post?.titre}</h3>
          
           <p>{post?.descriotion}</p> 

         
             

           
        </div>
    );
}

export default PostDetails;

