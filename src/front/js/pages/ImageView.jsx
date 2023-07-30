import React, { useContext } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

function ImageView() {
  const { id } = useParams()
  const { store } = useContext(Context)
  const { ilustrationData } = store
  const ilustration = ilustrationData.find((ilustration) => ilustration.id === parseInt(id))
  const navigate = useNavigate()

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="container">
      <div className="text-center p-5">
        <img
          src={ilustration.image}
          alt={ilustration.title}
        />
        <h1 className="text-white">{ilustration.title}</h1>
        <p>{ilustration.description}</p>

      </div>
      <div className="p-4">
        <button className="btn btn-secondary" onClick={goBack}>Go back</button>
      </div>
    </div>
  )
}

export default ImageView