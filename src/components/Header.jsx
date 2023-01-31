import React from "react";
import { useState } from "react";
import Modal from "./modal";
import { Link } from "react-router-dom";
function Header() {
  
        //data-bs-toggle="modal" data-bs-target="#exampleModal"
    
    return (
        <div className="bg-primary py-sm-1 py-lg-3 fixed-top row">

            <Link className="nav-link d-none d-lg-inline col" to={"/"}> <img src="https://cdn-icons-png.flaticon.com/512/1752/1752776.png" width={"70px "} className="ms-5 "  alt="" /> </Link>
            <ul class="nav justify-content-center fs-3 me-5 col">
            
            <li class="nav-item ">
            <Link className="nav-link" to={"/"}>Home </Link> 
            </li>
            <li class="nav-item">
            <Link className="nav-link" to={"/todos"}>Todos </Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link" to={"/informacion"}>Informacion </Link>
            </li>
            <div className="ms-5 me-5 ">

            </div>


            </ul>
            
            
        </div>

    )
}
export default Header