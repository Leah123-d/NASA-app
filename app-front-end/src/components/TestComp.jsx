import { useState, useEffect } from 'react';

const TestComp = () => {
    const[infos, setInfos] = useState([]);

        useEffect(() => {
          fetch('/api')
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            console.log(data);
            setInfos(data);
          })
          .catch(error => {
            console.error('Error:', error);
          });
        }, []);
        return( 
          <div>
     
  
            <img key={infos.id} src={infos.url} alt={infos.title} width={100} />
            <p>{infos.title}, {infos.explanation}</p>
          </div>);

        // I feee like this is close, why is my object empty?
      }


export default TestComp

