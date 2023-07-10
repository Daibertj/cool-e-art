import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

import { Card } from "../component/Card.js";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 container">
			
      <div className="row">
          {store.ilustrationData.map((ilustration) => 
             (
              <Card
                key={ilustration.id}
                title={ilustration.title}
                description={ilustration.description}
                image={ilustration.image}
                user={ilustration.user.name}
                id={ilustration.id}
              />
              
            ))}
        </div>
		</div>
	);
};
