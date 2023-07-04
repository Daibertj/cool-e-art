import React, {useContext, useState} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2"

const initialState = {
  email: "",
  password: ""
}

export const Navbar = () => {

  const { actions } = useContext(Context);

  const [user, setUser] = useState(initialState)

  const handleLogin = async () => {
    let response = await actions.login(user);
    if (response == 200) {
      Swal.fire({
        title: "Usuario logueado con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
      })
    }
    if (response == 400) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
    }
  };

  const handleChange = ({ target }) => {
    setUser({
      ...user, [target.name]: target.value
    })
  }
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Ilustrations</span>
				</Link>
				<div className="d-flex gap-2">
								

          <Link className="btn btn-primary ms-2" to="/register">
						Registro
					</Link>

				<div className="dropdown">
          <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
            Login
          </button>
        <form className="dropdown-menu p-4">
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormEmail2" className="form-label">Email address</label>
          <input onChange={handleChange} name="email" type="email" className="form-control" id="exampleDropdownFormEmail2" placeholder="email@example.com"/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleDropdownFormPassword2" className="form-label">Password</label>
          <input onChange={handleChange} name="password" type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password"/>
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

      </div>
			
		</nav>
	);
};
