import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Ilustrations</span>
				</Link>
				{/* <div className="ml-auto">
					<Link to="/">
						<button className="btn btn-primary">Boton</button>
					</Link>
					<Link to="/register">
						<button className="btn btn-primary ms-2">Registro</button>
					</Link>
					</div> */}

				<div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            Login
          </button>
        <form className="dropdown-menu p-4">
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormEmail2" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
        </div>
        <div className="mb-3">
          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="dropdownCheck2"/>
            <label className="form-check-label" htmlFor="dropdownCheck2">
              Remember me
            </label>
          </div>
        </div>
          <button type="submit" className="btn btn-primary">Sign in</button>
        </form>
      </div>
			</div>

			
		</nav>
	);
};
