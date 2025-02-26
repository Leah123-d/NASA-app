
function Card(){
    return(
        <>
        {/* add margins to elements to prevent elements from being close  */}
            <div className="card bg-base-100 shadow-sm" >
                <figure>
                    <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
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