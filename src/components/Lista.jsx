import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/Lista.css"
import Fondo from "./Fondo";
//import Listar from "../functions/consultas";
import Modal from "./modal";
import Footer from "./Footer";
function Lista() {
    const [pokemons, setPokemons] = useState([]);
    const [seleccionado, setSeleccionado]=useState({name:"pruba", sprites:{front_default:"https://cnnespanol.cnn.com/wp-content/uploads/2022/07/220713165438-rba-web-nasa-full-169.jpg?quality=100&strip=info&w=384&h=216&crop=1"},});
    const [num, setNum]=useState(1);
    const [modal,setModal]=useState(false)
    const [buscar, setBuscar]=useState("")


    const URL = `https://pokeapi.co/api/v2/${buscar}`
    

    useEffect(() => {
    
  
    
        setPokemons([])
       
        if(buscar!=""){
             
        setPokemons([])
            console.log("entra")
            for (let i = 0; i < 1008; i++) {
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(response=>response.json())
                .then(data=> {
                    if(data.name.includes(buscar)){
                        setPokemons(prev=>[...prev, data] )
                        
                    }
                    
                    console.log(pokemons.length<22)
                   
                } )
                if(i>50){

                    i=1008;
                } 
                
            }
        }


        else{
            setPokemons([])
            for (let i = num; i <21+num; i++){
                fetch(`https://pokeapi.co/api/v2/pokemon/${i}`)
                .then(response=>response.json())
                .then(data=>setPokemons(prev=>[...prev, data] ))
               }
        }
    }, [num,buscar])



   

    return (
        <div className="text-secondary container position-relative text-center mt-5 pt-5 ">
                       <Modal 
                       register={modal}
                       datos={seleccionado}
                       cerrar={()=>{setModal(false)}}
                       />
            <Fondo/>
            {pokemons != null ? (
                <div className="row  ">
                    <div className="d-flex justify-content-center mt-5">
                    <div class="nav-item mt-lg-3 mt-sm-2 me-2 lista ">
            <input type="text" class="form-control "  placeholder="Busca tu Pokemon" onChange={ e=>setBuscar(e.target.value)}/>
            </div>
            <div className="nav-item mt-lg-3 lista ">
            <button class="btn btn-info col "   type="button"  >Buscar</button>

            </div>
                    </div>
                    {pokemons.map(personaje => (
                    <div className="col-sm-12 col-lg-4 d-flex  text-light justify-content-center lista ">
                        <div class="card bg-dark col  col-lg-7 mt-4 agrandar  "   type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>{setSeleccionado(personaje); setModal(true); console.log(seleccionado) }} >
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

                            <span className="fs-3 lista mt-4  ">
                            <i class="fa-solid fa-arrow-left me-5  agrandar" onClick={()=>{if(num>1){setNum(num-21)}}}/>
                            <i class="fa-solid fa-arrow-right ms-5 agrandar" onClick={()=>{setNum(num+21)}}/>
                            </span>
                </div>
                

                    ) : ("no hay pokemons")}

        </div>
    
    )
}
export default Lista