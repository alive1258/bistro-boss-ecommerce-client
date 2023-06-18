import React from 'react';
import { useQuery } from '@tanstack/react-query';
// import { AuthContext } from '../provider/AuthProvider';

import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';


const UseCart = () => {

    const { user, loading } = useAuth();

    const [axiosSecure] = useAxiosSecure()

    const { refetch, data: cart = [] } = useQuery({
        queryKey: ['carts', user?.email],
        enabled: !loading,
  

        queryFn: async () => {
            if (user?.email) {
                const res = await axiosSecure(`/carts?email=${user?.email}`)
                console.log('res from axios', res)
                return res.data;
            }

        },
    })
    return [cart, refetch]

};

export default UseCart;