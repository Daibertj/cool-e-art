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

  const imageBack = {
    backgroundImage: "url()",
  };
  return (
    <>
      <div>
        <img className="padre " style={{ height: "700px" }} src={ilustration.image} alt="" />
        <div class="card negro hijo  " style={{ width: "25rem" }}>
          <img
            src={ilustration.image}
            alt={ilustration.title}
            style={{ height:"400px" }}
          />
          <div class="card-body">
            <h4 className="text-white">{ilustration.title}</h4>
            <p>{ilustration.description}</p>
            <Link to={`/profile/${ilustration.user.alias}`} style={{ textDecoration: 'none', color: 'grey' }}><p>{ilustration.user.alias}</p> </Link>
            <span className="badge rounded-pill bg-light text-dark  ">{ilustration.category}</span>
            
          </div>
          <button className="btn btn-secondary" onClick={goBack}>Go back</button>
        </div>
      </div>
    </>

  )
}

export default ImageView