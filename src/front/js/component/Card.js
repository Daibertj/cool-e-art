import React, { useContext } from "react";
import { Context } from "../store/appContext";

export const Card = (props) => {
    console.log(props)
    
    return (
      <div>
        
          <div className="card" style={{ width: "18rem" }} >
            <img src={props.image} className="card-img-top" alt={props.title} />
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text">{props.description}</p>
              <h5>@{props.user}</h5>
            </div>
          </div>
        
      </div>
    );
  };
