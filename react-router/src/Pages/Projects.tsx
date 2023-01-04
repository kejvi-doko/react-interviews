import React from "react";
import {useNavigate} from "react-router-dom"
function Projects(){
    const navigate = useNavigate();

    return <div>This is the Projects page <button onClick={()=>navigate('/about')}> Go To About</button></div>
}

export  default  Projects;