import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

import { Card } from "../component/Card.js";
import { Rombo } from "../component/Rombo.jsx";
import "../../styles/rombo.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div>
      <div className="wrapper">
      {store.photos.map((photo) =>
      (
        <Rombo
          key={photo.id}
          image={photo.src.medium}
        />
      ))}
    </div>
    </div>

    
  );
};
