import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/Lista.css"
//import Listar from "../functions/consultas";
import Modal from "./modal";
function Lista() {
    const [pokemons, setPokemons] = useState([]);
    const [seleccionado, setSeleccionado]=useState({name:"pruba", sprites:{front_default:"https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1"},});
    const buscar = "pokemon"


    const URL = `https://pokeapi.co/api/v2/${buscar}`
    

    useEffect(() => {
        setPokemons([])
       

         for (let i = 1; i <22; i++){
            fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
            .then(response=>response.json())
            .then(data=>setPokemons(prev=>[...prev, data] ))
           }

       
         
 
      //  console.log(pokemons,"here")

    }, [])

   

    return (
        <div className="text-secondary container position-relative text-center mt-5 pt-5 ">
                       <Modal 
                       register={true}
                       name={seleccionado.name}
                       front={seleccionado.sprites.front_default}
                       back={seleccionado.sprites.back_default}
                       />

            {pokemons != null ? (
                <div className="row  ">
                    {pokemons.map(personaje => (
                    <div className="col-sm-12 col-lg-4 d-flex  text-light justify-content-center ">
                        <div class="card bg-dark col  col-lg-7 mt-4 agrandar  "   type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setSeleccionado(personaje); console.log(seleccionado) }} >
                            <div class="card-body ">
                                <h4 class="card-title">  {
                                    personaje.name
                                }</h4>
                               <img src={personaje.sprites.front_default} width="" className="img-fluid" alt="" />
                            </div>
                            <div class="card-footer ">
                                Tipo: {personaje.types[0].type.name}
                            </div>
                        </div>

                            </div>))}

                            <span className="fs-3 mt-4  ">
                            <i class="fa-solid fa-arrow-left me-5  agrandar" />
                            <i class="fa-solid fa-arrow-right ms-5 agrandar"/>
                            </span>
                </div>
                

                    ) : ("no hay pokemons")}

        </div>
    
    )
}
export default Lista