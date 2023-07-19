import React from 'react'
import coolLogo from "../../img/logo_no_back.png";
function AboutUs() {
    return (
        <div className='container vh-100 border border-danger '>
            <div>
                <h1>About Us</h1>
            </div>
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
           
            <div>
                <h2>Miembros</h2>

            </div>
            </div>
    )
}

export default AboutUs