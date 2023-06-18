import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitles from "../../../Components/SectionTitles/SectionTitles";

const Category = () => {
    return (
        <section>
              <SectionTitles 
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            ></SectionTitles>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className="text-4xl uppercase  -mt-16 text-center text-white">Salads</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className="text-4xl uppercase  -mt-16 text-center text-white">Pizza</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className="text-4xl uppercase  -mt-16 text-center text-white">Soup</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className="text-4xl uppercase  -mt-16 text-center text-white">Dezart</h3>

                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className="text-4xl uppercase  -mt-16 text-center text-white">Salads</h3>

                </SwiperSlide>

            </Swiper>

        </section>
    );
};

export default Category;