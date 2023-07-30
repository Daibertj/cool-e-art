import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Favorite2 = ({ id, title, description, image, user, ilustration_id, category, alias }) => {
    const { store, actions } = useContext(Context)
    return (

        <>
            {/* <div className="card negro" style={{ width: "100%", height: "100%" }}>
                <Link to={`/imageview/${ilustration_id}`}>
                    <img
                        src={image}
                        className="card-img-top"
                        alt={title}
                        style={{ width: "100%", height: "100%" }}
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


            </div> */}

            <div className="courses-container">
                <div className="course">
                    <div className="course-preview">


                        <img
                            src={image}
                            className="card-img-top"
                            alt={title}
                            style={{ width: "100%", height: "100%" }}
                        />

                    </div>
                    <div className="course-info">

                        <h6><h5 className="text-white">{title}</h5></h6>
                        <h6><span className="badge rounded-pill bg-light text-dark  ">{category}</span></h6>
                        <div className="btnfav fa-solid fa-trash" onClick={() => actions.deleteFavorite(ilustration_id)}></div>
                    </div>
                </div>
            </div>


        </>



    );
};