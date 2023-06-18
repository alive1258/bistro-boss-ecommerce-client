import React from 'react';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import featuredImg from '../../../assets/home/featured.jpg'
import './Featured.css'


const Featured = () => {
    return (
        <section className='featured-Item bg-fixed text-white my-20'>
            <SectionTitles
                subHeading="Check it out"
                heading="Featured Item"
            ></SectionTitles>
            <div className='md:flex  justify-center bg-slate-500 bg-opacity-50 items-center pt-12 py-20 px-36'>
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className='md:ml-10'><p>aug 20 ,2009</p>
                    <p>whre cann i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad officiis ducimus quidem esse illum tempora error laborum deleniti aut nemo.</p>

                    <button className="btn border-0 mt-4 border-b-4 btn-outline">Order now</button>


                </div>
            </div>

        </section>
    );
};

export default Featured;