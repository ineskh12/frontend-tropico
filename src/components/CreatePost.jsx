import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const CreatePost = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        console.log('data',data.titreAr);
        const product = { 
        
            ...data,
          
            postedBy: "6057aa444e2d8d0aac492496"
        }
        console.log('product',product);
        axios.post('http://34.122.32.216:3001/product', product).then(result => {
            console.log(result);
            props.history.push("/");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Ajout produit</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Titre en Arabe</label>
                            <input type="text" className="form-control" name="titreAr" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.titreAr && 'Titre invalide'}</small>
                        </div>
                        <div className="form-group">
                            <label>Titre en Français</label>
                            <input type="text" className="form-control" name="titreFr" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.titreFr && 'titre invalide'}</small>
                        </div>
                        
                        <div className="form-group">
                            <label>Categorie</label>


                        <select className="form-control" name="categorie"  ref={register({ required: true })} aria-label="Default select example">
                            <option > select Categorie</option>
                            <option value="1">خضر-légume</option>
                            <option value="2">غلال-fruit</option>
                            <option value="3">لحوم-viende</option>
                            <option value="4">أسماك-poisson</option>
                           
                           
                        </select>
                        <small className="form-text text-danger">{errors.titreFr && 'categorie invalide'}</small>
                        </div>
                      
                    

                      
                        

                      
                        <div className="form-group">
                            <label>Prix en DTT</label>
                            <input type="number" className="form-control" name="prix" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.prix && 'Prix invalid'}</small>
                        </div>



                    
                        
                        <button type="submit" className="btn btn-primary">Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreatePost;
