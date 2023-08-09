import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  name: "",
  lastname: "",
  email: "",
  password: "",
  image: "",
  alias: ""
};

const Register = () => {
  const [user, setUser] = useState(initialState);
  const { actions } = useContext(Context);
  const navigate = useNavigate();


  const handleSignup = async () => {
    if (!user.name || !user.email || !user.password || !user.alias) {
      console.log("Por favor completa todos los campos");
      toast.error("Please fill all fields")
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
        toast.success("Successfully Registered")
        console.log("Registro exitoso")
        //retrasa el cambio a home por 2 segundos
        setTimeout(() => {
          navigate("/")
        }, 2000)

      } else {
        toast.error("Error registering")

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
    <>
      <ToastContainer theme="dark" position="top-center" pauseOnFocusLoss={false} autoClose={3000} hideProgressBar />
      <div className="container-fluid text-white w-25 my-4 ">
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
            className="btn btn-secondary mt-3"
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
    </>
  );
};

export default Register
