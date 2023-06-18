import React from 'react';
import MenuItem from '../../Shared/MenuItem/MenuItem';
import Cover from '../../Shared/Cover/Cover';
import { Link } from 'react-router-dom';

const MenuCategory = ({items,title,img}) => {
    console.log(items,title)
    return (
        <div className='py-10'>
             {
                title && <Cover img={img} title={title}></Cover>
             }
                 <div className='grid md:grid-cols-2 gap-4 '>
            {
                items.map(item=><MenuItem
                key={item._id}
                item={item}
                ></MenuItem>)
            }
         </div>
      <Link to={`/order/${title}`}>
      <button className="btn border-0 mt-4 border-b-4 btn-outline">Order now</button>
      </Link>
        </div>
    );
};

export default MenuCategory;