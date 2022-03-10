import React from "react";
import Posting from "./posting"

function Gallery() {
    const craigPost = require('../postings')

    let postList = craigPost.postings.map((post, i) => {
        return <Posting post={post} key={i} />
    })

    return (
        <div>
            <h1>Gallery</h1>
            {postList}           
        </div>
    )
}


export default Gallery;