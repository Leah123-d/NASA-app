import { useState } from 'react'


function Navbar2(){
    const[search, setSearch] = useState(''); //when the user enters dates it will be stored to this state to fetch a request based on this 
    const[date,setDate] = useState('');
    const[startDate,setStartDate] = useState(null);
    const[endDate,setEndDate] = useState(null);

    const handleSearch = (e) =>{
        //code to execute when search button is clicked
        e.preventDefault();
        console.log("search started", e.target);
    }

    const handleStartDate = (e) => {
        e.preventDefault();
        setStartDate(e.target.value);
        console.log("start date set!", e.target.value)
    }

    const handleEndDate = (e) => {
        e.preventDefault();

        // setStartDate > setEndDate ? null : setEndDate(e.target.value); trying to figure out date validation

        console.log("end date set!", e.target.value)
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
                <label>start date</label>
               <input className="input h-10 w-35" type="date" onChange={handleStartDate}  />
               <label>end date</label>
               <input className="input h-10 w-35" type="date" onChange={handleEndDate}/>
               {/* this input shoudl be disabled until start date is entered */}
               <button className="btn btn-outline btn-primary" >Search</button>
               </form>
            </div>
            </div>
        </>

    );

}

export default Navbar2