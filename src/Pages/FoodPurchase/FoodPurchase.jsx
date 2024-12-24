import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import useAuth from '../../Context/AuthContext/useAuth';
import toast from 'react-hot-toast';
import axios from 'axios';

const FoodPurchase = () => {
    const { user } = useAuth()
    const navigate = useNavigate()
    const food = useLoaderData()
    const { foodName, price, quantity, addBy, _id, purchase_count } = food || {}

    const handlePurchaseFood =async (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.foodName.value
        const foodPrice = parseInt(form.price.value)
        const foodQuantity = parseInt(form.quantity.value)
        const buyer_email = user?.email
        const buyer_name = user?.displayName
        const buying_date = new Date()
        const foodId = _id

        // validation
        if (quantity === 0) {
            return toast.error('Item is not available')
        }
        if(foodQuantity < 0 || foodQuantity === 0){
            return toast.error('Please select one piece of quantity')
        } 
        if (foodQuantity > quantity) {
            return toast.error(`Limit exceeded. Only ${quantity} available`)
        }
        if (user?.email === addBy?.email) {
            return toast.error('Action not Permitted!')
        }
        const order = { foodId, name, foodPrice, foodQuantity, buyer_email, buyer_name, buying_date }
        console.table(order)

        try {
           const {data} = await axios.post('http://localhost:5000/add-order', order)
                    console.log(data)
                    form.reset()
                    if (data.insertedId) {
                        toast.success('Food ordered successfully')
                        navigate('/my-orders')
                    }
                
        } catch(err){
            toast.error(err?.response?.data)
        }
       
    }
    return (
        <div>
            <div className='bg-allFoodBg bg-no-repeat bg-blend-overlay bg-[#696161] bg-cover bg-center py-20'>
                <h3 className='text-center text-6xl font-bold text-white'>Food Purchase</h3>
            </div>
            <div className='w-9/12 md:w-8/12 mx-auto rounded-md my-14 p-4 md:p-7 shadow-xl'>
                {/* row-1 */}
                <form onSubmit={handlePurchaseFood} action="" className='space-y-2'>
                    <div className='md:flex gap-6'>
                        {/* food name */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text dark:text-white">Food Name</span>
                            </div>
                            <input type="text" readOnly defaultValue={foodName} required name='foodName' placeholder="write food name" className="input  rounded-md dark:bg-gray-950 input-bordered w-full" />
                        </label>
                        {/* price */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text dark:text-white">Price</span>
                            </div>
                            <input type="number" readOnly defaultValue={price} required name='price' placeholder="write food price" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
                        </label>
                    </div>
                    {/* row-2 */}
                    <div className='md:flex items-center gap-6'>
                        {/* quantity */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text dark:text-white">Quantity</span>
                            </div>
                            <input type="number" required name='quantity' placeholder="write food quantity" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
                        </label>
                        {/*  buyer name */}
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text dark:text-white">Name</span>
                            </div>
                            <input type="text" readOnly defaultValue={user?.displayName} required name='buyerName' placeholder="buyer name" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
                        </label>
                    </div>
                    {/* buyer email */}
                    <label className="form-control w-full">
                        <div className="label">
                            <span className="label-text dark:text-white">Email</span>
                        </div>
                        <input type="url" readOnly defaultValue={user?.email} required name='buyerEmail' placeholder="Buyer Email" className="input rounded-md dark:bg-gray-950 input-bordered w-full" />
                    </label>
                    <button disabled={quantity === 0} className='btn border-none bg-orange-400 text-white font-semibold w-full'>Purchase</button>
                </form>
            </div>
        </div>
    );
};

export default FoodPurchase;