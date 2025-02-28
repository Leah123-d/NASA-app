import { useState } from 'react'

function Navbar2(){

    const[date, setDate] = useState(""); //state to store the user's input
    const[archiveData, setArchiveData] = useState(null);

    const handleChange = (e) => {
        setDate(e.target.value);
    }

    const Archive = () => {
    const fetchArchive = async () => {
    try{
      const response = await fetch(`/api/archives?date=${date}`);
      const data = await response.json();
      return setArchiveData(data); //store data in state 
      }catch(error){
      console.error("error fetching data: ", error)
    }}
    }


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
                <form onClick={Archive}> 
                <label htmlFor="startDate">enter a date</label>
                <input 
                    className="input h-10 w-35" 
                    type="date" 
                    value={date} 
                    id="startDate"
                    onChange={handleChange}/>
               <button className="btn btn-outline btn-primary">Search</button>
               </form>
            </div>
             {/* conditional rendering to make sure we don't display the data before the fetch */}

           {archiveData ? (
            <div> 
              <p>{archiveData.title}</p>
              <img src={archiveData.url} />
            </div>
           ) : (<p>no data found</p>
           )}
            </div>

            {/* currently not working, data is not returning to front end */}
        </>

    );

}

export default Navbar2