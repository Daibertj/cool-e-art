import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import Swal from "sweetalert2";

const initialState = {
    image: "",
    description: "",
    title: "",
    category: "",
  };

const UploadImage = () => {
  const [imgUpload, setImgUpload] = useState(initialState);
  const { actions, store } = useContext(Context);

  
  const handleUpload = async () => {
    if (
      !imgUpload.image ||
      !imgUpload.description ||
      !imgUpload.title ||
      !imgUpload.category
    
    ) {
      Swal.fire({
        title: "Error!",
        text: "Por favor completa todos los campos",
        icon: "error",
        confirmButtonText: "OK",
      })
      console.log("missing cat");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("image", imgUpload.image);
      formData.append("description", imgUpload.description);
      formData.append("title", imgUpload.title);
      formData.append("category", imgUpload.category);
      formData.append("user", store.name)


      const response = await actions.uploadIlustration(formData);
     
      if (response.status === 201 ||response.status === 200) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Uploaded",
          showConfirmButton: false,
          timer: 1000,
        });
        console.log("Image Uploaded:", {
          image,
          description,
          title,
          category,
        });
      } else {
        Swal.fire({
          title: "Error!",
          text: "No Uploaded",
          icon: "error",
          confirmButtonText: "OK",
        });
        console.log("Error en el Upload");
      }
    } catch (error) {
      console.log("Error en la solicitud de Upload:", error);
    }
  };
  const handleChange = ({ target }) => {
    setImgUpload({ ...imgUpload, [target.name]: target.value });
  };

  return (
    <div className="container-fluid  w-25">
      <h1>Upload</h1>
      <form>
        <div className="form-group">
          <label htmlFor="image">Upload your Creation </label>
          <input
            type="file"
            className="form-control"
            id="image"
            name="image"
            onChange={({ target }) =>
              setImgUpload({ ...imgUpload, image: target.files[0] })
            }
          />
        </div>
        <div className="form-group  ">
          <label htmlFor="title">Title:</label>
          <input
            className="form-control "
            type="text"
            value={imgUpload.title}
            id="title"
            name="title"
            onChange={handleChange}
          />
        </div>
        <div className="form-group  ">
          <label htmlFor="description">Description:</label>
          <input
            className="form-control "
            type="text"
            value={imgUpload.description}
            id="description"
            name="description"
            onChange={handleChange}
          />
        </div>
        <div className="pt-2">
        <label htmlFor="category">Category:</label>
        <select id="category" value={imgUpload.category} 
        name="category" onChange={handleChange}>
          <option value="">Select a category</option>
          <option value="nature">Nature</option>
          <option value="food">Food</option>
          <option value="sports">Sports</option>
          <option value="art">Art</option>
          <option value="others">Others</option>
        </select>
      </div>
      </form>
      <button className="btn btn-primary w-100 mt-3" onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default UploadImage;
