import React from "react";
import { useState, useEffect } from 'react';

function Card(){ 

    const[APOD, setAPOD] = useState([]);

    const FetchAPOD = () => {useEffect(() => {
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
                    onChange={FetchAPOD()} src={APOD.url} alt={APOD.title}
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                    {APOD.title}
                    <div className="badge badge-secondary">{APOD.media_type}</div>
                    <div className="badge badge-secondary">HOLD FOR API PLANET TRUE/FALSE ICON</div>
                    </h2>
                    <p>{APOD.explanation}</p>
                    <div className="card-actions justify-end">
                    <div className="badge badge-outline">{APOD.url}</div>
                    </div>

            </div>
            </div>
            
        </>
    )
}

export default Card