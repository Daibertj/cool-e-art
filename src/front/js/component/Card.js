import React, { useContext } from "react";
import { Link } from "react-router-dom";



export const Card = ({ id, title, description, image, user }) => {
    const { store, actions } = useContext(Context) 
    return (

        <div className="col">
            <div className="card"     >


                <img
                    src={image}
                    className="card-img-top"
                    alt={title}
                />


                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description ? description : "Sin descripcion"}</p>
                    <h5>{user.name}</h5>
                </div>
                

                    <Link to={`/imageview/${id}`}>
                        <img 
                        src={image }
                        className="card-img-top" 
                        alt={title}
                        style={{width:"100%", height:"auto"}}
                        />
            </Link>

                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description ? description : "Sin descripcion" }</p>
                            <Link to={`/profile/${user.alias}`} style = {{textDecoration:'none', color : 'grey'}}><p>{user.name}</p> </Link>  
                            
                            
                        </div>

                    

            </div>
            <button
                    className="btn btn-dark bg-black fa-solid fa-heart"
                    onClick={() => actions.addFavorite(id)}
                ></button>
        </div>



    );
};
