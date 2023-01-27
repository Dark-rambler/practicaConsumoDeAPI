import React from "react";
import { useState } from "react";
import Modal from "./modal";
function Header() {
  
        //data-bs-toggle="modal" data-bs-target="#exampleModal"
    
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
            <input type="text" class="form-control"  placeholder="Busca tu Pokemon"/>
            </li>
            <li className="nav-item mt-lg-2">
            <button class="btn btn-info col"   type="button"  >Buscar</button>

            </li>
            </ul>
            
            
        </div>

    )
}
export default Header