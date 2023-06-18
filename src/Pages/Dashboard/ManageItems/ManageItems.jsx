import React from 'react';
import SectionTitles from '../../../Components/SectionTitles/SectionTitles';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import UseMenu from '../../../hooks/UseMenu';


const ManageItems = () => {
    const [menu, , refetch] = UseMenu();
    const [axiosSecure] = useAxiosSecure();

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
            console.log('result',result)
            if (result.isConfirmed) {

                axiosSecure.delete(`/menus/${item._id}`)
                    .then(res => {
                        console.log('deleted res', res.data);
                        if (res.data.deletedCount > 0) {
                            refetch();
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
            <SectionTitles heading="Manage All Items" subHeading="Hurry up"></SectionTitles>
            <div className="overflow-y-auto scroll-smooth w-full h-[650px] ">
                <table className="table  w-full">
                    {/* <!-- head --> */}
                    <thead >
                        <tr>
                            <th>
                                #
                            </th>
                            <th>Item</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            menu.map((item, index) => <tr key={item._id}>

                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="flex items-center space-x-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{item.name}</div>

                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.category}


                                </td>
                                <td>${item.price}</td>
                                <td>
                                    <button className="btn btn-ghost btn-xs">Update</button>
                                </td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="btn btn-ghost  bg-red-500 text-white"><FaTrash /></button>
                                </td>
                            </tr>
                            )
                        }






                    </tbody>


                </table>
            </div>


        </div>
    );
};

export default ManageItems;