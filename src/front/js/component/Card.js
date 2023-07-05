import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = ({image, user, description, title}) => {
    const { store } = useContext(Context);

  
    // Accede a los datos de ilustrationData desde el store
    const ilustrationData = store.ilustrationData;
  
    return (
      <div>
        
          <div className="card" style={{ width: "18rem" }} >
            <img src={image} className="card-img-top" alt={title} />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}</p>
              <h5>@{user}</h5>
            </div>
          </div>
        
      </div>
    );
  };
