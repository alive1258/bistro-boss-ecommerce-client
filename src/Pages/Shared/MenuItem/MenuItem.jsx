import React from 'react';

const MenuItem = ({ item }) => {
    const { image, price, name, recipe } = item
    return (
        <div className='flex space-x-4 px-10 py-4'>
            <img className='w-[120px]' style={{borderRadius:'0 200px 200px 200px '}} src={image} alt="" />
            <div>
                <h3 className='uppercase'>{name}</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;