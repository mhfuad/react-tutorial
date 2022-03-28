import React from "react";
import { Link } from "react-router-dom";

function Tutorial(){
    return (
        <div>
            <h1>Tutorial component</h1>
            <Link to="/">Home</Link>
        </div>
    );
}

export default Tutorial;