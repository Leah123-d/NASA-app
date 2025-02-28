import { useState, useEffect } from 'react';

function Footer( { archiveData, APOD }) {

  return (

      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
          <aside>
          {archiveData?.copyright ? (
            <div>
            <p> {archiveData.copyright} </p>
            </div> 
          ) : APOD?.copyright ? (
            <div>
            <p> {APOD.copyright} </p>
            </div> 
          ) : 
          (
          <p> copyright not found </p>
          )}
       
      </aside>
      </footer>
      );

}

export default Footer