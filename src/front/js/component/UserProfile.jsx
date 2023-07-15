import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "./Card";
import ContactModal from "./ContactModal.jsx";

function UserProfile() {
  const { actions, store } = useContext(Context);
  const { ilustrationsUser, allUsersData } = store;
  const { getIlustrationsByUser, getAllUsers } = actions;
  const { alias } = useParams();

  useEffect(() => {
    getIlustrationsByUser(alias); getAllUsers()
  }, [alias, getIlustrationsByUser, getAllUsers]);

  const ilustratorVisited = allUsersData.find((user) => user.alias === alias)
  console.log(ilustratorVisited)

  if (!ilustratorVisited) {
    return (
    <h1>No existe este ilustrador</h1>
    )
  }

  return (
    <>
      {ilustratorVisited && (<>
        <div className="container-fluid profile d-inline-flex justify-content-center ">
          <img
            src={ilustratorVisited.image}
            className="img-thumbnail img-fluid h-25 rounded "
            alt="..."
            style={{ width: "150px" }}
          />
          <div className="col-lg-6 col-md-8 h-25  ">
            <h1 className="fw-light">{ilustratorVisited.alias}</h1>
            <p className="fst-italic">
              {ilustratorVisited.name} {ilustratorVisited.lastname}
            </p>
          </div>
          <button type="button" className="btn btn-primary m-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Contactame
          </button>
          <ContactModal />
        </div>

        <div className="d-flex align-items-center p-3 my-3 rounded shadow-sm text-white barra">
          <div className="lh-1">
            <h2 className="mb-0 lh-1">Creaciones de {ilustratorVisited.alias}</h2>
          </div>
        </div>

        {ilustrationsUser.length > 0 ? (
          <div className="album py-5 bg-body-tertiary">
            <div className="container">
              <div className="col d-flex inline ">

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

          <div className="alert alert-info mx-3" role="alert">
            Aun sin Ilustraciones.
          </div>

        )}
      </>)}



    </>
  );
}

export default UserProfile;