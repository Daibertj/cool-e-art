import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import Card2 from "../component/Card2.jsx"
import { useNavigate } from "react-router-dom";
import Pagination from "../component/Pagination.jsx";

const ExplorePage = () => {
  const [searchCategory, setSearchCategory] = useState("");
  const { store, actions } = useContext(Context);
  const { ilustrationData, countFavorites, ilustrationsByCategory } = store;
  const { getAllIlustrations, getCountAllFavorites } = actions
  const creators = [...new Set(ilustrationData.map((ilustration) => ilustration.user.alias))]
  const navigate = useNavigate()
  const redirectProfile = (alias) => { navigate(`/profile/${alias}`) }
  //va a traer los keys del objeto donde esta el contador de favoritos
  const sortedIlustrationCount = countFavorites.slice(0, 6)

  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    // Llamamos a las funciones para obtener los datos de ilustraciones y contar los favoritos
    getAllIlustrations();
    getCountAllFavorites();
  }, [getAllIlustrations, getCountAllFavorites]);


  // Filtrar y ordenar la lista de creadores según el conteo de favoritos
  const sortedCreators = creators.sort((a, b) => {
    const countA = countFavorites[a] || 0
    const countB = countFavorites[b] || 0
    return countB - countA;
  });
  //cantidad total de creadores
  const totalSortedCreators = sortedCreators.length

  // cantidad de creadores a mostrar por página
  const creatorsPerPage = 3;

  // Calcular el índice inicial y final de los creadores a mostrar en la página actual
  const startIndex = (currentPage - 1) * creatorsPerPage;
  const endIndex = startIndex + creatorsPerPage;

  // Obtener los creadores que se mostrarán en la página actual
  const creatorsToShow = sortedCreators.slice(startIndex, endIndex)
  const totalCreators = creatorsToShow.length

  //Numero total de hojas
  const totalPages = Math.ceil(totalSortedCreators / creatorsPerPage)

  useEffect(() => {
    actions.getIlustrationsByCategory(searchCategory);
  }, [searchCategory]);
  console.log(sortedIlustrationCount)
  console.log(countFavorites)


  return (
    <>
      <div className="container">
        <div className="input-group my-3">

          {/* <input
            type="text"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
            placeholder="que tipo de imagen estas buscando?"
          /> */}
        </div>


        <div className="container">
          {currentPage === 1 && (
            <>
              <h2 className=" m-3 lh-1 barra text-white p-2">Los que mas gustan</h2>
              <span className="input-group-text" id="inputGroup-sizing-default">
                <select className="form-control" id="category" value={searchCategory}
                  name="category" onChange={(event) => setSearchCategory(event.target.value)}>
                  <option value="">Select a category</option>
                  <option value="nature">Nature</option>
                  <option value="food">Food</option>
                  <option value="sports">Sports</option>
                  <option value="art">Art</option>
                  <option value="others">Others</option>
                </select>
              </span>
              <div className="row">
                {sortedIlustrationCount.length > 0 &&
                  sortedIlustrationCount.map((ilustrationInfo) => {
                    // Obtener el ID y la cantidad de favoritos del elemento
                    const [ilustrationId, favoritesCount] = ilustrationInfo;
                    // Buscar la ilustración correspondiente usando el ID
                    const ilustration = ilustrationsByCategory.find((ilustration) => ilustration.id === parseInt(ilustrationId));

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
                          category={ilustration.category}
                        />
                      </div>
                    );
                  })}
              </div>
            </>
          )}
        </div>

        {creatorsToShow.map((creator) => (
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
                      category={ilustration.category}
                    />
                  </div>
                ))}
            </div>
            <button
              className="btn btn-success mt-3"
              onClick={() => redirectProfile(creator)}> Ver mas de {creator}

            </button>
          </div>
        ))}
      </div>

      <Pagination
        creatorsPerPage={creatorsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </>
  );
};

export default ExplorePage;

