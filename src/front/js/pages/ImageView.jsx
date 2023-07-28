import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function ImageView() {
 const {id}=useParams()
 const {store} =useContext(Context)
const {ilustrationData} = store
const ilustration = ilustrationData.find((ilustration)=>ilustration.id === parseInt(id))

return (
    <div className="container">
      <div className="text-center p-5"> 
        <img 
        src={ilustration.image} 
        alt={ilustration.title}
        />
        <h1>{ilustration.title}</h1>
        <p>{ilustration.description}</p>

    </div>

    </div>
  )
}

export default ImageView