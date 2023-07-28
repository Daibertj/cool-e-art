import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Favorite = ({ id, title, description, image, user, ilustration_id, category, alias }) => {
    const { store, actions } = useContext(Context)
    return (

        <>
            <div className="card negro">
                <Link to={`/imageview/${ilustration_id}`}>
                    <img
                        src={image}
                        className="card-img-top"
                        alt={title}
                        style={{ width: "100%", height: "300px" }}
                    />
                </Link>
                <div className="card-body">
                    <h5 className="card-title text-black">{title}</h5>
                    <p className="card-text">{description ? description : "Sin descripcion"}</p>
                    <Link to={`/profile/${alias}`} style={{ textDecoration: 'none', color: 'grey' }}><p>{alias}</p> </Link>
                    <span className="badge rounded-pill bg-light text-dark  ">{category}</span>
                </div>
                <button
                    className="btn btn-dark bg-black fa-solid fa-trash"
                    onClick={() => actions.deleteFavorite(ilustration_id)}
                ></button>


            </div>

        </>



    );
};