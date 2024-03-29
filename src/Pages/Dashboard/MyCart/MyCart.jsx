import React from 'react';
import { Helmet } from 'react-helmet-async';
import UseCart from '../../../hooks/UseCart';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';


const MyCart = () => {
    const [cart, refetch] = UseCart();
    console.log(cart)
    // return 
    const total = cart?.reduce((sum, item) => item.price + sum, 0)

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/carts/${item._id}`, {
                    method: "DELETE"
                })
                .then(res=>res.json())
                .then(data=>{
                    if(data.deletedCount >0){
                        refetch()
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                          )
                    }
                })


            }
        })

    }



    return (
        <div className='w-11/12'>
            <Helmet>
                <title>BIstro boss | MyCart</title>
            </Helmet>
            <div className='uppercase  flex text-[#151515] items-center font-semibold h-24 justify-around'>
                <h3 className='text-3xl'>Total Items: {cart.length}</h3>
                <h3 className='text-3xl'>Total Price: ${total}</h3>
                <Link to='/dashboard/payment'>
                <button className="btn btn-warning btn-sm">Pay</button>
                </Link>

            </div>

            <div className="overflow-y-auto scroll-smooth w-full h-[650px]">
                <table className="table w-full">
                    {/* head */}
                    <thead >
                        <tr className=''>
                            <th >
                                #
                            </th>
                            <th>Food</th>
                            <th>Item Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr key={item._id}>
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>
                                    {item.name}
                                </td>
                                <td className=''>
                                    <button className='mr-2'><span>-</span></button>
                                   <span>1</span>
                                   <button className='ml-2'> <span>+</span></button>
                                </td>
                                <td className=''>${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost  bg-red-500 text-white"><FaTrash /></button>
                                </td>
                            </tr>)
                        }






                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default MyCart;