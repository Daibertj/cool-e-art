import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import Card2 from "../component/Card2.jsx"
import { useNavigate } from "react-router-dom";


const ExplorePage = () => {
  const { store, actions } = useContext(Context);
  const { ilustrationData, countFavorites } = store;
  const { getAllIlustrations, getCountAllFavorites } = actions
  const creators = [...new Set(ilustrationData.map((ilustration) => ilustration.user.alias))]
  const navigate = useNavigate()
  const redirectProfile = (alias) => { navigate(`/profile/${alias}`) }
  //va a traer los keys del objeto donde esta el contador de favoritos
  const sortedIlustrationCount = countFavorites.slice(0, 6)

  useEffect(() => {
    // Llamamos a las funciones para obtener los datos de ilustraciones y contar los favoritos
    getAllIlustrations();
    getCountAllFavorites();
  }, [getAllIlustrations, getCountAllFavorites]);


  console.log("el ranking", sortedIlustrationCount)

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

        <div>
          <h2 className=" m-3 lh-1 barra text-white p-2">Los que mas gustan</h2>
          <div className="row">
            {sortedIlustrationCount.length > 0 &&
              sortedIlustrationCount.map((ilustrationInfo) => {
                // Obtener el ID y la cantidad de favoritos del elemento
                const [ilustrationId, favoritesCount] = ilustrationInfo;
                // Buscar la ilustración correspondiente usando el ID
                const ilustration = ilustrationData.find((ilustration) => ilustration.id === parseInt(ilustrationId));

                if (!ilustration) return null; // Si no se encuentra la ilustración, no la mostramos

                return (
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
                );
              })}

          </div>

        </div>

        {creators.map((creator) => (
          <div key={creator}>

            <h2 className=" m-3 lh-1 barra text-white p-2">Ilustraciones de {creator}</h2>

            <div className="row ">
              {ilustrationData
                .filter((ilustration) => ilustration.user.alias === creator).slice(0, 6)
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
            <button
              className="btn btn-primary mt-3"
              onClick={() => redirectProfile(creator)}> Ver mas de {creator}

            </button>
          </div>
        ))}




      </div>
    </>
  );
};

export default ExplorePage;

