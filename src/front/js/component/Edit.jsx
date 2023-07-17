import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Edit = ({ id, title, description, image, user }) => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div>
                <div class="card mb-3" style={{ width: "700px", height: "250px" }}>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img
                                src={image}
                                className="card-img-top"
                                alt={title}
                                style={{ width: "200px", height: "250px" }}
                            />
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{description ? description : "Sin descripcion"}</p>
                                <Link to={`/profile/${user.alias}`} style={{ textDecoration: 'none', color: 'grey' }}><p>{user.name}</p> </Link>
                            </div>
                            <button
                className="btn btn-dark bg-black fa-solid fa-trash"
                onClick={() => actions.deleteIlustration(id)}
            ></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

