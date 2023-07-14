import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Card } from "./Card";
import { Favorite } from "./Favorite.jsx";
import UserSVG from "./UserSVG.jsx";

function UserPage() {
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
        <div className="d-flex align-items-center p-3 my-3 rounded shadow-sm text-white barra">
          <div className="lh-1">
            <h2 className="mb-0 lh-1">Mis creaciones</h2>
          </div>
        </div>

        {ilustrationsUser.length > 0 ? (
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {ilustrationsUser.map((ilustration) => (

                  <div className="col" key={ilustration.id}>
                    <Card
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

          <div className="alert alert-warning mx-3" role="alert">
            Por favor, agrega alguna ilustración.
          </div>

        )}

        {favoriteData.length > 0 ? (
          <>
            <div className="d-flex align-items-center p-3 my-3 rounded shadow-sm text-white barra">
              <div className="lh-1">
                <h2 className="mb-0 lh-1">Favoritos</h2>
              </div>
            </div>

            <div className="album py-5 bg-body-tertiary">
              <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                  {favoriteData.map((ilustration) => (
                    <div className="col" key={ilustration.id}>
                      {ilustration && (
                        <Favorite
                          image={ilustration.image}
                          title={ilustration.title}
                          description={ilustration.description}
                          user={ilustration.user}
                          id={ilustration.id}
                          ilustration_id={ilustration.ilustration_id}
                        // ilustration_id={favorite.ilustration_id}
                        />)}


                      <div className="btn-group">
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (

          <div className="alert alert-info mx-3" role="alert">
            No tienes Favoritos.
          </div>
        )}
      </div>
    </>
  );
}

export default UserPage;
