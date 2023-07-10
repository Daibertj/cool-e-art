import React, { useContext } from "react";
import { Link } from "react-router-dom";



export const Card = ({id, title,description, image, user}) => {
	return (

		<div className="col">
            <div className="card"     >
                
                    <Link to={`/imageview/${id}`}>
                        <img 
                        src={image }
                        className="card-img-top" 
                        alt={title}
                        style={{width:"100%", height:"auto"}}
                        />
            </Link>

                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description ? description : "Sin descripcion" }</p>
                            <Link to={`/profile/${user.alias}`} style = {{textDecoration:'none', color : 'grey'}}><p>{user.name}</p> </Link>  
                            
                            
                        </div>

                    
            </div>
        </div>

        
      
    );
  };
