import React from "react";
import ServicesData from "./ServicesData";
import ServiceImage1 from "../assets/services/services-1.jpg";
import ServiceImage2 from "../assets/services/services-2.jpg";
import ServiceImage3 from "../assets/services/services-3.jpg";
import ServiceImage4 from "../assets/services/services-4.jpg";
import ServiceImage5 from "../assets/services/services-5.jpg";
import ServiceImage6 from "../assets/services/services-6.jpg";

const serviceImages = [
  ServiceImage1,
  ServiceImage2,
  ServiceImage3,
  ServiceImage4,
  ServiceImage5,
  ServiceImage6,
];

const Services = () => {
  return (
    <>
      <section className='Services topMarign'>
        <div className='container'>
          <div className='heading'>
            <h3>MY SERVICES</h3>
            <h1>Interactive Services Offered Me</h1>
          </div>

          <div className='contain grid topMarign'>
            {ServicesData.map((val, index) => {
              return (
                <div className='box' key={val.id}>
                  <div className='img'>
                    <img src={serviceImages[index]} alt='' />
                  </div>
                  <div className='text'>
                    <h2>{val.title}</h2>
                    <p>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
