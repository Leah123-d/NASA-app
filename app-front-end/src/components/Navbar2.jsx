function Navbar2(){
    return(
        <>
            <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
            </div>
            <div className="navbar-center">
                <a className="btn btn-ghost text-xl">APOD</a>
            </div>
            <div className="navbar-end">
               <input type="date" className="input h-10 w-35"/>
               <input type="date" className="input h-10 w-35"/>
               <button className="btn btn-outline btn-primary">Search</button>
                {/* change magnify icon to a date picker */}
            </div>
            </div>
        </>

    );

}

export default Navbar2