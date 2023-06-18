import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { FaShoppingCart, FaWallet, FaCalendarAlt, FaHome, FaBook, FaUsers } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { ImSpoonKnife } from 'react-icons/im';
import UseCart from '../hooks/UseCart';
import useAdmin from '../hooks/useAdmin';

const DashBoard = () => {
    const [cart] = UseCart()
    // todo :load data from the server have dynamic is admin based on
    // const isAdmin = true
    const [isAdmin]=useAdmin()
    return (
        <>
            <div className="drawer drawer-mobile">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 bg-[#D1A054] text-[#151515]">
                        {
                            isAdmin ? <>
                                <li><NavLink to='/dashboard/adminhome'><FaHome />Admin Home</NavLink></li>
                                <li><NavLink to='/dashboard/addItem'><ImSpoonKnife />Add an Items</NavLink></li>
                                <li><NavLink to='/dashboard/manageitems'><FaWallet />Manage Items</NavLink></li>
                                <li><NavLink to='/dashboard/history'><FaBook />Manage Booking</NavLink></li>
                                <li><NavLink to='/dashboard/allusers'><FaUsers />All Users</NavLink></li>
          
                            </> :

                                <>
                                    <li><NavLink to='/dashboard/userhome'><FaHome />User Home</NavLink></li>
                                    <li><NavLink to='/dashboard/reservations'><FaCalendarAlt />Reservations</NavLink></li>
                                    <li><NavLink to='/dashboard/history'><FaWallet />Payment History</NavLink></li>
                                    <li>
                                        <NavLink to='/dashboard/mycart'><FaShoppingCart />
                                            My Cart <span className="badge inline badge-secondary">+{cart?.length || 0}</span>

                                        </NavLink>

                                    </li>
                                </>
                        }
                        {/* <!-- Sidebar content here --> */}


                        <div className='border-b text-[#ffffff]'></div>
                        <li><NavLink to='/'><FaHome /> Home</NavLink></li>
                        <li><NavLink to='/menu'><GiHamburgerMenu /> Our Menu</NavLink></li>
                        <li><NavLink to='/order/salad'><FaHome /> Order Food</NavLink></li>



                    </ul>

                </div>
            </div>
        </>
    );
};

export default DashBoard;