import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const initialState = {
  email: "",
  password: "",
};

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { userData } = store;
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await actions.login(user);
    if (response == 200) {
      Swal.fire({
        title: "Usuario logueado con éxito",
        icon: "success",
        confirmButtonText: "Aceptar",
      });
      await actions.getUserData;
      navigate(`/`);
    }
    if (response == 400) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Bad Credentials!",
      });
    }
  };

  const handleLogout = () => {
    actions.logout()
    navigate("/")
  }

  const handleChange = ({ target }) => {
    setUser({
      ...user,
      [target.name]: target.value,
    });
  };
  return (

    <nav className="navbar navbar-expand-lg navbar-secondary  ">
      <div className="container text-white">
        <Link className="navbar-brand text-white bold-text text-capitalize fs-3 fw-bold fst-italic" to="/">Cool-e-Art</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            {store.token && (
              <>
                <li className="nav-item">
                  <Link to="/explorepage" className="nav-link text-white">Creators</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/myprofile/${userData.alias}`} className="nav-link text-white">My Profile</Link>
                </li>
                <li className="nav-item">
                  <Link to="/upload" className="nav-link text-white">Upload Creation</Link>
                </li>
              </>
            )}
          </ul>

          <div className="ms-auto d-flex">
            {!store.token && (
              <>
                <div className="me-2">
                  <Link to="/register" className="btn btn-secondary">Registro</Link>
                </div>
                <div className="dropdown">
                  <button
                    type="button"
                    className="btn btn-secondary dropdown-toggle"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    data-bs-auto-close="outside"
                  >
                    Login
                  </button>
                  <form className="formulario w-100 dropdown-menu dropdown-menu-end p-4">
                    <div className="mb-3" >
                      <label
                        htmlFor="exampleDropdownFormEmail2"
                        className="form-label"
                      >
                        Email address
                      </label>

                      <input
                        onChange={handleChange}
                        name="email"
                        type="email"
                        className="form-control"
                        id="exampleDropdownFormEmail2"
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="exampleDropdownFormPassword2"
                        className="form-label"
                      >
                        Password
                      </label>
                      <input
                        onChange={handleChange}
                        name="password"
                        type="password"
                        className="form-control"
                        id="exampleDropdownFormPassword2"
                        placeholder="Password"
                      />
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="dropdownCheck2"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="dropdownCheck2"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <button
                      type="button"
                      className="loginButton btn btn-secondary w-100 mt-3"
                      onClick={() => handleLogin()}
                    >
                      Sign in
                    </button>
                  </form>
                </div>
              </>
            )}

            {store.token && (
              <>
                <span className="m-2">Hey, {userData.name}!</span>



                <button
                  className=" btn btn-secondary "
                  onClick={handleLogout}
                >
                  Log Out
                </button>

              </>
            )}
          </div>
        </div>
      </div>
    </nav>


  );
};
