import React, {useContext} from "react";
import { Context } from "../store/appContext";
import { Card } from "../component/Card";



const ExplorePage = () => {

  const {actions,store} = useContext(Context)

    return(
        <>
          <div className="container">
            <div className="input-group my-3">
              <span className="input-group-text" id="inputGroup-sizing-default">Busqueda</span>
              <input 
              type="text" 
              className="form-control" 
              aria-label="Sizing example input" 
              aria-describedby="inputGroup-sizing-default"
              placeholder="que tipo de imagen estas buscando?"
              />
            </div>
            
              <div className="row">
                {store.ilustrations.map((ilustration)=> {
                  return(
                    <Card title={ilustration.title} description={ilustration.description} image={ilustration.url_image}/>
                  )
                })}
                
              </div>
              
              
             
              
             
            
          </div>
        </>

    )

}

export default ExplorePage