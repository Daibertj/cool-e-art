import React from 'react'
import coolLogo from "../../img/logo_no_back.png";
import { Link } from 'react-router-dom';


function AboutUs() {
    return (
        <>

            <div id="banner">
                <h1>About Us</h1>
            </div>
            <div className='container d-flex border border-danger ' >
                <img className="logo1 border border-danger " src={coolLogo} />

                <div>
                    <p className="text-break   border border-danger">
                        ¿Pensabas que el arte había muerto?
                        De hecho el arte en todas sus facetas ha trascendido toda clase de desgracias humanas, entre ellas guerras, pandemias y muchas otras, siendo un medio de catarsis y desahogo para las malas situaciones vividas por la humanidad.
                        En esta era tecnológica que cada vez avanza más rápido, aunque a veces ni nos damos cuenta, llegó una alternativa para los artistas gráficos (léase pintores, dibujantes,
                        diseñadores, fotógrafos, etc...) para montarse en la ola tecnológica y trascender a través de su arte en el tiempo, con nuestra página web Cool-E-Art; exclusivamente diseñada para llevar a todos los rincones del mundo esas obras que tenías guardando polvo.
                        Artistas, expertos y aficionados son bienvenidos a nuestra comunidad ¿Qué esperas? ¡Ven a ver!
                    </p>

                </div>
            </div>
            <div className='space'>
                <br />

            </div>
            <div className='container '>
                <h2>Miembros</h2>
                <div className='row'>

                    <h4><Link to="https://github.com/tuquepantin">imagen</Link>  Victor Pantin</h4>
                    <h4>Daibert Ramirez <Link to="https://github.com/Daibertj">iamgen</Link></h4>
                    <h4><Link to="https://github.com/edgardiaz1212">imagen</Link> Edgar Diaz</h4>
                </div>
            </div>

            <div className='container p-4'>
            <h2>Agradecimientos</h2>
            
            <Link to="https://4geeksacademy.com" className='text-center'>4GeeksAcademy</Link>
            </div>

        </>
    )
}

export default AboutUs