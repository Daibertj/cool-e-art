import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Card } from "./Card";
import { Favorite } from "./Favorite.jsx";

function UserPage() {
  const { actions, store } = useContext(Context);
  const { ilustrationsUser, userData, favoriteData } = store;
  const { getUserData, getIlustrationsByUser, getFavorite } = actions;
  const { alias } = useParams();
  const aliasRef = useRef(alias);

  useEffect(() => {
    if (aliasRef.current == alias) {
      getUserData(alias);
      getIlustrationsByUser(alias);
    }
    aliasRef.current = alias;
  }, [alias, getUserData, getIlustrationsByUser]);
 


  return (
    <>
      <div>
        <div className="container-fluid profile d-inline-flex justify-content-center ">
          <img
            src={userData.image}
            className="img-thumbnail img-fluid h-25 rounded "
            alt="..."
            style={{ width: "150px" }}
          />
          <div className="col-lg-6 col-md-8 h-25  ">
            <h1 className="fw-light">{alias}</h1>
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

                  {favoriteData.map((favorite) => (
                    <div className="col" key={favorite.id}>
                      {favorite.ilustration && (
                      <Favorite
                        image={favorite.ilustration.image}
                        title={favorite.ilustration.title}
                        description={favorite.ilustration.description}
                        user={favorite.ilustration.user}
                        id={favorite.ilustration.id}
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
