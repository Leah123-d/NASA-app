import React from "react";
import { useState, useEffect } from 'react';
import { FcPicture } from "react-icons/fc";
import { TbPlanet } from "react-icons/tb";
import { TiVideo } from "react-icons/ti";
import { TbWashDrycleanOff } from "react-icons/tb";

function Card({ archiveData, APOD }){ 
    
	return(
		<>
		{/* add margins to elements to prevent elements from being close  */}
				<div className="card bg-base-100 shadow-sm" >
					
					{ archiveData ? (
					<>
						<figure>
								<img
								src={archiveData.url} alt={archiveData.title}/>
						</figure>
								<div className="card-body">
								<h2 className="card-title">
								{archiveData.title}
								<FcPicture />
								<TbPlanet />
								<TiVideo />
								<TbWashDrycleanOff />
								{/* not a planet symbol */}
								{/* need to make these icons dynamically appear */}
								<div className="badge badge-secondary">{archiveData.media_type}</div>
								<div className="badge badge-secondary">HOLD FOR API PLANET TRUE/FALSE ICON</div>
								</h2>
								<p>{archiveData.explanation}</p>
								<div className="card-actions justify-end">
								<div className="badge badge-outline">{archiveData.url}</div>
								</div>
								</div>
							</>
							) : (
						
						
						<>
						<figure>
								<img
									src={APOD?.url} alt={APOD?.title}/>
						</figure>
						<div className="card-body">
								<h2 className="card-title">
								{APOD?.title}
								<FcPicture />
								<TbPlanet />
								<TiVideo />
								<TbWashDrycleanOff />
								{/* not a planet symbol */}
								{/* need to make these icons dynamically appear */}
								<div className="badge badge-secondary">{APOD?.media_type}</div>
								<div className="badge badge-secondary">HOLD FOR API PLANET TRUE/FALSE ICON</div>
								</h2>
								<p>{APOD?.explanation}</p>
								<div className="card-actions justify-end">
								<div className="badge badge-outline">{APOD?.url}</div>

								</div>
								</div>
								
							</>	
							)}
				</div>
				
				</>
			);
	}

export default Card