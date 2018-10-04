import React from "react";
import "./Title.css";

const Title = props => 
    <div>
        <h1 className="title">{props.children}</h1>
        <div className="alert alert-info mr-5 ml-5 text-center" role="alert" id="alert">
            12 is your goal!
        </div>
    </div>;

export default Title;
