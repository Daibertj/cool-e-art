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
            <h2>Introducing the ultimate mobile app
              <br />
              for doing stuff with your phone</h2>
            <p>Blandit varius ut praesent nascetur eu penatibus nisi risus faucibus nunc ornare<br />
              adipiscing nunc adipiscing. Condimentum turpis massa.</p>
          </header>
          <span className="image featured"><img src="images/pic01.jpg" alt="" /></span>
        </section>

        <section className="box special features">
          <div className="features-row">
            <section>
              <span className="icon solid major fa-bolt accent2"></span>
              <h3>Magna etiam</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
            <section>
              <span className="icon solid major fa-chart-area accent3"></span>
              <h3>Ipsum dolor</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
          </div>
          <div className="features-row">
            <section>
              <span className="icon solid major fa-cloud accent4"></span>
              <h3>Sed feugiat</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
            <section>
              <span className="icon solid major fa-lock accent5"></span>
              <h3>Enim phasellus</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
            </section>
          </div>
        </section>

        <div className="row">
          <div className="col-6 col-12-narrower">

            <section className="box special">
              <span className="image featured"><img src="images/pic02.jpg" alt="" /></span>
              <h3>Sed lorem adipiscing</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              <ul className="actions special">
                <li><a href="#" className="button alt">Learn More</a></li>
              </ul>
            </section>

          </div>
          <div className="col-6 col-12-narrower">

            <section className="box special">
              <span className="image featured"><img src="images/pic03.jpg" alt="" /></span>
              <h3>Accumsan integer</h3>
              <p>Integer volutpat ante et accumsan commophasellus sed aliquam feugiat lorem aliquet ut enim rutrum phasellus iaculis accumsan dolore magna aliquam veroeros.</p>
              <ul className="actions special">
                <li><a href="#" className="button alt">Learn More</a></li>
              </ul>
            </section>

          </div>
        </div>

      </section>

    </>

  );
};
