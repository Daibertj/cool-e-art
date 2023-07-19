import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

import { Card } from "../component/Card.js";
import { Rombo } from "../component/Rombo.jsx";
import "../../styles/rombo.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
    <Rombo />
		// <div className="text-center mt-5 container">
			
    //   <div className="row">
    //       {store.photos.map((photo) => 
    //          (
    //           <Card
    //             key={photo.id}
    //             title={photo.photographer}
    //             description={photo.photographer}
    //             image={photo.src.medium}
    //             user={photo.photographer}
    //             id={photo.id}
    //           />
              
    //         ))}
    //     </div>
		// </div>
	);
};
