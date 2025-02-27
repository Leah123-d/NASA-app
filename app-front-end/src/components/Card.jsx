import React from "react";
import { useState } from 'react';

function Card(){
    
    return(
        <>
        {/* add margins to elements to prevent elements from being close  */}
            <div className="card bg-base-100 shadow-sm" >
                <figure>
                    <img
                    src="https://apod.nasa.gov/apod/image/2502/M35_NGC2158_1024.jpg"
                    alt="Shoes" />
                    {/* HOLD FOR API MEDIA DISPLAY */}
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    HOLD FOR API TITLE
                    <div className="badge badge-secondary">HOLD FOR API MEDIA TYPE ICON</div>
                    <div className="badge badge-secondary">HOLD FOR API PLANET TRUE/FALSE ICON</div>
                    </h2>
                    <p>HOLD API DESCRIPTION</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">HOLD FOR API MEDIA URL</div>
                    </div>
                {/* <div className="App">
                    <h1>React Website with an Express backend</h1>
                    <button  onClick={connectToBackend}>
                    Send Request to Backend
                    </button>
                    <p>{data}</p>
                </div> */}
            </div>
            </div>
            
        </>
    )
}

export default Card