import React, { useContext, useEffect, useState, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Card } from "./Card";
import { Favorite } from "./Favorite.jsx";

function UserPage() {
  const { actions, store } = useContext(Context);
  const { ilustrationsUser, userData } = store;
  const { getUserData, getIlustrationsByUser, getAllIlustrations, getFavorite } = actions;
  const { alias } = useParams();
  const aliasRef = useRef(alias);


  useEffect(() => {
    getUserData(alias);
  }, [alias]);


  useEffect(() => {
    if (aliasRef.current == alias) {
      getIlustrationsByUser(alias);
    }
  }, [alias]);


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
        <div className="d-flex align-items-center p-3 my-3 rounded shadow-sm text-white barra">
          <div className="lh-1">
            <h2 className="mb-0 lh-1">Favoritos</h2>
          </div>
        </div>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              {store.favoriteData.map((ilustration) => (
                <div className="col" key={ilustration.id}>
                  <Favorite
                    image={ilustration.image}
                    title={ilustration.title}
                    description={ilustration.description}
                    user={ilustration.user}
                    id={ilustration.id}
                    ilustration_id={ilustration.ilustration_id}
                  />

                  <div className="btn-group">
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserPage;
