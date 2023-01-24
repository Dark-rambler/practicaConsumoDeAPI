import React from "react";
import "../styles/Aside.css"
function Aside(){

    return(
        <div>
            <ul class="nav flex-column bg-secondary aside">
            <li class="nav-item">
            <a class="nav-link active" href="#">Active</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
            </li>
            <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
            </ul>
            
            
        </div>
    )
}
export default Aside;