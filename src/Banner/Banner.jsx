import React, { useEffect, useState } from 'react';
// import BannerInfo from '../BannerInfo/BannerInfo';
import { useLoaderData, useParams } from 'react-router-dom';
// import { Button } from 'react-bootstrap';
// import Rating from 'react-rating';

const Banner = () => {
  // const [information, setInformation] = useState([]);
  //  const { id } = useParams();

  // useEffect(() => {
  //   fetch(`http://localhost:4000/banner/${id}`)
  //   .then(res => res.json())
  //   .then(data => console.log(data))
  //   .catch(error => console.error(error))
  // } , [])

  const banner = useLoaderData();
  console.log(banner)

  // const { name, picture, years_of_experience, num_recipes, likes, description, ratings} = banner;

  return (
    <div>
      
      {/* <div>
        <div>
            <img src={picture} alt="" />
        </div>
        <div>
          <h2>{name}</h2>
          <h5>{num_recipes} Recipes</h5>
          <h5>{years_of_experience}</h5>
          <p>{description}</p>
          <div>
           <Rating 
             placeholderRating={ratings}
             readonly
             emptySymbol={<FaStar></FaStar>}
             placeholderSymbol={<FaStar className='text-warning'></FaStar>}
             fullSymbol={<FaRegStar></FaRegStar>}
          ></Rating> 
            <p>{ratings}</p>
            <p>{likes}</p>
          </div>
          <Button>favorite</Button>
        </div>
      </div> */}
    </div>
  );
};

export default Banner;