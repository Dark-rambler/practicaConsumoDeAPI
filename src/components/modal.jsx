import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import"../styles/Modal.css"
//import { uploadFile } from "../firebase/config";
function Modal({register, datos, cerrar}){
/*  useEffect(()=>{
    setRegistrar(true);
    setInternText(text);
    setInternTitle(title);
  },[register])*/
  const URL="http://localhost:5000/trabajoverano-41581/us-central1/app/api/hotel"
  const [registrar, setRegistrar]=useState(register);
  const [frontal, setFrontal]= useState(datos.sprites.front_default);
  const [tracera, setTracera]= useState(datos.sprites.back_default);

   

   // obtenerId(



    return( register?(<div className="  fondo">

      <div className="contenedor h-75 d-flex justify-content-center  align-items-center">

          <div class="card w-sm-75 w-lg-25 ">
          <button type="button" class="btn-close ms-auto pt-3 pe-3 bg-danger  " onClick={()=>{cerrar()}} data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="card-body">
              <blockquote class="blockquote bg-secondary rounded text-light">
                <h1>{datos.name}</h1>
                <footer class="card-blockquote "><img className="w-50" src={datos.sprites.front_default}  alt="" /><img className="w-50" src={datos.sprites.back_default} alt="" /></footer>
              </blockquote>
              <div>
                <h3>Stats</h3>
                {datos.stats.map(dato=>(<div>{dato.stat.name}:{dato.base_stat}</div>))}
              </div>
            </div>
          </div>

      </div>

    </div>):( <div> </div> ) )
}

export default Modal;