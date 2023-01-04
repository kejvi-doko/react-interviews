import React from "react";
import {useLocation} from "react-router-dom";
function PageNotFound(){
    const location = useLocation();

    return <div>Sorry about that, the page {location.pathname} doesn't exits</div>
}

export  default  PageNotFound;