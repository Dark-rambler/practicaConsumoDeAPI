import Header from "../components/Header"
import Footer from "../components/Footer"
import Fondo from "../components/Fondo"
import "../styles/Informacion.css"
function Informacion(){
    return(
        <div className="informacion pt-5 ">
            <Header/>
            <div className="texto text-light  position-relative container rounded ">
                <article className="d-flex flex-column p-5 align-items-center ">
                    <h1 className="fs-1 ">
                    Propósito de la pagina     
                    </h1>
                    <p className="fs-4">
                        Esta pagina ha sido creada por Edwin Ramiro Garcia Chambilla con el unico propósito de practicar en 
                        sus habilidades de desarrollo web, en específico en el consumo y manejo de datos de API's utilizando 
                        una api gratuita conocida como "pokeAPI" para realizar el proyecto, este proyecto y en general todos los 
                        proyectos que se muestran en este portafolio estan en actualizaciones constantes con el fin de cada vez mejorar 
                        un poco mas en las habilidades del desarrollador, las tecnologias utilizadas en el desarrollo de esta fueron: 
                          <strong>  "Html, Css, Javascript, React  y Bootstrap" </strong>
                    </p>
                </article>        
            </div>
            <Fondo/>
                  
                <Footer/>
        </div>
    )
}
export default Informacion