import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialState = {
  image: "",
  description: "",
  title: "",
  category: "",
};

const UploadImage = () => {
  const [imgUpload, setImgUpload] = useState(initialState);
  const { actions, store } = useContext(Context);
  const { categories } = store;

  const handleUpload = async () => {
    try {
      const formData = new FormData()

      formData.append("image", imgUpload.image)
      formData.append("title", imgUpload.title)
      formData.append("description", imgUpload.description)
      formData.append("category", imgUpload.category)

      const response = await actions.uploadIlustration(formData)

      if (response.status === 201 || response.status === 200) {
        console.log("Image Uploaded:", {
          imgUpload,
        });
        return true
      } else {
        console.log("Error en Upload");
        return false
      }
    } catch (error) {
      console.log("Error en la solicitud de Upload:", error)
      return false;
    }
  };

  const handleChange = ({ target }) => {
    setImgUpload({ ...imgUpload, [target.name]: target.value })
  };

  const handleUploadNotification = async () => {
    if (
      !imgUpload.image ||
      !imgUpload.description ||
      !imgUpload.title ||
      !imgUpload.category
    ) {
      toast.error("Please fill all fields")
      console.log("missing parameter");
      return;
    }
    //toma handelupload como retorno de promesa 
    toast.promise(handleUpload(), {
      pending: "Uploading...",
      success: "Uploaded",
      error: "Upload failed",

    });
  };

  return (
    <>
      <ToastContainer theme="dark" position="top-center" pauseOnFocusLoss={false} autoClose={3000} />
      <div className="container-fluid text-white my-5 pt-5 w-25 vh-100">
        <h1>Upload</h1>
        <form>
          <div className="form-group pt-2">
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
          <div className="form-group pt-2 ">
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
          <div className="form-group pt-2 ">
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
            <select className="form-control" id="category" value={imgUpload.category}
              name="category" onChange={handleChange}>
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </form>
        <button
          className="btn btn-secondary w-100 mt-3"
          onClick={handleUploadNotification}
        >Upload</button>
      </div>
    </>
  );
};

export default UploadImage;
