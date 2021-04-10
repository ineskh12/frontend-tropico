import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const EditPost = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://34.122.32.216:3001/product/${id}`).then(result => {
            
           
            setValue("id", result.data.products[0]._id);
            setValue("titreAr", result.data.products[0].titreAr);
            setValue("prix", result.data.products[0].prix[0].prix);
            setValue("body", result.data.body);
        })
    }, [id, setValue]);

    const onSubmit = data => {
        const prix = { prix: data
        }
       
        axios.put(`http://localhost:3001/product/edit/${id}`, prix).then(result => {
          
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Mise à jour du prix  </h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        
                        <div className="form-group">
                            <label>Prix </label>
                            <input type="text" className="form-control" name="prix" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.prix && 'prix invalid'}</small>
                        </div>
                        

                        <Link to="/" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i> Annuler
                        </Link>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Enregistrer <i className="fa fa-save"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default EditPost;
