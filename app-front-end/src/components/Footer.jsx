import { useState, useEffect } from 'react';

function Footer() {

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
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        
          {APOD.copyright ? (
            <div>
            <p> {APOD.copyright} </p>
            </div> 
          ) : (<p> copyright not found </p>)
          }
       
      </aside>
      </footer>
    </>

    )

}

export default Footer