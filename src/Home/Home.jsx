import React from 'react';
import { Carousel } from 'react-bootstrap';
import Chefs from '../Chefs/Chefs';

const Home = () => {
  return (
    <div className="mt-3 mb-3">
       <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="image.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Bangladeshi Food</h3>
          <p>angladesh is a country of great cuisine. Its food has been shaped by its diverse history and its particular geography. Bangladeshi cuisine is influenced by Mughlai cuisine and many Persian, Turkish, Arabic, and Indian dishes are popular here. So you can guess how many different tastes you will find on any menu.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9Ssv6P1wBScuchSGQgQI8hrQGmsik32VHw&usqp=CAU"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Pakhistani Dishes</h3>
          <p>Pakistani food is rich, packed full of spice, generous with ghee, and unbelievably tasty.

            In this list of the 21 dishes to eat in Pakistan, I’m going to share with you the best dishes I tried during my trip to Pakistan.

            Get ready for some serious Pakistani flavor and regional specialties. Enough introductions, lets get to all the dishes.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRivgLmetg_iZdaN39q3bOIR1WsR0om3_qyMbtA0NizZg28RuvHrKqaAxAFvbgfW6RnfUY&usqp=CAU"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Indian Food</h3>
          <p>
          Indian cuisine encompasses a wide variety of regional cuisine native to India. Given the range of diversity in soil type, climate and occupations, these cuisines vary significantly from each other and use locally available ingredients such as: herbs, vegetables and fruits.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Chefs></Chefs>
    </div>
  );
};

export default Home;