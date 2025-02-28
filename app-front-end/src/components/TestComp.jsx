import { useState, useEffect } from 'react';

// const TestComp = () => {
//     const[infos, setInfos] = useState([]);

//         useEffect(() => {
//           fetch('/api')
//           .then((res) => {
//             return res.json()
//           })
//           .then((data) => {
//             console.log(data);
//             setInfos(data);
//           })
//           .catch(error => {
//             console.error('Error:', error);
//           });
//         }, []);
//         return( 
//           <div>
     
  
//             <img key={infos.id} src={infos.url} alt={infos.title} width={100} />
//             <p>{infos.title}, {infos.explanation}</p>
//           </div>);

//         // I feee like this is close, why is my object empty?
//       }


// export default TestComp



// const TestComp = () => {
//   const[infos, setInfos] = useState([]);

//       useEffect(() => {
//         fetch('/api')
//         .then((res) => {
//           return res.json()
//         })
//         .then((data) => {
//           console.log(data);
//           setInfos(data);
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });
//       }, []);
//       return( 
//         <div>
   

//           <img key={infos.id} src={infos.url} alt={infos.title} width={100} />
//           <p>{infos.title}, {infos.explanation}</p>
//         </div>);
//     }


// // export default TestComp


const Archive = () => {
  const[date, setDate] = useState(""); //state to store the user's input
  const[archiveDate, setArchiveDate] = useState(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  }

  const fetchArchive = async () => {
    try{
      const response = await fetch(`/api/archives?date=${date}`);
      const data = await response.json();
      return setArchiveDate(data); //store data in state 
      }catch(error){
      console.error("error fetching data: ", error)
    }

  }
      return( 
        <div>
          <h1> achive data display</h1>
          <input
            type="date"
            value={date}
            onChange={handleChange}  
           />
           <button onClick={fetchArchive}>Search</button>

           {/* conditional rendering to make sure we don't display the data before the fetch */}

           {archiveDate ? (
            <div> 
              <p>{archiveDate.title}</p>
              <img src={archiveDate.url} />
            </div>
           ) : (<p>no data found</p>
           )}
      
        </div>)
}



export default Archive
