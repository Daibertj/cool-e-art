import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

import { Card } from "../component/Card.js";
import { Rombo } from "../component/Rombo.jsx";
import "../../styles/rombo.css"

import daibert from "../../img/Daibert.jpg"
import victor from "../../img/Victor.jpg"
import edgar from '../../img/Edgar.png'
import { Link } from 'react-router-dom'
import geeks from '../../img/geeks.png'


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
          <header className="major text-center">
            <h2>¿Pensabas que el arte había muerto?
              <br />Acá está Cool E Art
            </h2>
            
          </header>

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
                  Cool E Art es una comunidad acogedora que da la bienvenida a artistas, expertos y aficionados del arte. Todos pueden compartir y apreciar obras increíbles de diversas disciplinas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className="card-container col">
            <div className="card-home">
              <div className="front-content">
                <p>Cool E Art</p>
              </div>
              <div className="content">
                <p>
                  En la era tecnológica actual, Cool E Art ofrece una alternativa para artistas gráficos como pintores, dibujantes, diseñadores y fotógrafos. Es una página web diseñada exclusivamente para llevar sus obras al mundo y trascender en el tiempo.
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
                  En Cool E Art, puedes encontrar el arte más cool de internet. Explora una variedad de obras únicas y creativas que antes podrían haber estado guardadas y ahora pueden llegar a todos los rincones del mundo. No esperes más, ¡únete a esta comunidad artística!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container-fluid text-center">
        <div id="banner">
          <h1 className="display-4 mb-4">Sobre los creadores de Cool E Art</h1>
          <p className="lead fs-5">
            Somos un grupo de nuevos desarrolladores con ganas de aportar nuestro grano de arena en este mundo del arte del dibujo. Por eso hemos ideado una página donde los artistas pueden mostrar su arte. El momento es ahora de crear e imaginar las diversas posibilidades.
          </p>
        </div>


        <div className='my-5 text-white '>

          <div className='row justify-content-center m-5 p-4'>

            <h4><Link to="https://github.com/tuquepantin"><img className="perfiles rounded-circle " src={victor} /></Link>  Victor Pantin</h4>
            <h4>Daibert Ramirez <Link to="https://github.com/Daibertj"><img className="perfiles rounded-circle  " src={daibert} /></Link></h4>
            <h4><Link to="https://github.com/edgardiaz1212"><img className="perfiles rounded-circle  " src={edgar} /></Link> Edgar Diaz</h4>
          </div>
        </div>

        <div className='container p-3 text-white'>
          <h4>La magia</h4>
          <img className="perfiles-geeks rounded-circle p-2 " src={geeks} />
          <h5><Link to="https://4geeksacademy.com" className='text-center '>4GeeksAcademy</Link></h5>

        </div>
      </div>

    </>

  );
};
