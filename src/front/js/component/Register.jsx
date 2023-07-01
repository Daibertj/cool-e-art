import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import Swal from 'sweetalert2'


const initialState = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  image:""
};

const Register = () => {
  const [user, setUser] = useState(initialState);
  const { actions } = useContext(Context);
  const navigate = useNavigate()
  const Swal = require('sweetalert2')

  const handleSignup = async () => {
    if (!user.name || !user.email || !user.password) {
      console.log("Por favor completa todos los campos");
      Swal.fire({
        title: 'Error!',
        text: 'Por favor completa todos los campos',
        icon: 'error',
        confirmButtonText: 'OK'
      })
      return;
    }

    try {
      const formData = new FormData()

        formData.append("name", user.name)
        formData.append("lastname", user.lastname)
        formData.append("email", user.email)
        formData.append("password", user.password)
        formData.append("avatar", user.image)

        const response = actions.registerUser(formData)

      if (response === 200) {
        console.log("Registro exitoso");
        navigate("/")
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Error en el registro',
          icon: 'error',
          confirmButtonText: 'OK'
        })

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
    <div className="container-fluid  w-25  ">
      <h1>Register</h1>
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
        <div className="form-group">
                                <label>Ingresa Avatar </label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="image"
                                    name="image"
                                                                        onChange={({ target }) => setUser({ ...user, avatar: target.files[0] })}
                                //value={user.avatar}
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
