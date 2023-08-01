import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import EditUser from "./EditUser.jsx";

export const Edit = ({ id, title, description, image, user, ilustration_id, category, alias }) => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div>
                <div className="card mb-3 negro " style={{ width: "600px", height: "130px" }}>
                    <div className="row g-0">
                        <div classname="col-md-4" style={{ width: "200px" }}> 
                            <img
                                src={image}
                                className="card-img-top"
                                alt={title}
                                style={{ width: "130px", height: "130px" }}
                            />
                        </div>
                        <div className="col-md-8 " style={{ width: "100px" }}>
                            <div className="card-body datos">
                                <h5 className="card-title text-black overflow">{title}</h5> 
                                <Link to={`/profile/${alias}`} style={{ textDecoration: 'none', color: 'grey' }}><p>{alias}</p> </Link>
                                <span className="badge rounded-pill bg-light text-dark  ">{category}</span>
                            </div>
                            <div className="borrarboton" >
                                <button
                                    className="button-trash m-auto d-flex"
                                    onClick={() => actions.deleteFavorite(id) && actions.deleteIlustration(id, user.alias)}
                                >
                                    <svg viewBox="0 0 448 512" className="svgIcon">
                                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

