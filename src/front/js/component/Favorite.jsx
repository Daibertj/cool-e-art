import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Favorite = ({ id, title, description, image, user, ilustration_id }) => {
    const { store, actions } = useContext(Context)
    return (

        <div className="col">
            <div className="card"     >


                <Link to={`/imageview/${ilustration_id}`}>
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
                    {/* <h5>{user.name}</h5> */}
                </div>


            </div>
            <button
                className="btn btn-dark bg-black fa-solid fa-trash"
                onClick={() => actions.deleteFavorite(ilustration_id)}
            ></button>
        </div>



    );
};