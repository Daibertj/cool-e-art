import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";
import { Favorite } from "../component/Favorite.jsx";
import UserSVG from "../component/UserSVG.jsx";
import { SocialIcon } from 'react-social-icons'
import Card2 from "../component/Card2.jsx"


function UserPage() {
  const { store, actions } = useContext(Context);
  const { getIlustrationsByUser, getFavorite } = actions
  const { ilustrationsUser, userData, favoriteData } = store;
  



  useEffect(() => { getIlustrationsByUser(userData.alias) },
    [userData.alias])

  useEffect(() =>{getFavorite},[])  
  return (
    <>
      <div>
        <div className="container-fluid profile d-inline-flex justify-content-center py-3">
          {!userData.image ? <UserSVG /> : <img
            src={userData.image}
            className="img-thumbnail img-fluid h-25 rounded "
            alt="..."
            style={{ width: "150px" }}
          />}

          <div className="col-lg-5 col-md-8 h-25 text-black ps-3 pt-4 ">
            <h1 className="fw-light">{userData.alias}</h1>
            <p className="fst-italic">
              {userData.name} {userData.lastname}
            </p>
          </div>
          <div className="row flex-column  text-black">
            <div>
              <SocialIcon network="facebook" className="p-2" /> <Link to={`https://www.facebook.com/${userData.facebook}`}>{userData.facebook}</Link> 
            </div>
            <div>
              <SocialIcon network="instagram" /><Link to={`https://www.instagram.com/${userData.instagram}`}>  {userData.instagram}</Link>
            </div>
            <div>
              <SocialIcon network="twitter" className="" /> <Link to={`https://www.twitter.com/${userData.twitter}`}>{userData.twitter}</Link>
            </div>



          </div>

        </div>
        <div className=" d-flex justify-content-between p-3 my-3 rounded shadow-sm text-white barra">
          <div className="lh-1">
            <h2 className="mb-0 lh-1">Mis creaciones</h2>
          </div>
          <div>
            <Link to={`/edit`}>
              <button type="button" className="btn btn-secondary">Edit</button>
            </Link>
          </div>
        </div>
        {ilustrationsUser.length > 0 ? (
          <div className=" py-5 bg-body-tertiary">
            <div className="container  ">
              <div className=" row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                {ilustrationsUser.map((ilustration) => (

                  <div className="row pb-2" key={ilustration.id}>
                    <Card2
                      image={ilustration.image}
                      title={ilustration.title}
                      description={ilustration.description}
                      user={ilustration.user}
                      id={ilustration.id}
                      alias={userData.alias}
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
