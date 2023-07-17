import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Edit } from "../component/Edit.jsx";
import { Favorite } from "../component/Favorite.jsx";
import UserSVG from "../component/UserSVG.jsx";

function EditPage() {
    const { store, actions } = useContext(Context);
    const { getIlustrationsByUser } = actions
    const { ilustrationsUser, userData, favoriteData } = store;
    ;

    useEffect(() => { getIlustrationsByUser(userData.alias) },
        [userData.alias])

    return (
        <>
            <div>
                <div className="container-fluid profile d-inline-flex justify-content-center ">
                    {!userData.image ? <UserSVG /> : <img
                        src={userData.image}
                        className="img-thumbnail img-fluid h-25 rounded "
                        alt="..."
                        style={{ width: "150px" }}
                    />}

                    <div className="col-lg-6 col-md-8 h-25  ">
                        <h1 className="fw-light">{userData.alias}</h1>
                        <p className="fst-italic">
                            {userData.name} {userData.lastname}
                        </p>

                    </div>
                </div>
                <div className=" d-flex justify-content-between p-3 my-3 rounded shadow-sm text-white barra">
                    <div className="lh-1">
                        <h2 className="mb-0 lh-1">Editar</h2>
                    </div>
                </div>
                {ilustrationsUser.length > 0 ? (
                    <div className="album py-5 bg-body-tertiary">
                        <div className="container">
                            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                                {ilustrationsUser.map((ilustration) => (

                                    <div className="col" key={ilustration.id}>
                                        <Edit
                                            image={ilustration.image}
                                            title={ilustration.title}
                                            description={ilustration.description}
                                            user={ilustration.user}
                                            id={ilustration.id}
                                        />
                                        <div className="btn-group">

                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ) : (

                    <div>
                        <div className="alert alert-warning mx-3" role="alert">
                            Ups, Parece que no estas logeado.
                        </div>
                        <Link to={`/`}>
                            <button type="button" class="btn btn-light">Volver a Home</button>
                        </Link>
                    </div>




                )}


            </div>
        </>
    );
}

export default EditPage;
