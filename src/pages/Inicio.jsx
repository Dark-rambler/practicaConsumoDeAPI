import Header from "../components/Header"
import Footer from "../components/Footer"
import Carrucel from "../components/Carrusel"
import Fondo from "../components/Fondo";
import { Link } from "react-router-dom";

import "../styles/Inicio.css"
function Inicio(){
    return(
        <div className="text-primary principal  container">

                <article className="description d-flex ms-4">
                    <Fondo/>
                    
                    <div className="palabra row  rounded">
                    <section className="text-light w-50 fs-4 mt-5 col col-md-8 p-5 ">
                            <h1 className=" mb-5 mt-5 pt-5">
                               Centro de datos Pókemon
                            </h1>

                            <p className=" pt-2 ms-4 pb-3 mb-5 ">
                                Encuentra estadistica e informacion para ser el proximo maestro pokemon!
                             </p> 
                             <div className="row">
                            <Link to={"/todos"} type="button" class="btn btn-secondary  ms-5 col-8"> Ingresar </Link>
                            <Link to={"/informacion"} type="button" class="btn btn-outline-secondary mt-3 ms-5 col-8 "> Informacion </Link>
                            </div>
                    </section>
                    <section className="w-50 col col-sm-12 d-none d-md-inline ">
                    <img src="https://raw.githubusercontent.com/Dark-rambler/practicaConsumoDeAPI/main/pngwing.com.png" className="  img-fluid" width={"500px"} alt="" />
                    </section>
                    </div>

                </article>

         
        </div>
    )
}
export default Inicio