import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import"../styles/modal.css"
//import { uploadFile } from "../firebase/config";
function Modal({register, name, front, back}){
/*  useEffect(()=>{
    setRegistrar(true);
    setInternText(text);
    setInternTitle(title);
  },[register])*/
  const URL="http://localhost:5000/trabajoverano-41581/us-central1/app/api/hotel"
  const [registrar, setRegistrar]=useState(register);
  const [frontal, setFrontal]= useState(front);
  const [tracera, setTracera]= useState(back);

   

   // obtenerId(



    return( <div className="  modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="   modal-dialog modal-dialog-centered  ">
          { registrar &&  

          
          <div className="modal-content bg-primary  ">
             <button type="button" class="btn-close ms-auto pt-3 pe-3  " onClick={()=>{setFrontal(""); setTracera("")}} data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="ms-auto me-auto modal-header border-0">
        <h1 class=" text-center fs-5" id="exampleModalLabel">{name}</h1>
       
      </div>
      
      <div class="modal-body text-center">
        <img  className="img-fluid" src={front} alt="" />
        <img className="img-fluid" src={back} alt="" />
      </div>
          </div>
          }
        </div>
        
    </div>)

}

export default Modal;