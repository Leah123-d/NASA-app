import { useState } from 'react'


function Navbar2(){
    const[search, setSearch] = useState(''); //when the user enters dates it will be stored to this state to fetch a request based on this 
    const[date,setDate] = useState({
        startDate: '',
        endDate: '',
    });

    const handleSearch = (e) =>{
        //code to execute when search button is clicked
        e.preventDefault();
        console.log("search started", e.target);
    }

    const handleChange = (e) => {
        e.preventDefault();
        let value = e.target.value;
        // let endDateCheck = date.endDate < date.startDate ? setDate : window.alert ("please select a date great date the start date");
        //I want validation on this date, but I have to see how to implement it 

    }


    // create a reset search button. Can be as simple and reseting dates.

    return(
        <>
            <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">APOD</a>
            </div>
            <div className="navbar-end">
                <form> 
                    {/* add handleSearch onclick function on the form */}
                <label htmlFor="startDate">start date</label>
               <input className="input h-10 w-35" 
                    placeholder=""
                    id="startDate"
                    type="date" 
                    value={date.startDate}
                    onChange={handleChange}  />
               <label htmlFor="endDate">end date</label>
               <input className="input h-10 w-35" 
                        placeholder=""
                        id="endDate"
                        type="date" 
                        value={date.endDate}
                        onChange={handleChange}/>
               {/* this input shoudl be disabled until start date is entered */}
               <button className="btn btn-outline btn-primary" >Search</button>
               </form>
            </div>
            </div>
        </>

    );

}

export default Navbar2