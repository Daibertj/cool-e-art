import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Edit = ({ id, title, description, image, user }) => {
    const { store, actions } = useContext(Context)
    return (
        <>
            <div>
                <div class="card mb-3" style={{ width: "540px"}}>
                    <div class="row g-0">
                        <div class="col-md-4">
                        <Link to={`/imageview/${id}`}>
                        <img
                            src={image}
                            className="card-img-top"
                            alt={title}
                            style={{ width: "100%", height: "auto" }}
                        />
                    </Link>
                        </div>
                        <div class="col-md-8">
                            <div class="card-body">
                            <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description ? description : "Sin descripcion"}</p>
                        <Link to={`/profile/${user.alias}`} style={{ textDecoration: 'none', color: 'grey' }}><p>{user.name}</p> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

