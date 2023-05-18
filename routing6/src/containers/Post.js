import React from "react";
import { Link } from "react-router-dom";

const Post = () => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">Post Page</div>
            <div className="panel-body">
                <h2>Post Page</h2>
                <p>Post Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h4>Javascript</h4>
                <Link to="/posts/Javascript?page=1" className="btn btn-primary">Details</Link>
                <h4>ReactJs</h4>
                <Link to="/posts/ReactJs?page=2" className="btn btn-success">Details</Link>
                <h4>NodeJs</h4>
                <Link to="/posts/NodeJs?page=3" className="btn btn-danger">Details</Link>
            </div>
        </div>
    )
}

export default Post;