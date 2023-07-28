import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { Edit } from "../component/Edit.jsx";
import UserSVG from "../component/UserSVG.jsx";


function EditPage() {
    const { store, actions } = useContext(Context);
    const { getIlustrationsByUser } = actions
    const { ilustrationsUser, userData } = store;
    ;

    useEffect(() => { getIlustrationsByUser(userData.alias) },
        [userData.alias])

    return (
        <>
            <div>
                <div className="container-fluid profile d-inline-flex justify-content-center py-3">
                    {!userData.image ? <UserSVG /> : <img
                        src={userData.image}
                        className="rounded-circle "
                        alt="..."
                        style={{ width: "150px" }}
                    />}

                    <div className="col-lg-6 col-md-8 h-25 ps-3 ">
                        <h1 className="fw-light text-black pt-1">{userData.alias}</h1>
                        <p className="fst-italic">
                            {userData.name} {userData.lastname}
                        </p>
                        
                    </div>
                    
                </div>
                <div className=" d-flex justify-content-between p-3 my-3 rounded shadow-sm text-white">
                    <div className="lh-1">
                        <h3 className="m-3 lh-1 text-white p-2"> <i className="fas fa-pencil-alt"></i>&nbsp;Edit</h3>
                    </div>
                </div>
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
