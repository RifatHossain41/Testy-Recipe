import React, { useEffect, useState } from 'react';
import Chef from '../Chef/Chef';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Chefs = () => {
  const [chefs, setChefs] = useState([]);

  useEffect(() => {
    fetch('https://the-food-recipe-server-rifathossain0423-gmailcom.vercel.app/chefs')
    .then(res => res.json())
    .then(data => setChefs(data))
    .catch(error => console.error(error))
  }, [])

  // const chefInfo = useLoaderData()
  // console.log(chefInfo);

  return (
      <div>
        <h3>Chefs Info</h3>
      <div className='grid grid-cols-3 gap-3'>
      {
        chefs.map(chef => <Chef
         chef={chef}
        ></Chef>
        )
        
      }
      </div>
      </div>
  );
};

export default Chefs;