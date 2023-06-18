import React from 'react';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import UseMenu from '../../../hooks/UseMenu';

const PopularMenu = () => {
    const [menu] =UseMenu()
    const popular = menu.filter(item=> item.category === 'popular')

    return (
        <section>
              <SectionTitles
                heading="From Our Menu"
                subHeading="Popular Items"
            ></SectionTitles>

         <div className='grid md:grid-cols-2 gap-4 px-10'>
            {
                popular.map(item=><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
         </div>
         <button className='btn btn-outline border-0 border-b-4 mt-4'>View details</button>

        </section>
    );
};

export default PopularMenu;