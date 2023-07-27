import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
function Prueba() {
    const notify = () => toast.error("Hello There!");

    return(
      <div>
<h1> hola</h1>
       

        <button onClick={notify}>Notify</button>
        
      </div>
    );
  }


export default Prueba