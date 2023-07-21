import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";
import Card2 from "../component/Card2.jsx"

const ExplorePage = () => {
  const { store } = useContext(Context);
  const { ilustrationData } = store;
  const creators = [...new Set(ilustrationData.map((ilustration) => ilustration.user.alias))]



  return (
    <>
      <div className="container">
        <div className="input-group my-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Busqueda
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="que tipo de imagen estas buscando?"
          />
        </div>
        

     

        {creators.map((creator) => (
          <div key={creator}>
            
            <h2 className=" m-3 lh-1 barra text-white">Ilustraciones de {creator}</h2>
            
            <div className="row ">
              {ilustrationData
                .filter((ilustration) => ilustration.user.alias === creator)
                .map((ilustration) => (
                  <div className="col pb-2" key={ilustration.id}>
                    <Card2
                      title={ilustration.title}
                      description={ilustration.description}
                      image={ilustration.image}
                      user={ilustration.user.name}
                      id={ilustration.id}
                      alias={ilustration.user.alias}
                    />
                  </div>
                ))}
            </div>
          </div>
        ))}

      </div>
    </>
  );
};

export default ExplorePage;

