import React from 'react'
import daibert from "../../img/Daibert.jpg"
import victor from "../../img/Victor.jpg"
import edgar from '../../img/Edgar.png'
import fondo from "../../img/pic04.jpg"
import { Link } from 'react-router-dom';


function AboutUs() {


    return (
        <>
            <div className="container text-center">
                <div id="banner">
                    <h1 className="display-4 mb-4">Bienvenidos a Cool-E-Art</h1>
                    <p className="lead fs-5">
                        Somos un grupo de nuevos desarrolladores con ganas de aportar nuestro grano de arena en este mundo del arte del dibujo. Por eso hemos ideado una página donde los artistas pueden mostrar su arte. El momento es ahora de crear e imaginar las diversas posibilidades.
                    </p>
                </div>


                <div className='my-5 text-white '>
                    <h2 className="display-5">Miembros</h2>
                    <div className='row justify-content-center'>

                        <h4><Link to="https://github.com/tuquepantin"><img className="perfiles rounded-circle " src={victor} /></Link>  Victor Pantin</h4>
                        <h4>Daibert Ramirez <Link to="https://github.com/Daibertj"><img className="perfiles rounded-circle  " src={daibert} /></Link></h4>
                        <h4><Link to="https://github.com/edgardiaz1212"><img className="perfiles rounded-circle  " src={edgar} /></Link> Edgar Diaz</h4>
                    </div>
                </div>

                <div className='container p-4 text-white'>
                    <h2>Agradecimientos</h2>
                    <h4><Link to="https://4geeksacademy.com" className='text-center'>4GeeksAcademy</Link></h4>

                </div>
            </div>




        </>
    )
}

export default AboutUs