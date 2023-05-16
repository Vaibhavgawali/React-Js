import React, { Component } from "react";
import './Header.css';

class Header extends Component{
    constructor(){
        super();
        this.state={
            keyword:"User Input Here"
        }
    }
    render(){
        return(
            <>
                <header>
                    <div className="logo">React App</div>
                    <input/>
                    <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                </header>
                <hr/>
            </>
        )
    }  
}

export default Header;