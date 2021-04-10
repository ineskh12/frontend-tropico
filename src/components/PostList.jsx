import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';


const ProductList = () => {
    const [prod, setProds] = useState([]);
   // const [prix, setPrix] = useState([]);
   

    useEffect(() => {
        axios.get('http://34.122.32.216:3001/product').then(result => {
            setProds(result.data.products);
           // setPrix(result.data.products[0].prix.reverse());
           
            //console.log(result.data.products[0]);
           
           
        })
    }, []);

    return (
        <div>
          <Link to={`/create`} className="btn btn-primary">
                                        <i className="fa fa-plus"></i> Ajout
                                    </Link>
                                  
        
        <table className="table">
       
            <thead>
                <tr>
                    <th className="text-center">Produit</th>
                    <th className="text-center">Categorie</th>
                    <th className="text-center">Prix en DTT</th>
                    <th className="text-center">Date</th>
                    <th className="text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    prod.map(post => (
                        
                        <tr key={post._id}>
                            <td className="text-center">{post.titreAr}<br/>{post.titreFr} </td>
                         
                            <td className="text-center">   {post.categorie === 1? <p>خضر <br/>légumes</p>: <p>غلال<br/>fruits</p> }</td>
                            <td className="text-center"> {post.prix[0].prix}</td>
                            <td className="text-center"> 
                              
                            { moment.unix(post.prix[0].updatedAt).format("DD/MM/YYYY")}
                              
        
                                 </td>
                            
                          


                            <td className="text-center">
                                <div className="btn-group">
                                    <Link to={`/edit/${post._id}`} className="btn btn-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <Link to={`/details/${post._id}`} className="btn btn-secondary">
                                    <i className="fa fa-history" aria-hidden="true"></i>
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
        </div>
    );
}

export default ProductList;
