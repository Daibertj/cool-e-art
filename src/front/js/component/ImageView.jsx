import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function ImageView() {
 const {id}=useParams()
 const {store} =useContext(Context)
const {ilustrationData} = store
console.log(id)
const ilustration = ilustrationData.find((ilustration)=>ilustration.id === parseInt(id))
return (
    <div className="text-center">
        <img 
        src={ilustration.image} 
        alt={ilustration.title}
        />

    </div>
  )
}

export default ImageView