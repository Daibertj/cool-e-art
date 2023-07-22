import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const initialState = {
    name: "",
    lastname: "",
    email: "",
    password: "",
    instagram: "",
    facebook: "",
    twitter: "",
    image: "",
    alias: ""
};


const EditUser = () => {
    const [user, setUser] = useState(initialState);
    const { actions } = useContext(Context);
    const handleChange = ({ target }) => {
        setUser({ ...user, [target.name]: target.value });
    };
    const handleEdit = async () => {
        const formData = new FormData();

      formData.append("name", user.name.trim());
      formData.append("lastname", user.lastname.trim());
      formData.append("email", user.email.trim());
      formData.append("password", user.password.trim());
      formData.append("image", user.image);
      formData.append("alias", user.alias.trim());
      formData.append("instagram", user.instagram.trim());
      formData.append("facebook", user.facebook.trim());
      formData.append("twitter", user.twitter.trim());
      const edit = await actions.updateUser(formData)
      if (edit ===  200) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Edicion Exitosa',
          showConfirmButton: false,
          timer: 1000
        })
        console.log("Registro exitoso")
        
      } else {
        Swal.fire({
          title: "Error!",
          text: "Error en la edicion",
          icon: "error",
          confirmButtonText: "OK",
        });}
    }
    return (
        <>
            <button type="button" className="btn btn-secondary bg-dark" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i className="fas fa-pencil-alt"></i>
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content  bg-secondary">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modifica tus datos</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
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
                                <div className="form-group  ">
                                    <label htmlFor="instagram">Instagram:</label>
                                    <input
                                        className="form-control "
                                        type="text"
                                        value={user.instagram}
                                        id="instagram"
                                        name="instagram"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group  ">
                                    <label htmlFor="facebook">Facebook:</label>
                                    <input
                                        className="form-control "
                                        type="text"
                                        value={user.facebook}
                                        id="facebook"
                                        name="facebook"
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="form-group  ">
                                    <label htmlFor="twitter">Twitter:</label>
                                    <input
                                        className="form-control "
                                        type="text"
                                        value={user.twitter}
                                        id="twitter"
                                        name="twitter"
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

                               
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleEdit}>Save changes</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}

export default EditUser