import React from "react";
import { useState, useEffect } from 'react';

function Card(){ 

    const[APOD, setAPOD] = useState([]);

    const fetchAPOD = () => {useEffect(() => {
      fetch('/api')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data);
        setAPOD(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }, []);}
    
    return(
        <>
        {/* add margins to elements to prevent elements from being close  */}
            <div className="card bg-base-100 shadow-sm" >
                <figure>
                    <img
                    onChange={fetchAPOD()} src={APOD.url} alt={APOD.title} width={1000}
                    />
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

            </div>
            </div>
            
        </>
    )
}

export default Card