import React, { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover/Cover';
  
import UseMenu from '../../../hooks/UseMenu';
import OrderTap from '../OrderTab/OrderTap';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {
    <Helmet>
    <title>Bistro Boss | Order Food</title>
</Helmet>
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks','offered'];
    const { category } = useParams()
    console.log(category)
    const initialIndex=categories.indexOf(category)
    console.log(initialIndex)

    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = UseMenu()


    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const soup = menu.filter(item => item.category === 'soup')
    const dessert = menu.filter(item => item.category === 'dessert')
    const drinks = menu.filter(item => item.category === 'drinks')
    const offered = menu.filter(item => item.category === 'offered')
    return (
        <div>
            <Cover img={orderCover} title='order Food'></Cover>
            {/* <Tabs  onSelect={(index) => setTabIndex(index)}> */}
            <Tabs defaultIndex={initialIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Desert</Tab>
                    <Tab>Drinks</Tab>
                    <Tab>offered</Tab>
                </TabList>
                <TabPanel>
                    <OrderTap items={salad}></OrderTap>
                </TabPanel>
                <TabPanel>
                    <OrderTap items={pizza}></OrderTap>
                </TabPanel>
                <TabPanel>
                    <OrderTap items={soup}></OrderTap>
                </TabPanel>
                <TabPanel>
                    <OrderTap items={dessert}></OrderTap>
                </TabPanel>
                <TabPanel>
                    <OrderTap items={drinks}></OrderTap>
                </TabPanel>
                <TabPanel>
                    <OrderTap items={offered}></OrderTap>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;