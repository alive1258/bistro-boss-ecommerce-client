import React, { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { useLocation, useNavigate } from 'react-router-dom';
import UseCart from '../../hooks/UseCart';


const FoodCard = ({ item }) => {
  const { _id, image, price, name, recipe } = item
  const { user } = useContext(AuthContext)
  // ai nicyer du vaby kora jay taily page reload dewa lagy na
  // const [cart,refetch] = UseCart() 
  // const [,refetch] = UseCart()
  const [,refetch] = UseCart()
  const navigate = useNavigate()
  const location = useLocation()


  const handleAddToCart = item => {
    console.log(item)
    if (user && user.email) {
      const cartItem = { menuItemId: _id, name, image, price, email: user.email }

      fetch('http://localhost:5000/carts', {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(cartItem)
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if (data.insertedId) {
            refetch();
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Food added on the cart',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
    }
    else {
      Swal.fire({
        title: 'Please login to order the food',
        // text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Login Now'
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })
        }
      })
    }

  }




  return (

    <div className="card  card-compact w-96 bg-base-100 shadow-xl">
      <figure><img src={image} className='h-[300px] w-full' alt="" />
        <p className='absolute bg-slate-900 text-white right-0 px-4 top-4  mr-4'>{price}</p>
      </figure>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>

        <div className="card-actions justify-center">
          <button onClick={() => handleAddToCart(item)} className="btn bg-slate-100 border-0 border-orange-400 mt-4 border-b-4 btn-outline">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;