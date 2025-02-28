import { useState } from 'react'
import './App.css'

function Navbar2({date, fetchArchive, handleChange }){


	return(
		<>
			<div className="navbar bg-base-100 shadow-sm">
			<div className="navbar-start">
			</div>
			<div className="navbar-center">
				<a className="btn btn-ghost text-xl">
					Astronomy Picture of the Day
				</a>
			</div>
			<div className="navbar-end">
				<form onSubmit={fetchArchive}> 
				<label htmlFor="startDate">enter a date</label>
				<input 
					className="input h-10 w-35" 
					type="date" 
					value={date} 
					id="startDate"
					onChange={handleChange}
					/>
				<button className="btn btn-outline btn-primary">Search</button>
				</form>
			</div>
			</div>
		</>

	);

}

export default Navbar2