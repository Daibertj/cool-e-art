import React, { useContext, useEffect, useState, useRef } from "react";
import {Link, Routes, Route, useNavigate} from 'react-router-dom'; 
import { Context } from "../store/appContext";
import { Edit } from "../component/Edit.jsx";
import UserSVG from "../component/UserSVG.jsx";


function EditPage() {
    const { store, actions } = useContext(Context);
    const { getIlustrationsByUser } = actions
    const { ilustrationsUser, userData } = store;
    const navigate = useNavigate();

    useEffect(() => { getIlustrationsByUser(userData.alias) },
        [userData.alias])

    return (
        <>
            <div>
                
                <div className=" d-flex justify-content-between p-3 my-3 rounded text-white">
                    <div className="lh-1">
                        <h3 className="m-3 lh-1 text-white p-2"><i onClick={() => navigate(-1)} class="fa-solid fa-arrow-left fa-lg" style={{ cursor: "pointer" }}></i></h3>
                    </div>
                </div>
                <h3 className="text-center text-white">Danger Zone</h3>
                {ilustrationsUser.length > 0 ? (
                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 flex-column">

                                {ilustrationsUser.map((ilustration) => (

                                    <div className="col" key={ilustration.id}>
                                        <Edit
                                            image={ilustration.image}
                                            title={ilustration.title}
                                            description={ilustration.description}
                                            user={ilustration.user}
                                            id={ilustration.id}
                                            alias={userData.alias}
                                            category={ilustration.category}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (

                    <div>
                        <div className="alert alert-warning mx-3" role="alert">
                            No tienes ilustraciones cargadas.
                        </div>
                        <Link to={`/`}>
                            <button type="button" classname="btn btn-light">Volver a Home</button>
                        </Link>
                    </div>




                )}


            </div>
        </>
    );
}

export default EditPage;
