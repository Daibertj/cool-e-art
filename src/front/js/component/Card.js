import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Card = ({id, title,description, image, user}) => {
	return (

		<div className="col">
            <div className="card"     >
                
                    
                        <img 
                        src={image }
                        className="card-img-top" 
                        alt={title}
                        style={{width:"100%", height:"auto"}}
                        />
            

                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description ? description : "Sin descripcion" }</p>
                            <Link to={`/profile/${user.alias}`}><h5>{user.name}</h5> </Link>  
                            
                            
                        </div>

                    
            </div>
        </div>

        
      
    );
  };
