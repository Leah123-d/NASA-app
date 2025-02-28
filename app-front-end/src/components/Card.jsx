import React from "react";
import { useState, useEffect } from 'react';

function Card(){

    //  function NASADatafromBE (){
    //   useEffect(() => {
    //     fetch('/api/NASAData')
    //     .then((res) => res.json())
    //     .then (data => {
    //       console.log(data);
    //     })
    //     .catch(error => {
    //       console.error('Error:', error);
    //     });
    //   }, []);
    // }
    
    
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
                    <input type="text" id="title" placeholder="enter title"></input>
                    <button></button>
                <div className="App">
                    <h1>React Website with an Express backend</h1>
                    {/* <button  onClick={NASADatafromBE}>
                    Send Request to Backend
                    </button> */}
                </div>
            </div>
            </div>
            
        </>
    )
}

export default Card