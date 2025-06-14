import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';

const reviews = [
  {
    name: 'James P.',
    location: 'Hampshire',
    text: 'The whole experience from quote to installation was flawless. I’m already seeing savings!',
    rating: 5,
  },
  {
    name: 'Sara M.',
    location: 'Surrey',
    text: 'Solar Insight explained everything clearly and delivered exactly what they promised.',
    rating: 5,
  },
  {
    name: 'Liam G.',
    location: 'Kent',
    text: 'Professional, honest, and quick. Highly recommend them if you’re going solar.',
    rating: 4,
  },
];

const Reviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true,
    arrows: false,
  };

  return (
    <section className="bg-[#f8fafc] py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-10">
          What Our Customers Say
        </h2>

        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 mx-2 flex flex-col items-center"
            >
              <div className="flex text-yellow-400 mb-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-text text-base italic mb-4">"{review.text}"</p>
              <h4 className="font-semibold text-dark">
                {review.name}, <span className="text-primary">{review.location}</span>
              </h4>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Reviews;
