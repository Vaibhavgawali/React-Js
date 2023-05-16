import React, { Component } from "react";
import './Header.css';

class Header extends Component{
    constructor(){
        super();
        this.state={
            keyword:"User Input Here"
        }
    }

    handleChange=(e)=>{
        console.log(e.target.value)
        this.setState({keyword:e.target.value})
        this.props.userInput(e.target.value);
    }

    render(){
        return(
            <>
                <header>
                    <div className="logo">React App</div>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                </header>
                <hr/>
            </>
        )
    }  
}

export default Header;