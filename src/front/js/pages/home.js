import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";

import { Card } from "../component/Card.js";
import "../../styles/home.css";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5 container">
			<div className="row row-cols-1 row-cols-md-3 g-4">
              <div className="col">
                <div className="card">
                <Card/>
                </div>
              </div>
              <div className="col">
                <div className="card">
                <Card/>
                </div>
              </div>
              <div className="col">
                <div className="card">
                <Card/>
                </div>
              </div>
              <div className="col">
                <div className="card">
                <Card/>
                </div>
              </div>
              <div className="col">
                <div className="card">
                <Card/>
                </div>
              </div>
              <div className="col">
                <div className="card">
				<Card/>
                </div>
              </div>
            </div>
		</div>
	);
};
