import { useEffect } from "react"
import "../styles/Carrucel.css"
function Carrucel(){

    return(
        <div className="contenedor w-75 h-25" >
       
       <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://i.pinimg.com/564x/f6/93/98/f69398ebf02643456be925df996ce642.jpg" class="d-block w-100 img-fluid carr" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/564x/94/b7/cc/94b7cc5ccf1215a153a502f7f814e4a8.jpg" class="d-block w-100 img-fluid carr" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src="https://i.pinimg.com/564x/16/d2/4d/16d24d248dc886d3ee634d0f356d0296.jpg" class="d-block w-100 img-fluid carr" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

        </div>
    )
}
export default Carrucel