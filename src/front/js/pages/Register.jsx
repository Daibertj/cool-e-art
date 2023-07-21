import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  image: "",
  alias:""
};

const Register = () => {
  const [user, setUser] = useState(initialState);
  const { actions } = useContext(Context);
  const navigate = useNavigate();
  const Swal = require("sweetalert2");
  
  const handleSignup = async () => {
    if (!user.name || !user.email || !user.password || !user.alias) {
      console.log("Por favor completa todos los campos");
      Swal.fire({
        title: "Error!",
        text: "Por favor completa todos los campos",
        icon: "error",
        confirmButtonText: "OK",
      });
      return;
    }
    
    try {
      const formData = new FormData();

      formData.append("name", user.name);
      formData.append("lastname", user.lastname);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("image", user.image);
      formData.append("alias", user.alias)

      const response = await actions.registerUser(formData);

      if (response === 201 || 200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Registro Exitoso',
          showConfirmButton: false,
          timer: 1000
        })
        console.log("Registro exitoso")
        navigate("/");
      } else {
        Swal.fire({
          title: "Error!",
          text: "Error en el registro",
          icon: "error",
          confirmButtonText: "OK",
        });

        console.log("Error en el registro")
      }
    } catch (error) {
      console.log("Error en la solicitud de registro:", error)
    }
  };

  const handleChange = ({ target }) => {
    setUser({ ...user, [target.name]: target.value });
  };

  return (
    <div className="container-fluid text-white w-25  ">
      <h1>Register</h1>
      <form>
        <div className="form-group  ">
          <label htmlFor="name">Name:</label>
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
            value={user.lastname}
            id="lastname"
            name="lastname"
            onChange={handleChange}
          />
        </div>
        <div className="form-group "> 
          <label>Alias:</label>
          <input 
          className="form-control"
          type="text"
          value={user.alias}
          id="alias"
          name="alias"
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
        <div className="form-group">
          <label>Ingresa Imagen de Profile </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={({ target }) =>
              setUser({ ...user, image: target.files[0] })
            }
            
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

export default Register
