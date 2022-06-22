import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import Header from '../../atoms/headers/header'
import Section from '../../atoms/section'
import Stars from '../../atoms/animations/stars'
// Icons
import { BsDashLg } from "react-icons/bs";
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
//Get content data
import { GetData } from '../../helper'
import data from '../../../content/data'
//Global content variables
const content = GetData(data);
const testimonials = content?.sections?.testimonials


// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const Testimonials = () => {
  return (
    <Section 
      id="testimonial-section"
      className="container"
    >
      <Header title="What our clients say." />
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="review">
                <ImQuotesLeft />
                  {testimonial.review}
                <ImQuotesRight />
                <div className="review-name">
                  <BsDashLg style={{
                    transform:'translateY(-2px)', 
                    color: 'rgba(41, 41, 41, 0.3)' 
                  }}/> 
                  {testimonial.name}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Stars />

    </Section>
  );
}