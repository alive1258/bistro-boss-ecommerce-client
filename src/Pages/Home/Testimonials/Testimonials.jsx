import React, { useEffect, useState } from 'react';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'



const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section className='my-20'>
            <SectionTitles
                subHeading="whats our clients says"
                heading='Tesimonials'
            >

            </SectionTitles>

            <Swiper navigation={true} modules={[Navigation]} className="mySwiper ">

                {
                    reviews.map(review =>
                        <SwiperSlide
                            key={review._id}
                            >
                                <div className='m-24 flex flex-col items-center my-16 px-24'>
                                    <Rating
                                    style={{maxWidth:180}}
                                    value={review.rating}
                                    readOnly
                                    />
                                    <p className='py-7'>{review.details}</p>
                                    <p className='text-2xl text-orange-400'>{review.name}</p>
                                </div>

                        </SwiperSlide>
                    )
                }
            </Swiper>

        </section>
    );
};

export default Testimonials;