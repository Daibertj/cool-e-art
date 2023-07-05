import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Card = () => {
    const { store } = useContext(Context);
  
    // Accede a los datos de ilustrationData desde el store
    const ilustrationData = store.ilustrationData;
  
    return (
      <div>
        {ilustrationData.map((ilustration) => (
          <div className="card" style={{ width: "18rem" }} key={ilustration.id}>
            <img src={ilustration.image} className="card-img-top" alt={ilustration.title} />
            <div className="card-body">
              <h5 className="card-title">{ilustration.title}</h5>
              <p className="card-text">{ilustration.description}</p>
              <h5>@{ilustration.user}</h5>
            </div>
          </div>
        ))}
      </div>
    );
  };
export default Card