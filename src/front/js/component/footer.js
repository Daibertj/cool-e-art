import React, { Component } from "react";
import coolLogo from "../../img/logo_no_back.png";
import { Link } from "react-router-dom";

export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center navbar sticky-xl-bottom ">
		<img className="logo1 " src={coolLogo} />
		<ul className="nav justify-content-center border-bottom pb-3 mb-3">

			<li className="nav-item "><Link to="/" className="text-white px-2 ">Home</Link></li>

			<li className=""><Link to="#" className="text-white px-2 ">About</Link></li>
		</ul>
		<p className="text-center ">© 2023 Cool-e-art, Inc</p>


	</footer>
);
