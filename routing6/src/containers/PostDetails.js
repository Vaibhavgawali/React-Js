import React from "react";
import { useParams,useSearchParams } from "react-router-dom";

const PostDetails=()=>{
    // for params
    const params=useParams();
    // console.log(params)

    // for query params
    const [searchParams]=useSearchParams();

    return(
        <div className="panel panel-default">
            <div className="panel-heading">{params.topic} Page</div>
            <div className="panel-body">
                <h2>{params.topic} Page</h2>
                <p>{params.topic} Page is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                <h4 className="text-center">This is a page number {searchParams.getAll('page')}</h4>
            </div>
        </div>
    )
}

export default PostDetails;