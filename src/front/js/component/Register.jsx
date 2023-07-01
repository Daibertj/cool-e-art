import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  password: "",
};

const Register = () => {
  const [user, setUser] = useState(initialState);
  const { actions } = useContext(Context);
  const handleSignup = async () => {
    if (!user.name || !user.email || !user.password) {
      console.log("Por favor completa todos los campos");
      return;
    }

    try {
      const response = await actions.registerUser(user);
      if (response === 200) {
        console.log("Registro exitoso");
      } else {
        console.log("Error en el registro");
      }
    } catch (error) {
      console.log("Error en la solicitud de registro:", error);
    }
  };

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  return (
    <div className="container-fluid  w-25 border border-danger ">
      <h1>Registe</h1>
      <form>
        <div className="form-group  ">
          <label for="name">Name:</label>
          <input
            className="form-control "
            type="text"
            value={user.name}
            id="name"
            name="name"
            onChange={handleChange}
          />
        </div>
        <div className="form-group ">
          <label>Last Name:</label>
          <input
            className="form-control"
            type="text"
            value={user.lastnamename}
            id="lastname"
            name="lastname"
            onChange={handleChange}
          />
        </div>
        <div className="form-group ">
          <label>Email:</label>
          <input
            className="form-control"
            type="email"
            value={user.email}
            id="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group ">
          <label>Password:</label>
          <input
            className="form-control"
            type="password"
            value={user.password}
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-primary mt-3"
          type="button"
          onClick={handleSignup}
        >
          Register
        </button>
      </form>
      {/* <p>
        Ya tienes una cuenta? <Link to="/">Inicia sesión aquí</Link>
      </p> */}
    </div>
  );
};

export default Register;
