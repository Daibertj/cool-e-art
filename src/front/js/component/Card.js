import React, { useContext } from "react";
import { Context } from "../store/appContext";


export const Card = ({title,description, image}) => {
	return (

		<div className="col">
            <div className="card"     >
                
                    
                        <img 
                        src={image ? image : "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png"}
                        className="card-img-top" 
                        alt="..."
                        />
            

                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description ? description : "Sin descripcion" }</p>
                            <h5>@Daibert</h5>
                        </div>

                    
            </div>
        </div>

        
      
    );
  };
