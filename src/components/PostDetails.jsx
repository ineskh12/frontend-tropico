import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState();
    const [prix, setPrix] = useState([]);
    const [categorie, setCategorie] = useState([]);

    useEffect(() => {
        axios.get(`http://34.122.32.216:3001/product/${id}`).then(result => {
            setPost(result.data.products[0]);
            setPrix(result.data.products[0].prix.reverse());
            setCategorie(result.data.products[0].categorie[0]);
            console.log(result.data.products[0].prix.reverse())
            
        })
    }, [id]);

    const options = {
      chart: {
        type: "spline"
      },
      title: {
        text: "Historique {post?.titreAr} {post?.titreFr}"
      },
      series: [
        {
          data: [1, 2, 1, 4, 3, 6,7]
        }
      ]
    };
    return (
        <div>
            <h3>{post?.titreAr} {post?.titreFr}</h3>
           <h3>{categorie?.categorieAr} {categorie?.categorieFr}<br /></h3>
           <p>{post?.pourcentage}</p> 

         
           <table className="table border">
          <thead>
            <tr>
            
              <th scope="col">Date</th>
              <th scope="col">Prix </th>
             
             
            
            </tr>
          </thead>
          <tbody> 
          {prix.map((test, index) => (
          <tr key={index}>

          <td>

               { moment(test.createdAt).format("l")}
             </td>
            <td>
            {test.prix}
            </td>
            
          </tr>
          ))}
          </tbody>
          
          </table>

                
                


          <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
           
        </div>
    );
}

export default PostDetails;

