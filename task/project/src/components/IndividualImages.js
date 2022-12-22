import React from "react";

function IndividualImage ({image}){

    return(
        <div className="photo">
            <img src={image.url} alt="unsplash images"/>
        </div>
    )

}
export default IndividualImage