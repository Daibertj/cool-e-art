import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import coolLogo2 from "../../img/Cool-e-Art-04.png";
import { Favorite2 } from "./Favorite2.jsx";

const initialState = {
  email: "",
  password: "",
};

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  const { userData, favoriteData } = store;
  const [user, setUser] = useState(initialState);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const response = await actions.login(user);
    if (response == 200) {
      Swal.fire({
        title: "Usuario logueado con éxito",
        icon: "success",
        showConfirmButton: false,
        timer: 1000
      });
      await actions.getUserData;
      navigate(`/myprofile/${userData.alias}`);
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

    <nav className="navbar navbar-expand-lg navbar-dark  ">
      <div className="container text-white">
        <Link className="navbar-brand text-white bold-text text-capitalize fs-3 fw-bold fst-italic" to="/"><img className="logonav " src={coolLogo2} /></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">


            {store.token && (
              <>
                <li className="nav-item">
                  <Link to="/explorepage" className="nav-link text-white">Explore&nbsp;&nbsp;&nbsp;|</Link>
                </li>
                <li className="nav-item">
                  <Link to={`/myprofile/${userData.alias}`} className="nav-link text-white">My Profile&nbsp;&nbsp; |</Link>
                </li>
                <li className="nav-item">
                  <Link to="/upload" className="nav-link text-white">Upload Creation &nbsp;&nbsp; |</Link>
                </li>
              </>
            )}
            <li className="nav-item"><Link to={`/aboutus`} className="nav-link text-white">About Us</Link></li>

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
                <div className="dropdown">
                  <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    My favorites
                    <span className="badge bg-secondary">{favoriteData.length}</span>
                  </button>
                  <ul className="dropdown-menu ul">
                    <li><a className="dropdown-item" href="#"></a></li>
                    {favoriteData.map((ilustration) => (
                      <div className="col" key={ilustration.id}>
                        {ilustration && (
                          <Favorite2
                            image={ilustration.image}
                            title={ilustration.title}
                            description={ilustration.description}
                            user={ilustration.user}
                            id={ilustration.id}
                            alias={userData.alias}
                            category={ilustration.category}
                            ilustration_id={ilustration.ilustration_id}
                          />)}
                        <div className="btn-group">
                        </div>
                      </div>
                    ))}
                  </ul>
                </div>
                <span className="m-2">Hey, {userData.name}!</span>

                <button className="Btn"
                  onClick={handleLogout}>
                  <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
                  <div className="text">Logout</div>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>


  );
};
