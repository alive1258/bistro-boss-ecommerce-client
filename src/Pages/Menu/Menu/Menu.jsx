import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../../Shared/Cover/Cover';
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import offeredImg from '../../../assets/menu/pizza-bg.jpg'
import UseMenu from '../../../hooks/UseMenu';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import MenuCategory from '../MenuCategory/MenuCategory';

const Menu = () => {
    const [menu] = UseMenu()
    const dessert = menu.filter(item => item.category === 'dessert')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const pizza = menu.filter(item => item.category === 'pizza')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuImg} title="Our Menu"></Cover>
            {/* main cover  */}
            <SectionTitles
                subHeading="Dont miss"
                heading="Todays Offered"
            ></SectionTitles>
            {/* offerd menu items  */}
            <MenuCategory items={offered} title='offered' img={offeredImg}></MenuCategory>

            {/* desered menu items  */}
            <MenuCategory items={dessert} img={dessertImg} title="dessert"></MenuCategory>
            {/* Pizza menu items  */}
            <MenuCategory items={pizza} img={pizzaImg} title="pizza"></MenuCategory>
            {/* Salad menu items  */}
            <MenuCategory items={salad} img={saladImg} title="salad"></MenuCategory>

            {/* Soup menu items  */}
            <MenuCategory items={soup} img={soupImg} title="soup"></MenuCategory>


        </div>
    );
};

export default Menu;