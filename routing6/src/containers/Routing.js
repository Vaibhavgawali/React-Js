import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";
import PostDetails from "./PostDetails";
import Main from "./Main";

const Routing=()=>{
    return(
        <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/posts' element={<Post/>}/>
                        <Route path='/posts/:topic' element={<PostDetails/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                    </Route>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default Routing;