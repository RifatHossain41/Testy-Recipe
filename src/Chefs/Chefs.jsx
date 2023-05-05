import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { useLoaderData, useParams } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Chefs = () => {
  const [chefs, setChefs] = useState([]);
   const { id } = useParams();

  useEffect(() => {
    fetch('http://localhost:4000/chefs/')
    .then(res => res.json())
    .then(data => setChefs(data))
    .catch(error => console.error(error))
  }, [])


  return (
      <div>
        <h3>Chefs Info</h3>
      <div className='lg:grid grid-cols-3 gap-3'>
      {
        chefs.map(chef => <Chef
         key={chef.id}
         chef={chef}
        ></Chef>
        )
        
      }
      </div>
      </div>
  );
};

export default Chefs;