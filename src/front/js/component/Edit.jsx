import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import EditUser from "./EditUser.jsx";

export const Edit = ({ id, title, description, image, user, ilustration_id }) => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div>
                <div className="card mb-3 negro " style={{ width: "400px", height: "250px" }}>
                    <div className="row g-0">
                        <div classname="col-md-4" style={{ width: "200px" }}>
                            <img
                                src={image}
                                className="card-img-top"
                                alt={title}
                                style={{ width: "200px", height: "250px" }}
                            />
                        </div>
                        <div className="col-md-8" style={{ width: "100px" }}>
                            <div className="card-body">
                                <p className="card-title">{title}</p>
                                <p className="card-text">{description ? description : "Sin descripcion"}</p>
                                <Link to={`/profile/${user.alias}`} style={{ textDecoration: 'none', color: 'grey' }}><p>{user.name}</p> </Link>
                            </div>
                            
                            <button
                                className="btn btn-dark bg-black fa-solid fa-trash"
                                onClick={() => actions.deleteFavorite(id) && actions.deleteIlustration(id, user.alias)}
                            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

