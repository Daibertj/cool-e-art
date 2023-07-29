import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

import { Card } from "../component/Card.js";
import { Rombo } from "../component/Rombo.jsx";
import "../../styles/rombo.css"

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <div className="hero-text white-color">
        <div className="container-fluid text-center" id="banner">
          <h1 className="white-color text-uppercase font-700">Cool e Art</h1>
          <h2>
            Buscando artistas con inspiracion, arte en todo su explendor, ven comparte y conecta
            <br />
            Bienvenido a Cool-e-Art
          </h2>
          <h4 className="white-color text-uppercase mt-20">+Inpiracion, <span className="font-700">+Ilustradores</span> | 1 Lugar</h4>

        </div>
      </div>


      <div className="container p-5">
        <div className="row">
          <div className="col-12">
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
      <section id="main" className="container aca">

        <section className="box special">
          <header className="major">
            <h2>¿Pensabas que el arte había muerto?
              <br />Aca esta Cool E Art
            </h2>
            <p>El lugar de ilustradores para ilustradores</p>
          </header>
          <span className="image featured"><img src="images/pic01.jpg" alt="" /></span>
        </section>

       <div className="row m-3">
        
       <div className=" col card-container p-3">
          <div className="card-home">
            <div className="front-content">
              <p>El arte como forma de catarsis</p>
            </div>
            <div className="content">
              
              <p>
              A lo largo de la historia, el arte ha sido un medio de catarsis y desahogo para la humanidad, trascendiendo desgracias humanas como guerras y pandemias. Ha sido una manera de expresar emociones y superar situaciones difíciles.
              </p>
            </div>
          </div>
        </div>

        
        <div className="col card-container">
          <div className="card-home">
            <div className="front-content">
              <p>Una comunidad para artistas y aficionados</p>
            </div>
            <div className="content">
              
              <p>
              Cool-E-Art es una comunidad acogedora que da la bienvenida a artistas, expertos y aficionados del arte. Todos pueden compartir y apreciar obras increíbles de diversas disciplinas.
              </p>
            </div>
          </div>
        </div>

       </div>

        <div className="row m-3">
<div className="card-container col">
          <div className="card-home">
            <div className="front-content">
              <p>Cool-E-Art</p>
            </div>
            <div className="content">
              
              <p>
              En la era tecnológica actual, Cool-E-Art ofrece una alternativa para artistas gráficos como pintores, dibujantes, diseñadores y fotógrafos. Es una página web diseñada exclusivamente para llevar sus obras al mundo y trascender en el tiempo.
              </p>
            </div>
          </div>
        </div>
        <div className="card-container col">
          <div className="card-home">
            <div className="front-content">
              <p>Descubre el arte más cool en internet</p>
            </div>
            <div className="content">
              
              <p>
              En Cool-E-Art, puedes encontrar el arte más cool de internet. Explora una variedad de obras únicas y creativas que antes podrían haber estado guardadas y ahora pueden llegar a todos los rincones del mundo. No esperes más, ¡únete a esta comunidad artística!
              </p>
            </div>
          </div>
        </div>


        </div>

        
      </section>

    </>

  );
};
