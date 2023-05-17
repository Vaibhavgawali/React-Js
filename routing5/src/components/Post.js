import React from "react";
import {Link} from "react-router-dom";

const Post = () => {
    return (
        <div className="panel panel-default">
            <div className="panel-heading">Post Page</div>
            <div className="panel-body">
                <h2>Post Page</h2>
                <p>Post Page  is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <h3>Javascript</h3>
                <Link to="/posts/Javascript?page=1" className="btn btn-success">Details</Link>
                <h3>ReactJs</h3>
                <Link to="/posts/React?page=2" className="btn btn-danger">Details</Link>
                <h3>NodeJs</h3>
                <Link to="/posts/Node?page=3" className="btn btn-info">Details</Link>
            </div>
        </div>
    )
}

export default Post;