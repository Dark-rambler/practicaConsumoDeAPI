import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import"../styles/modal.css"
//import { uploadFile } from "../firebase/config";
function Modal({register, datos}){
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



    return( <div className="  modal  fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="   modal-dialog modal-dialog-centered  ">
          { register?(

          
          <div className="modal-content bg-primary  ">
             <button type="button" class="btn-close ms-auto pt-3 pe-3  " onClick={()=>{setFrontal(""); setTracera("")}} data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="ms-auto me-auto modal-header border-0">
        <h1 class=" text-center fs-1" id="exampleModalLabel">{datos.name}</h1>
       
      </div>
      
      <div class="modal-body text-center ">
        <img  className="img-fluid w-50" src={datos.sprites.front_default} alt="" />
        <img className="img-fluid w-50"  src={datos.sprites.back_default} alt="" />
      </div>
      <hr />
      <div className=" fw-bolder fs-5 ms-lg-4">
        Data :
        <hr />
        <table className="mb-4">

          <td>
          <tr >
            <th className="bg-black border">
              Stats:
            </th>
           
          </tr>
          <tr >
          {datos.stats.map(tipo=>(<tr className="border  col-lg-5"> {
           (<td className="">{tipo.stat.name}: {tipo.base_stat}</td>)
           } </tr>))}
          </tr>
          </td>
          
          <td>
            <tr> 
              <th className=" bg-black border">
              Abilities
              </th>
            </tr>
            <tr className="border">
              {datos.abilities.map(movimiento=>(<tr  className=""> <div className="border  px-3">{movimiento.ability.name}</div> </tr>))}
            </tr>

          </td>
          <td>
          <tr className="border"> 
          <th className="bg-black border">
            Types:
            
          </th>
          </tr >
          {datos.types.map(tipo=>(<tr  className="border col-lg-10 "> {tipo.type.name} </tr>))}
          </td>
          <td>
            <tr>
              <th className="border bg-black">
                Exp base
              </th>
              
            </tr>
            <tr className="border">
                {datos.base_experience}
              </tr>
            <tr className="border">
              
            </tr>
          </td>
          
         
        </table>
        {/*<div className=" row ms-lg-3">
          Tipo:
        {datos.types.map(tipo=>(<div  className=" col-lg-5 "> {tipo.type.name} </div>))}
        </div>
        <hr />
       <div className="row">
       <div className=" text-start  col-lg-11 bg-success  me-lg-4 ms-lg-3 mt-2">
          Estadisticas:
           {datos.stats.map(tipo=>(<div className=" bg-danger col-lg-5"> {
           (<div className="">{tipo.stat.name}: {tipo.base_stat}</div>)
           } </div>))}
           
        </div>
       </div>*/}
        
       
      </div>
          </div>):(
            <></>
          )
          }
        </div>
        
    </div>)

}

export default Modal;