import React from "react";
import { useState, useEffect } from 'react';
import { FcPicture } from "react-icons/fc";
import { TbPlanet } from "react-icons/tb";
import { TiVideo } from "react-icons/ti";
import { TbWashDrycleanOff } from "react-icons/tb";

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
                    <FcPicture />
                    <TbPlanet />
                    <TiVideo />
                    <TbWashDrycleanOff />
                    {/* not a planet symbol */}
                    {/* need to make these icons dynamically appear */}
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