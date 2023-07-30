import React from 'react'
import daibert from "../../img/Daibert.jpg"
import victor from "../../img/Victor.jpg"
import edgar from '../../img/Edgar.png'
import { Link } from 'react-router-dom'
import geeks from '../../img/geeks.png'

function AboutUs() {


    return (
        <>
            <div className="container text-center">
                <div id="banner">
                    <h1 className="display-4 mb-4">Bienvenidos a Cool-E-Art</h1>
                    <p className="lead fs-5">
                        ¡Bienvenidos a nuestro mundo artístico! Somos un grupo de apasionados desarrolladores que han unido fuerzas para crear un espacio dedicado al arte del dibujo.
                        <br />Estamos emocionados por aportar nuestro grano de arena y ofrecer una plataforma donde los talentosos artistas pueden mostrar su increíble arte.Nuestra página es un lienzo en blanco, listo para recibir las más diversas y maravillosas obras de arte.
                        <br />Queremos ser testigos de la magia que surge cuando los artistas dejan volar su imaginación y plasman en sus dibujos infinitas posibilidades.
                    </p>
                </div>
                <div className='my-5 text-white '>
                    <h2 className="display pt-5">Miembros</h2>
                    <div className='row justify-content-center m-5 p-4'>

                        <h4><Link to="https://github.com/tuquepantin"><img className="perfiles rounded-circle " src={victor} /></Link>  Victor Pantin</h4>
                        <h4>Daibert Ramirez <Link to="https://github.com/Daibertj"><img className="perfiles rounded-circle  " src={daibert} /></Link></h4>
                        <h4><Link to="https://github.com/edgardiaz1212"><img className="perfiles rounded-circle  " src={edgar} /></Link> Edgar Diaz</h4>
                    </div>
                </div>
                <div className='container p-4 text-white'>
                    <h2>Agradecimientos</h2>
                    <img className="perfiles rounded-circle p-5 " src={geeks} />
                    <h4><Link to="https://4geeksacademy.com" className='text-center '>4GeeksAcademy</Link></h4>
                </div>
            </div>
        </>
    )
}

export default AboutUs