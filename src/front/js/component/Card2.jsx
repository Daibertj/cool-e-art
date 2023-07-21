import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from "../store/appContext";

function Card2({ id, title, description, image, alias }) {
    const { store, actions } = useContext(Context)
    return (
    <>
    <div className="card " style={{width: "25rem"}}>
    <Link to={`/imageview/${id}`}>
                        <img
                            src={image}
                            className="card-img-top"
                            alt={title}
                           
                            
                        />
                    </Link>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description ? description : "Sin descripcion"}</p>
    <Link to={`/profile/${alias}`} style={{ textDecoration: 'none', color: 'grey' }}><p>{alias}</p> </Link>
    <button
                    className={store.favoriteData.some(favorite=> favorite.ilustration_id == id) ? "btn btn-secondary fa-solid fa-heart": "btn btn-outline-secondary fa-solid fa-heart"}
                    onClick={() => actions.addFavorite(id)}
                    ></button>
  </div>
</div>
    </>
  )
}

export default Card2