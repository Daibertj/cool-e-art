import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import { Context } from "../store/appContext";
import { Card } from "./Card";

function UserPage() {
  const { actions, store } = useContext(Context);
  const { userData } = store;
  const { getUserData, getIlustrarions } = actions;
  console.log(store.ilustrationData)
  useEffect(()=>{
    
  getUserData()},[])
  
  useEffect(() => {
    getIlustrarions();
  }, []);

  return (
    <>
      <div>
        <div className="container">
          <img
            src="rigo-baby.jpg"
            className="img-thumbnail rounded"
            alt="..."
          />
        

        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">{userData.name}</h1>
        </div>
        </div>
        <div className="d-flex align-items-center p-3 my-3 border border-primary rounded shadow-sm">
  
          <div className="lh-1">
            <h1 className="mb-0 text-blue lh-1">Mis creaciones</h1>
            
          </div>
        </div>

        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              
            {store.ilustrationData.map((ilustration) => (
                <div className="col" 
                key={ilustration.id}
              
                >
                  <Card
       
      image={ilustration.image}
      title={ilustration.title}
      description={ilustration.description}
      user={ilustration.user}
    />
                  <div className="btn-group">
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" className="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                </div>
              ))}
             

             
             
            </div>
          </div>
        </div>
        <p className="container">Mis Favoritos</p>
      </div>
    </>
  );
}

export default UserPage;
