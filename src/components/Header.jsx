import React from "react";
function Header() {
    return (
        <div className="bg-primary py-sm-1 py-lg-3 fixed-top ">
            <ul class="nav justify-content-center fs-3 ">
            <li class="nav-item">
            <a class="nav-link active" href="#">Todos</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
            </li>

            <li class="nav-item mt-lg-3 mt-sm-2 me-2 ms-lg-5 ps-lg-5">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Busca tu Pokemon"/>
            </li>
            <li className="nav-item mt-lg-2">
            <button type="submit" class="btn btn-info col">Buscar</button>

            </li>
            </ul>
            
            
        </div>

    )
}
export default Header