import React from "react";

const Footer =(props)=> {
    console.log(props)
    return(
        <div>
            <hr/>
            <center>
                <h2>&copy; Vaibhav Gawali {props.year}</h2> 
            </center>
        </div>
    )   
}

export default Footer;