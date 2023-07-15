import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = ({ id, title, description, image, user }) => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div className="col-12 col-md-3 col-sm-4 ">
                <div className="card">
                    <Link to={`/imageview/${id}`}>
                        <img
                            src={image}
                            className="card-img-top"
                            alt={title}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description ? description : "Sin descripcion"}</p>
                        <Link to={`/profile/${user.alias}`} style={{ textDecoration: 'none', color: 'grey' }}><p>{user.name}</p> </Link>
                    </div>
                    {}
                    <button
                    className={store.favoriteData.some(favorite=> favorite.ilustration_id == id) ? "btn btn-secondary fa-solid fa-heart": "btn btn-outline-secondary fa-solid fa-heart"}
                    onClick={() => actions.addFavorite(id)}
                    ></button>
                    
                </div>
                
            </div>
        </>
    );
};


