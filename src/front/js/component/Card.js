import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Card = ({id, title,description, image, user}) => {
	return (

		<div className="col">
            <div className="card"     >
                
                    
                        <img 
                        src={image }
                        className="card-img-top" 
                        alt={title}
                        />
            

                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description ? description : "Sin descripcion" }</p>
                            <h5>{user.name}</h5>
                        </div>

                    
            </div>
        </div>

        
      
    );
  };
