import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

import { Card } from "../component/Card.js";
import { Rombo } from "../component/Rombo.jsx";
import "../../styles/rombo.css";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container p-5">
      <div class="row">
        <div class="col-12">
          <div className="wrapper">
            {store.photos.slice(0, 10).map((photo) =>
            (
              <Rombo
                key={photo.id}
                image={photo.src.large2x}
              />
            ))}
          </div>
        </div>


      </div>

    </div>


  );
};
