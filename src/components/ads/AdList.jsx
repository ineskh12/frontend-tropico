import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

const AdList = () => {
    const [ads, setAds] = useState([]);

    useEffect(() => {
        axios.get('http://34.122.32.216:3001/ads/all').then(result => {
            setAds(result.data);
           
        })
    }, []);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="text-center">image</th>
                    <th className="text-center">date</th>
                    <th className="text-center">Url</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    ads.map(post => (
                        <tr key={post._id}>
                      
                            <td className="text-center"><img alt="scan" style={{width:100, height:100}}  src={`http://localhost:3001/${post.image}`} ></img> </td>
                            <td className="text-center"> { moment(post.createdAt).format("l")} <br/>{ moment(post.updatedAt).format("l")}</td>
                            <td className="text-center"> {post.url}</td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <Link to={`/edit/${post._id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                 
                                    <Link to={`/delete/${post._id}`} className="btn btn-danger">
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default AdList;
