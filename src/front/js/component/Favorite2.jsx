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

            <div class="courses-container">
                <div class="course">
                    <div class="course-preview">

                        <img src="https://source.unsplash.com/random/75x75?summer" alt=""/>
                    </div>
                    <div class="course-info">
                        <div class="progress-container">
                            <div class="progress"></div>

                        </div>
                        <h6>Chapter 4</h6>
                        <h6>Callbacks & Closures</h6>
                        <button class="btn">C</button>
                    </div>
                </div>
            </div>


        </>



    );
};