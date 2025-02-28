/* eslint-disable react/prop-types */
import React from "react";
import { useState, useEffect } from 'react';
import { FaImage } from "react-icons/fa6";
import { TbPlanet } from "react-icons/tb";
import { TiVideo } from "react-icons/ti";
import { TbWashDrycleanOff } from "react-icons/tb";

function Card({ archiveData, APOD }){ 
    
	return(
		<>
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

							{/* not a planet symbol */}
							{/* need to make these icons dynamically appear */}
							<div className="badge badge-secondary">
							<div className="badge badge-secondary">
								{archiveData.media_type === "image" ? (
									<>
									<FaImage /> {archiveData.media_type} 
									</>
									) : ( 
									<>
									<TiVideo /> {archiveData.media_type} 
									</>)
								} </div>
								</div>
							<div className="badge badge-secondary">
								{archiveData.explanation.includes("planet") ? (<TbPlanet />) : (<TbWashDrycleanOff />)
								} </div>
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
							<div className="badge badge-secondary">
								{APOD?.media_type === "image" ? (
									<>
									<FaImage /> {APOD?.media_type} 
									</>
									) : ( 
									<>
									<TiVideo /> {APOD?.media_type} 
									</>)
								} </div>
							<div className="badge badge-secondary">
								{APOD?.explanation?.includes("Planet") ? (<TbPlanet />) :(<TbPlanet />)}
							</div>
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