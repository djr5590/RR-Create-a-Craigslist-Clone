import React from "react";

function Posting(props){
    return (
        <div>
            <img src={props.post.imageURL} alt={props.post.title}/>
            <h1>{props.post.title}</h1>
            <p>{props.post.description}</p>
            <p>{props.post.price}</p>
        </div>
    )
}

export default Posting;