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
					<Link to="/demo">
						<button className="btn btn-primary">Check the Context in action</button>
					</Link>
					</div> */}

				<div class="dropdown">
          <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            Login
          </button>
        <form class="dropdown-menu p-4">
        <div class="mb-3">
          <label for="exampleDropdownFormEmail2" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
        </div>
        <div class="mb-3">
          <label for="exampleDropdownFormPassword2" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
        </div>
        <div class="mb-3">
          <div class="form-check">
            <input type="checkbox" class="form-check-input" id="dropdownCheck2"/>
            <label class="form-check-label" for="dropdownCheck2">
              Remember me
            </label>
          </div>
        </div>
          <button type="submit" class="btn btn-primary">Sign in</button>
        </form>
      </div>
			</div>

			
		</nav>
	);
};
