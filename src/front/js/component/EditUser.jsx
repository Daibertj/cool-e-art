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
        if (edit === 200) {
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
            });
        }
    }
    return (
        <>
            <button type="button" className="edit-button" data-bs-toggle="modal" data-bs-target="#exampleModal">

                <svg class="edit-svgIcon" viewBox="0 0 512 512">
                    <path d="M410.3 231l11.3-11.3-33.9-33.9-62.1-62.1L291.7 89.8l-11.3 11.3-22.6 22.6L58.6 322.9c-10.4 10.4-18 23.3-22.2 37.4L1 480.7c-2.5 8.4-.2 17.5 6.1 23.7s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L387.7 253.7 410.3 231zM160 399.4l-9.1 22.7c-4 3.1-8.5 5.4-13.3 6.9L59.4 452l23-78.1c1.4-4.9 3.8-9.4 6.9-13.3l22.7-9.1v32c0 8.8 7.2 16 16 16h32zM362.7 18.7L348.3 33.2 325.7 55.8 314.3 67.1l33.9 33.9 62.1 62.1 33.9 33.9 11.3-11.3 22.6-22.6 14.5-14.5c25-25 25-65.5 0-90.5L453.3 18.7c-25-25-65.5-25-90.5 0zm-47.4 168l-144 144c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l144-144c6.2-6.2 16.4-6.2 22.6 0s6.2 16.4 0 22.6z"></path>
                </svg>
            </button>

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                    <button type="button" className="btn btn-secondary bg-secondary bg-gradient" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-dark" data-bs-dismiss="modal" onClick={handleEdit}>Save changes</button>
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